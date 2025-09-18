import React from 'react';
import { useFreezeProbe } from '../context/FreezeProbeContext';

/**
 * Freeze Probe Page
 * 
 * Dedicated page for freeze probe questions during the experiment.
 * Displays a placeholder question to test participants' situational awareness.
 */
function FreezeProbe() {
  const { activeProbeIndex, probeUrls, probeDelaysSec, closeProbe } = useFreezeProbe();

  const handleSubmit = () => {
    // Close the probe and continue with the experiment
    closeProbe();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[760px] max-w-[90vw] px-8 py-6 bg-white rounded-lg relative outline shadow-xl" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-stone-900">Freeze Probe</h2>
          <p className="text-xl text-neutral-700">What color was the URL?</p>
          <div className="text-sm text-neutral-500">
            {/* Minimal debug context to verify behavior */}
            URL #{probeUrls[activeProbeIndex]} • Trigger after {probeDelaysSec[activeProbeIndex]}s
          </div>
          <div className="flex justify-end">
            <button
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-200 shadow-xl hover:shadow-md hover:opacity-85"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreezeProbe;
