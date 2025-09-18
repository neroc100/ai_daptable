import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useUrlCounter } from './UrlCounterContext';

const FreezeProbeContext = createContext();

export const useFreezeProbe = () => {
  const ctx = useContext(FreezeProbeContext);
  if (!ctx) throw new Error('useFreezeProbe must be used within FreezeProbeProvider');
  return ctx;
};

// Utility to pick k unique integers in [1, max]
const pickUnique = (k, max) => {
  const set = new Set();
  while (set.size < k && set.size < max) {
    const n = Math.floor(Math.random() * max) + 1; // 1..max
    set.add(n);
  }
  return Array.from(set).sort((a, b) => a - b);
};

// Utility to pick k integers in range [min, max]
const pickInRange = (k, min, max) => Array.from({ length: k }, () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
});

export const FreezeProbeProvider = ({ children }) => {
  const { urlCount, maxUrls } = useUrlCounter();

  // Choose exactly three URL indices for probes (once per session)
  const [probeUrls] = useState(() => {
    const urls = pickUnique(3, maxUrls);
    console.log('Freeze probe URLs selected:', urls);
    return urls;
  });
  // Choose exactly three delays in seconds (5..30)
  const [probeDelaysSec] = useState(() => {
    const delays = pickInRange(3, 5, 30);
    console.log('Freeze probe delays selected (seconds):', delays);
    return delays;
  });

  // Derived map urlIndex -> delaySec for convenience
  const probeMap = useMemo(() => {
    const map = new Map();
    probeUrls.forEach((u, i) => map.set(u, probeDelaysSec[i] ?? 10));
    console.log('Freeze probe mapping (URL -> delay in seconds):', Object.fromEntries(map));
    return map;
  }, [probeUrls, probeDelaysSec]);

  // Modal state
  const [isProbeOpen, setIsProbeOpen] = useState(false);
  const [activeProbeIndex, setActiveProbeIndex] = useState(null); // 0..2

  // Timer bookkeeping per URL view
  const urlShownAtRef = useRef(Date.now());
  const timeoutIdRef = useRef(null);

  // When URL changes, (re)start the countdown if this URL is a probe URL
  useEffect(() => {
    // Reset timer start
    urlShownAtRef.current = Date.now();
    // Clear any existing timeout
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    // If current urlCount is one of the probes, schedule modal
    const probeIdx = probeUrls.indexOf(urlCount);
    if (probeIdx !== -1) {
      const delayMs = (probeDelaysSec[probeIdx] ?? 10) * 1000;
      timeoutIdRef.current = setTimeout(() => {
        setActiveProbeIndex(probeIdx);
        setIsProbeOpen(true);
      }, delayMs);
    }
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, [urlCount, probeUrls, probeDelaysSec]);

  const closeProbe = () => {
    setIsProbeOpen(false);
  };

  // Function to trigger freeze probe immediately (called by buttons)
  const triggerProbeOnClick = () => {
    const probeIdx = probeUrls.indexOf(urlCount);
    if (probeIdx !== -1 && !isProbeOpen) {
      // Clear any pending timeout since we're triggering immediately
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
      setActiveProbeIndex(probeIdx);
      setIsProbeOpen(true);
    }
  };

  const value = {
    isProbeOpen,
    closeProbe,
    triggerProbeOnClick,
    probeUrls,
    probeDelaysSec,
    activeProbeIndex,
  };

  return (
    <FreezeProbeContext.Provider value={value}>
      {children}
    </FreezeProbeContext.Provider>
  );
};


