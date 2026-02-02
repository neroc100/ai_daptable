import React from 'react';
import { useAdaptable } from '../../context/AdaptableContext';
import AI_Completed_Actions_Display from './AI_Completed_Actions_Display';
import AI_allow_display from './AI_allow_display';
import AI_auto_Display from './AI_auto_Display';
import AI_veto_display from './AI_veto_display';
import Adapt_Automation_Button from '../01 Interaction components/Adapt_Automation_Button';
import View_Information_Button from '../01 Interaction components/View_Information_Button';

const AI_Overview_Component = ({ 
    automation_level, 
    classification 
}) => {
    const { adaptable } = useAdaptable();
    
    // Hide component if automation_level is manual and adaptable is false
    if (automation_level === 'manual' && !adaptable) {
        return null;
    }
    
    const renderAutomationLevelComponent = () => {
        switch (automation_level) {
            case 'veto':
                return <AI_veto_display  classification={classification}/>;
            case 'allow':
                return <AI_allow_display classification={classification}/>;
            case 'automated':
                return <AI_auto_Display  classification={classification}/>;
            default:
                return null;
        }
    };

    const isSingleColumn = () => {
        return ['manual', 'infoacqu', 'infoanalysis'].includes(automation_level);
    };

    const getCompletedActionsProps = () => {
        switch (automation_level) {
            case 'veto':
                return { showAcquisition: true, showAnalysis: true, showActionSelection: true, showActionImplementation: true };
            case 'allow':
                return { showAcquisition: true, showAnalysis: true, showActionSelection: true, showActionImplementation: false };
            case 'automated':
                return { showAcquisition: true, showAnalysis: true, showActionSelection: true, showActionImplementation: true };
            case 'manual':
                return { showAcquisition: true, showAnalysis: true, showActionSelection: true, showActionImplementation: false };
            case 'infoacqu':
                return { showAcquisition: true, showAnalysis: false, showActionSelection: false, showActionImplementation: false };
            case 'infoanalysis':
                return { showAcquisition: true, showAnalysis: true, showActionSelection: false, showActionImplementation: false };
            default:
                return {};
        }
    };

    return (
         <div className="w-[90%] px-4 py-5 flex flex-col gap-8">
            <div className="w-full text-center text-xl font-bold font-['ui-sans-serif'] pb-1">AI Overview & Automation Controls</div>
            
            {isSingleColumn() ? (
                automation_level === 'manual' ? (
                    adaptable && (
                        <div className="flex flex-col gap-3 w-full">
                            <Adapt_Automation_Button direction="increase" />
                        </div>
                    )
                ) : (
                    <div className="flex flex-col gap-3 w-full">
                        <AI_Completed_Actions_Display {...getCompletedActionsProps()} />
                    </div>
                )
            ) : (
                <div className="flex flex-col gap-6 w-full mt-8">
                    <div className="flex flex-row gap-8 items-start w-full">
                        {/* Left Column */}
                        <div className="w-1/2 flex flex-col gap-3 border-r border-gray-300 pr-8">
                            <AI_Completed_Actions_Display {...getCompletedActionsProps()} />
                        </div>
                        
                        {/* Right Column */}
                        <div className="w-1/2 flex flex-col gap-3 pl-8">
                            <AI_Classification classification={classification} />
                            {/* Horizontal separator */}
                            <div className="w-full h-px bg-gray-400 mb-4 mt-4"></div>
                            {renderAutomationLevelComponent()}
                        </div>
                    </div>
                    <div className="flex justify-center w-full mt-8">
                        <View_Information_Button />
                    </div>
                </div>
            )}
                  {/* Horizontal separator */}
      <div className="w-full h-px bg-gray-400 mb-4 mt-4"></div>
        </div>
    );
};

export default AI_Overview_Component;