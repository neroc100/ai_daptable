import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useUrlCounter } from './UrlCounterContext';
import { NUM_FREEZE_PROBES, MIN_SEC_FREEZE_PROBE, MAX_SEC_FREEZE_PROBE } from '../constants/config';
import { FREEZE_PROBE_QUESTIONS } from '../constants/freezeProbeConfig';

/**
 * Freeze Probe Context
 * 
 * Manages freeze probe functionality for situational awareness testing during the experiment.
 * Freeze probes are random interruptions that test participants' attention to detail.
 * 
 * Features:
 * - Random selection of URLs, timing, and questions for each experiment session
 * - Persistent state across page reloads
 * - Timer-based and button-triggered probe activation
 * - Prevents duplicate probes for the same URL
 */

const FreezeProbeContext = createContext();

/**
 * Hook to access freeze probe context
 */
export const useFreezeProbe = () => {
  const ctx = useContext(FreezeProbeContext);
  if (!ctx) throw new Error('useFreezeProbe must be used within FreezeProbeProvider');
  return ctx;
};

/**
 * Utility to pick k unique integers in range [1, max]
 */
const pickUnique = (k, max) => {
  const set = new Set();
  while (set.size < k && set.size < max) {
    const n = Math.floor(Math.random() * max) + 1; // 1..max
    set.add(n);
  }
  return Array.from(set).sort((a, b) => a - b);
};

/**
 * Utility to pick k random integers in range [min, max]

 */
const pickInRange = (k, min, max) => Array.from({ length: k }, () => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
});

/**
 * Freeze Probe Provider Component
 * 
 * Provides freeze probe functionality to all child components.
 * Manages random selection of URLs, timing, and questions for freeze probes.
 * 
 */
