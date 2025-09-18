import React from 'react';
import { useFreezeProbe } from '../../context/FreezeProbeContext';

function FreezeProbeModal() {
  const { isProbeOpen, closeProbe, activeProbeIndex, probeUrls, probeDelaysSec } = useFreezeProbe();

  if (!isProbeOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000]">
      <div className="w-[760px] max-w-[90vw] px-8 py-6 bg-white rounded-lg relative outline" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-stone-900">Freeze Probe</h2>
          <p className="text-xl text-neutral-700">What time is it?</p>
          <div className="text-sm text-neutral-500">
            {/* Minimal debug context to verify behavior */}
            URL #{probeUrls[activeProbeIndex]} • Trigger after {probeDelaysSec[activeProbeIndex]}s
          </div>
          <div className="flex justify-end">
            <button
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-200 shadow-xl hover:shadow-md hover:opacity-85"
              style={{ backgroundColor: 'var(--eth-blue-100)' }}
              onClick={closeProbe}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreezeProbeModal;


