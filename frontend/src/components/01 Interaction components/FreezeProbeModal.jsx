import React, { useState, useEffect } from 'react';
import { useFreezeProbe } from '../../context/FreezeProbeContext';

function FreezeProbeModal() {
  const { closeProbe, activeProbeIndex, probeUrls, probeDelaysSec, probeQuestions, probeShownForCurrentUrl } = useFreezeProbe();
  const [freezeProbeAnswer, setFreezeProbeAnswer] = useState('');
  const [error, setError] = useState('');

  // Reset answer when a new probe is shown
  useEffect(() => {
    if (probeShownForCurrentUrl && activeProbeIndex !== null) {
      // Clear the answer for the new probe
      setFreezeProbeAnswer('');
      setError('');
      // Also clear from localStorage
      localStorage.removeItem('freeze_probe_answer');
    }
  }, [probeShownForCurrentUrl, activeProbeIndex]);

  if (!probeShownForCurrentUrl || activeProbeIndex === null) return null;

  // Get the question for the current active probe
  const currentQuestion = probeQuestions[activeProbeIndex] || "What color was the URL?";

  const handleSubmit = () => {
    if (!freezeProbeAnswer.trim()) {
      setError('Please provide an answer before submitting');
      return;
    }
    
    // Save the answer to localStorage
    localStorage.setItem('freeze_probe_answer', freezeProbeAnswer.trim());
    console.log('Freeze probe answer saved:', freezeProbeAnswer.trim());
    
    // Close the modal
    closeProbe();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000]">
      <div className="w-[760px] max-w-[90vw] px-8 py-6 bg-white rounded-lg relative outline" style={{ outlineColor: 'var(--eth-blue-100)' }}>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-stone-900">Freeze Probe</h2>
          <p className="text-xl text-neutral-700">{currentQuestion}</p>
          
          {/* Text input field */}
          <div className="flex flex-col gap-2">
            <input
              id="freeze-probe-answer"
              type="text"
              value={freezeProbeAnswer}
              onChange={(e) => {
                
                setFreezeProbeAnswer(e.target.value);
                // Save to localStorage as user types
                localStorage.setItem('freeze_probe_answer', e.target.value);
                setError(''); // Clear error when user types
              }}
              placeholder="Enter your answer here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{ borderColor: 'var(--eth-gray-100)' }}
            />
            {error && (
              <p className="text-sm" style={{ color: 'var(--eth-red-100)' }}>{error}</p>
            )}
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

export default FreezeProbeModal;