export const FreezeProbeProvider = ({ children }) => {
  const { urlCount, maxUrls } = useUrlCounter();

  /**
   * Randomly select URL indices for freeze probes (persistent across session)
   * Each experiment session gets exactly NUM_FREEZE_PROBES unique URLs
   */
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
  /**
   * Randomly select delay times for freeze probes (persistent across session)
   * Each probe gets a random delay between MIN_SEC_FREEZE_PROBE and MAX_SEC_FREEZE_PROBE
   */
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

  /**
   * Randomly select unique questions for freeze probes (persistent across session)
   * Each probe gets a unique randomly selected question from FREEZE_PROBE_QUESTIONS
   */
  const [probeQuestions] = useState(() => {
    // Check if freeze probe questions are already stored in localStorage
    const stored = localStorage.getItem('freeze_probe_questions');
    if (stored) {
      const questions = JSON.parse(stored);
      console.log('Freeze probe questions loaded from localStorage:', questions);
      return questions;
    }
    // Generate new unique questions if not stored
    const selectedIndices = new Set();
    const questions = [];
    
    // Ensure we don't select more questions than available
    const maxQuestions = Math.min(NUM_FREEZE_PROBES, FREEZE_PROBE_QUESTIONS.length);
    
    while (selectedIndices.size < maxQuestions) {
      const randomIndex = Math.floor(Math.random() * FREEZE_PROBE_QUESTIONS.length);
      if (!selectedIndices.has(randomIndex)) {
        selectedIndices.add(randomIndex);
        questions.push(FREEZE_PROBE_QUESTIONS[randomIndex]);
      }
    }
    
    localStorage.setItem('freeze_probe_questions', JSON.stringify(questions));
    console.log('Freeze probe questions selected (unique):', questions);
    return questions;
  });

  /**
   * Create mapping of URL index to delay time for convenience
   * Used for quick lookup of delay time for a specific URL
   */
  const probeMap = useMemo(() => {
    const map = new Map();
    probeUrls.forEach((u, i) => map.set(u, probeDelaysSec[i] ?? 10));
    console.log('Freeze probe mapping (URL -> delay in seconds):', Object.fromEntries(map));
    return map;
  }, [probeUrls, probeDelaysSec]);

  /**
   * Track which freeze probe is currently active (persistent across page reloads)
   * null = no active probe, 0-2 = index of active probe
   */
  const [activeProbeIndex, setActiveProbeIndex] = useState(() => {
    // Check if there's an active probe stored in localStorage
    const stored = localStorage.getItem('active_freeze_probe_index');
    return stored ? parseInt(stored) : null;
  });
  
  /**
   * Track whether a freeze probe has been shown for the current URL
   * Prevents duplicate probes for the same URL (persistent across page reloads)
   */
  const [probeShownForCurrentUrl, setProbeShownForCurrentUrl] = useState(() => {
    // Check if probe was shown for current URL
    const stored = localStorage.getItem('freeze_probe_shown_for_current_url');
    return stored === 'true';
  });

  // Timer bookkeeping per URL view
  const urlShownAtRef = useRef(Date.now());
  const timeoutIdRef = useRef(null);

  /**
   * Start freeze probe timer when URL is presented
   * Resets state for new URL and schedules probe if current URL is a probe URL
   */
  const startFreezeProbeTimer = () => {
    // Reset probe shown state for new URL
    setProbeShownForCurrentUrl(false);
    localStorage.removeItem('freeze_probe_shown_for_current_url');
    localStorage.removeItem('active_freeze_probe_index');
    
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
        localStorage.setItem('active_freeze_probe_index', probeIdx.toString());
        localStorage.setItem('freeze_probe_shown_for_current_url', 'true');
        console.log(`Freeze probe shown for URL ${urlCount} after timer`);
      }, delayMs);
      console.log(`Freeze probe timer started for URL ${urlCount}, will trigger after ${probeDelaysSec[probeIdx]} seconds`);
    }
  };

  /**
   * Stop freeze probe timer
   * Clears any pending timeout for the current URL
   */
  const stopFreezeProbeTimer = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
      console.log(`Freeze probe timer stopped for URL ${urlCount}`);
    }
  };

  /**
   * Close freeze probe modal
   * Clears active probe index and removes from localStorage
   */
  const closeProbe = () => {
    setActiveProbeIndex(null);
    localStorage.removeItem('active_freeze_probe_index');
  };

  /**
   * Trigger freeze probe immediately on button click
   * Used when user clicks Decision_Button or Next_Button before timer expires
   * Prevents duplicate probes for the same URL
   */
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
      localStorage.setItem('active_freeze_probe_index', probeIdx.toString());
      localStorage.setItem('freeze_probe_shown_for_current_url', 'true');
      console.log(`Freeze probe triggered immediately on button click for URL ${urlCount}`);
    } else if (probeIdx !== -1 && probeShownForCurrentUrl) {
      console.log(`Freeze probe for URL ${urlCount} already shown, not triggering on button click`);
    }
  };

  /**
   * Reset all freeze probe data (called when returning to main page)
   * Clears all localStorage entries and prepares for new experiment session
   */
  const resetFreezeProbes = () => {
    localStorage.removeItem('freeze_probe_urls');
    localStorage.removeItem('freeze_probe_delays');
    localStorage.removeItem('freeze_probe_questions');
    localStorage.removeItem('active_freeze_probe_index');
    localStorage.removeItem('freeze_probe_shown_for_current_url');
    console.log('Freeze probe selections reset');
  };

  /**
   * Context value object containing all state and methods
   * Made available to all child components through the context provider
   */
  const value = {
    closeProbe,
    triggerProbeOnClick,
    resetFreezeProbes,
    startFreezeProbeTimer,
    stopFreezeProbeTimer,
    probeUrls,
    probeDelaysSec,
    probeQuestions,
    activeProbeIndex,
    probeShownForCurrentUrl,
  };

  return (
    <FreezeProbeContext.Provider value={value}>
      {children}
    </FreezeProbeContext.Provider>
  );
};


