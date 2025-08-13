import React from 'react';

function Progress_Bar() {
  return (
    <>
      <div data-value="0%" className="w-96 h-11 relative">
        <div className="w-96 h-1.5 left-[16px] top-[20px] absolute bg-white rounded-[3px]">
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="6" height="6" rx="3" fill="#0088FF"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-48 justify-center text-white text-base font-normal font-['Inter'] leading-none">Progress x out of 12 URLs </div>
    </>
  );
}

export default Progress_Bar;
