import React from 'react';

function Make_Decision_Botton() {
  return (
    <div className="w-96 h-16 relative rounded-lg">
      <div className="w-96 h-16 p-2 left-0 top-0 absolute bg-emerald-50 rounded-lg outline outline-4 outline-offset-[-4px] outline-green-600 inline-flex justify-center items-center gap-2">
        <div className="text-center justify-center">
          <span className="text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">Make</span>
          <span className="text-zinc-800 text-base font-bold font-['Inter'] leading-none"> </span>
          <span className="text-zinc-800 text-2xl font-bold font-['Inter'] leading-normal">decision</span>
        </div>
        <div data-svg-wrapper data-size="16" className="relative">
          <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 26.7084L27 19L19.5 11.2917M9 26.7084L16.5 19L9 11.2917" stroke="#2C2C2C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Make_Decision_Botton;
