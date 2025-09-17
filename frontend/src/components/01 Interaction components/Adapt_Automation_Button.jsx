import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useButtonContext } from '../../context/ConditionContext';

/**
 * Adapt Automation Button Component
 * 
 * Button for increasing or decreasing automation level during the experiment.
 * Updates the condition in localStorage directly.
 * 
 * @param {Object} props - Component props
 * @param {string} props.direction - Direction of change ('increase' or 'decrease')
 * @param {string} props.className - Additional CSS classes (optional)
 * @returns {JSX.Element} Adapt automation button component
 */
function Adapt_Automation_Button({ direction = 'increase', className = "" }) {
  const navigate = useNavigate();
  const { Condition, setCondition, addConditionSeen, logConditionTime } = useButtonContext();

  // Handle button click - update condition and navigate
  const handleClick = () => {
    // Get current condition from context
    const currentCondition = Condition || 1;
    
    let newCondition;
    if (direction === 'increase') {
      newCondition = Math.min(6, currentCondition + 1);
    } else {
      newCondition = Math.max(1, currentCondition - 1);
    }
    
    // Log time spent on current condition and start timer for new condition
    logConditionTime(newCondition);
    
    // Add condition to the seen list (do this before updating condition to ensure proper order)
    addConditionSeen(newCondition);
    
    // Update the context with new condition
    setCondition(newCondition);
    
    console.log(`Condition changed from ${currentCondition} to ${newCondition}`);
    
    // Navigate to the page with the new condition
    const conditionRoutes = {
      1: '/manual',
      2: '/info-acquisition', 
      3: '/info-analysis',
      4: '/allow',
      5: '/veto',
      6: '/auto'
    };
    
    const newRoute = conditionRoutes[newCondition];
    if (newRoute) {
      navigate(newRoute);
    }
  };

  // Determine button text
  const getButtonText = () => {
    if (direction === 'increase') {
      return 'Increase Automation';
    } else {
      return 'Decrease Automation';
    }
  };

  return (
    <div 
      className={`px-6 py-3 bg-white rounded-lg outline outline-2 outline-offset-[-2px] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer shadow-xl hover:opacity-85 hover:shadow-md transition-all duration-200 ${className}`}
      style={{ outlineColor: 'var(--eth-blue-100)' }}
      onClick={handleClick}
    >
      {/* Button text with ETH styling */}
      <div className="justify-start text-zinc-800 text-lg font-bold font-['Inter'] leading-normal">
        {getButtonText()}
      </div>
    </div>
  );
}

export default Adapt_Automation_Button;
