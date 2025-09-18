import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useUrlCounter } from './UrlCounterContext';
import { NUM_FREEZE_PROBES, MIN_SEC_FREEZE_PROBE, MAX_SEC_FREEZE_PROBE } from '../constants/config';

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

  // Choose exactly NUM_FREEZE_PROBES URL indices for probes (once per session)
  const [probeUrls] = useState(() => {
    // Check if freeze probe URLs are already stored in localStorage
    const stored = localStorage.getItem('freeze_probe_urls');
    if (stored) {
      const urls = JSON.parse(stored);
      console.log('Freeze probe URLs loaded from localStorage:', urls);
      return urls;
    }
    // Generate new URLs if not stored
    const urls = pickUnique(NUM_FREEZE_PROBES, maxUrls);
    localStorage.setItem('freeze_probe_urls', JSON.stringify(urls));
    console.log('Freeze probe URLs selected:', urls);
    return urls;
  });
  // Choose exactly NUM_FREEZE_PROBES delays in seconds (MIN_SEC_FREEZE_PROBE..MAX_SEC_FREEZE_PROBE)
  const [probeDelaysSec] = useState(() => {
    // Check if freeze probe delays are already stored in localStorage
    const stored = localStorage.getItem('freeze_probe_delays');
    if (stored) {
      const delays = JSON.parse(stored);
      console.log('Freeze probe delays loaded from localStorage:', delays);
      return delays;
    }
    // Generate new delays if not stored
    const delays = pickInRange(NUM_FREEZE_PROBES, MIN_SEC_FREEZE_PROBE, MAX_SEC_FREEZE_PROBE);
    localStorage.setItem('freeze_probe_delays', JSON.stringify(delays));
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
  const [activeProbeIndex, setActiveProbeIndex] = useState(null); // 0..2
  
  // Track which freeze probes have already been shown for the current URL
  const [probeShownForCurrentUrl, setProbeShownForCurrentUrl] = useState(false);

  // Timer bookkeeping per URL view
  const urlShownAtRef = useRef(Date.now());
  const timeoutIdRef = useRef(null);

  // Function to start freeze probe timer when URL is presented
  const startFreezeProbeTimer = () => {
    // Reset probe shown state for new URL
    setProbeShownForCurrentUrl(false);
    
    // Clear any existing timeout
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    // If current urlCount is one of the probes, schedule modal
    const probeIdx = probeUrls.indexOf(urlCount);
    if (probeIdx !== -1) {
      const delayMs = (probeDelaysSec[probeIdx] ?? 10) * 1000;
      urlShownAtRef.current = Date.now();
      timeoutIdRef.current = setTimeout(() => {
        setActiveProbeIndex(probeIdx);
        setProbeShownForCurrentUrl(true);
        console.log(`Freeze probe shown for URL ${urlCount} after timer`);
      }, delayMs);
      console.log(`Freeze probe timer started for URL ${urlCount}, will trigger after ${probeDelaysSec[probeIdx]} seconds`);
    }
  };

  // Function to stop freeze probe timer
  const stopFreezeProbeTimer = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
      console.log(`Freeze probe timer stopped for URL ${urlCount}`);
    }
  };

  const closeProbe = () => {
    setActiveProbeIndex(null);
  };

  // Function to trigger freeze probe immediately (called by buttons)
  const triggerProbeOnClick = () => {
    const probeIdx = probeUrls.indexOf(urlCount);
    if (probeIdx !== -1 && !probeShownForCurrentUrl) {
      // Clear any pending timeout since we're triggering immediately
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
      setActiveProbeIndex(probeIdx);
      setProbeShownForCurrentUrl(true);
      console.log(`Freeze probe triggered immediately on button click for URL ${urlCount}`);
    } else if (probeIdx !== -1 && probeShownForCurrentUrl) {
      console.log(`Freeze probe for URL ${urlCount} already shown, not triggering on button click`);
    }
  };

  // Function to reset freeze probe selections (called when returning to main page)
  const resetFreezeProbes = () => {
    localStorage.removeItem('freeze_probe_urls');
    localStorage.removeItem('freeze_probe_delays');
    console.log('Freeze probe selections reset');
  };

  const value = {
    closeProbe,
    triggerProbeOnClick,
    resetFreezeProbes,
    startFreezeProbeTimer,
    stopFreezeProbeTimer,
    probeUrls,
    probeDelaysSec,
    activeProbeIndex,
    probeShownForCurrentUrl,
  };

  return (
    <FreezeProbeContext.Provider value={value}>
      {children}
    </FreezeProbeContext.Provider>
  );
};


