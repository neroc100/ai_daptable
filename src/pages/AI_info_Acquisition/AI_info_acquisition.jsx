import React, { useState } from 'react';
import Dashboard_Header from '../../components/General_Page_Content/Dashboard_Header';
import URL_presentation from '../../components/General_Page_Content/URL_presentation';
import Separator from '../../components/General_Page_Content/Separator';
import Progress_Bar from '../../components/General_Page_Content/Progress_Bar';
import AI_in_progress_message from '../../components/AI_Info_Acquisition/AI_in_progress_message';

/**
 * AI Information Acquisition Page
 * 
 * This page handles the AI information acquisition process.
 * Users can interact with AI systems to gather information about URLs.
 * 
 * @returns {JSX.Element} AI information acquisition page component
 */
function AI_info_acquisition() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(true);

  /**
   * Handles the modal close event
   * Currently set to always show the modal for demonstration
   */
  const handleCloseModal = () => {
    setShowModal(false);
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
        
        {/* Progress Bar */}
        <Progress_Bar />

        {/* Modal Overlay - appears when AI processing is active */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            {/* AI in progress message component */}
            <AI_in_progress_message />
          </div>
        )}
      </div>
    </div>
  );
}

export default AI_info_acquisition;
