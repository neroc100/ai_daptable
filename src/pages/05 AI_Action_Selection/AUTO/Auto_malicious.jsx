import React, { useState } from 'react';
import Dashboard_Header from '../../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../../components/00 General_Page_Content/Progress_Bar';
import Information_Display from '../../../components/05 AI_Action_Selection/Information_Display';
import Auto_malicious_message from '../../../components/05 AI_Action_Selection/AUTO/Auto_malicious_message';
import AI_allowed_message from '../../../components/06 AI Action Implementation/AI_allowed_message';
import AI_blocked_message from '../../../components/06 AI Action Implementation/AI_blocked_message';
import AI_allowing_progress from '../../../components/06 AI Action Implementation/AI_allowing_progress';
import AI_blocking_progress from '../../../components/06 AI Action Implementation/AI_blocking_progress';

/**
 * Auto Malicious Page
 * 
 * This page handles the automatic action for a malicious URL.
 * It displays the decision to automatically handle a URL that has been identified as malicious.
 * 
 * @returns {JSX.Element} Auto malicious page component
 */
function Auto_Malicious() {
  const [showAllowedMessage, setShowAllowedMessage] = useState(false);
  const [showBlockedMessage, setShowBlockedMessage] = useState(false);
  const [showAllowingProgress, setShowAllowingProgress] = useState(false);
  const [showBlockingProgress, setShowBlockingProgress] = useState(false);
  const [hideAutoMessage, setHideAutoMessage] = useState(false);

  const handleAutoComplete = () => {
    // When auto progress completes, hide auto message and show blocking progress
    setHideAutoMessage(true);
    setShowBlockingProgress(true);
  };

  const handleCloseAllowedMessage = () => {
    setShowAllowedMessage(false);
  };

  const handleCloseBlockedMessage = () => {
    setShowBlockedMessage(false);
  };

  const handleAllowingComplete = () => {
    setShowAllowingProgress(false);
    setShowAllowedMessage(true);
  };

  const handleBlockingComplete = () => {
    setShowBlockingProgress(false);
    setShowBlockedMessage(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation />
        <Separator />
        <Auto_malicious_message 
          onComplete={handleAutoComplete}
          hidden={hideAutoMessage}
        />
        <Information_Display />
        <Progress_Bar />
        
        {/* Progress messages - shown after timer completion */}
        {showAllowingProgress && !showAllowedMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <AI_allowing_progress onComplete={handleAllowingComplete} />
          </div>
        )}
        
        {showBlockingProgress && !showBlockedMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <AI_blocking_progress onComplete={handleBlockingComplete} />
          </div>
        )}
        
        {/* Success messages - shown after progress completion */}
        {showAllowedMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <AI_allowed_message onOKClick={handleCloseAllowedMessage} />
          </div>
        )}
        
        {showBlockedMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <AI_blocked_message onOKClick={handleCloseBlockedMessage} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Auto_Malicious;
