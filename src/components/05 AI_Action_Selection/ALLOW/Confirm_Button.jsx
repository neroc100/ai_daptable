import React from 'react';
import { ChevronsRight } from 'lucide-react';

/**
 * Confirm Button Component
 * 
 * This component displays a confirm button with the specified design.
 * It includes a chevrons right icon and "Confirm" text.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} Confirm button component
 */
function Confirm_Button({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-96 h-11 p-3 bg-zinc-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-zinc-700 transition-colors duration-200"
    >
      <div data-svg-wrapper data-size="16" className="relative">
        <ChevronsRight className="w-4 h-4 text-neutral-100" />
      </div>
      <div className="justify-start text-neutral-100 text-2xl font-semibold font-['Inter'] leading-normal">
        Confirm
      </div>
    </button>
  );
}

export default Confirm_Button;
