import React, { useState } from 'react';
import Dashboard_Header from '../../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../../components/00 General_Page_Content/Progress_Bar';
import Information_Display from '../../../components/05 AI_Action_Selection/Information_Display';
import Non_malicious_message from '../../../components/05 AI_Action_Selection/ALLOW/non_malicious_message';
import AI_allowed_message from '../../../components/06 AI Action Implementation/AI_allowed_message';
import AI_blocked_message from '../../../components/06 AI Action Implementation/AI_blocked_message';
import AI_allowing_progress from '../../../components/06 AI Action Implementation/AI_allowing_progress';
import AI_blocking_progress from '../../../components/06 AI Action Implementation/AI_blocking_progress';

/**
 * Allow Non Malicious Page
 * 
 * This page handles the action of allowing a non-malicious URL.
 * It displays the decision to allow access to a URL that has been identified as safe.
 * 
 * @returns {JSX.Element} Allow non malicious page component
 */
function Allow_non_malicious() {
  const [showAllowedMessage, setShowAllowedMessage] = useState(false);
  const [showBlockedMessage, setShowBlockedMessage] = useState(false);
  const [showAllowingProgress, setShowAllowingProgress] = useState(false);
  const [showBlockingProgress, setShowBlockingProgress] = useState(false);

  const handleConfirm = () => {
    setShowAllowingProgress(true);
  };

  const handleCancel = () => {
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
        {/* Header */}
        <Dashboard_Header />
        
        {/* URL Input Section */}
        <URL_presentation />
        
        {/* Separator */}
        <Separator />
        
        {/* Non Malicious Message Component */}
        <Non_malicious_message 
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
        
        {/* Information Display Component */}
        <Information_Display />
        
        {/* Progress Bar */}
        <Progress_Bar />
        
        {showAllowingProgress && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <AI_allowing_progress onComplete={handleAllowingComplete} />
          </div>
        )}
        
        {showBlockingProgress && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            <AI_blocking_progress onComplete={handleBlockingComplete} />
          </div>
        )}
        
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

export default Allow_non_malicious;
