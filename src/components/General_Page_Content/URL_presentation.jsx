import React from 'react';

function URL_presentation() {
  return (
    <div className="w-[1250px] h-40 min-w-80 p-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-6">
  <div className="self-stretch h-10 flex flex-col justify-start items-start gap-2">
    <div className="self-stretch justify-start text-stone-900 text-2xl font-semibold font-['Inter'] leading-loose">URL</div>
    <div className="self-stretch h-14 min-w-60 px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-0.50px] outline-zinc-300 inline-flex justify-start items-center overflow-hidden">
      <div className="w-[1170px] h-4 relative">
        <div className="w-[1170px] left-0 top-[-4.50px] absolute justify-start text-stone-900 text-2xl font-normal font-['Inter'] leading-normal">https://spg.ethz.ch/group/people/doctoral-students/neele-roch.html</div>
      </div>
    </div>
  </div>
</div>
  );
}

export default URL_presentation;