import React, { useState } from 'react';
import Dashboard_Header from '../../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../../components/00 General_Page_Content/Progress_Bar';
import Information_Display from '../../../components/05 AI_Action_Selection/Information_Display';
import Veto_non_malicious_message from '../../../components/05 AI_Action_Selection/VETO/Veto_non_malicious_message';
import AI_allowed_message from '../../../components/06 AI Action Implementation/AI_allowed_message';
import AI_blocked_message from '../../../components/06 AI Action Implementation/AI_blocked_message';

/**
 * Veto Non Malicious Page
 * 
 * This page handles the action of vetoing a non-malicious URL.
 * It displays the decision to veto access to a URL that has been identified as safe.
 * 
 * @returns {JSX.Element} Veto non malicious page component
 */
function Veto_Non_Malicious() {
  const [showAllowedMessage, setShowAllowedMessage] = useState(false);
  const [showBlockedMessage, setShowBlockedMessage] = useState(false);

  const handleCancel = () => {
    // Handle cancel action - could navigate back or show different message
    console.log('Cancel clicked');
  };

  const handleVetoComplete = () => {
    // When veto progress completes, show allowed message
    setShowAllowedMessage(true);
  };

  const handleCloseAllowedMessage = () => {
    setShowAllowedMessage(false);
  };

  const handleCloseBlockedMessage = () => {
    setShowBlockedMessage(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <Dashboard_Header />
        <URL_presentation />
        <Separator />
        <Veto_non_malicious_message 
          onCancel={handleCancel}
          onComplete={handleVetoComplete}
        />
        <Information_Display />
        <Progress_Bar />
        
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

export default Veto_Non_Malicious;
