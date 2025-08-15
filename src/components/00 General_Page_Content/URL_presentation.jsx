import React from 'react';

/**
 * URL Presentation Component
 * 
 * This component displays a URL input field with a label. It shows a sample URL
 * and provides a structured layout for URL display and input.
 * 
 * @returns {JSX.Element} URL presentation component with input field
 */
function URL_presentation() {
  return (
    // Main URL container with white background and light border
    <div className="w-[1250px] h-40 min-w-80 p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start ">
      {/* URL input section container */}
      <div className="self-stretch h-10 flex flex-col justify-start items-start">
        {/* URL label */}
        <div className="self-stretch justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose">URL</div>
        
        {/* URL input field container */}
        <div className="self-stretch h-20 min-w-60 px-4 py-6 bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-zinc-300 inline-flex justify-start items-center overflow-hidden">
          {/* URL text container */}
          <div className="w-[1170px] h-8 relative">
            {/* Sample URL text - positioned relatively for natural flow */}
            <div className="w-[1170px] justify-start text-stone-900 text-2xl font-normal font-['Inter'] leading-normal">
              https://spg.ethz.ch/group/people/doctoral-students/neele-roch.html
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default URL_presentation;