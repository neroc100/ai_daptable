import React, { useState } from 'react';
import Dashboard_Header from '../../components/00 General_Page_Content/Dashboard_Header';
import URL_presentation from '../../components/00 General_Page_Content/URL_presentation';
import Separator from '../../components/00 General_Page_Content/Separator';
import Progress_Bar from '../../components/00 General_Page_Content/Progress_Bar';
import Analyzed_Info_Display from '../../components/04 AI_Info_Analysis/Analyzed_Info_Display';
import AI_Action_Selection_message from '../../components/05 AI_Action_Selection/AI_Action_Selection_message';

/**
 * AI Action Selection Page
 * 
 * This page displays the results of AI information analysis for action selection.
 * It shows the analyzed information after the AI processing is complete,
 * without the Make Decision button to allow for AI-driven action selection.
 * 
 * The page displays a modal overlay with the AI_Action_Selection_message component,
 * which handles the navigation logic to the next page (dummy) based on the button
 * that was clicked on the main page.
 * 
 * @returns {JSX.Element} AI action selection page component
 */
function AI_Action_Selection() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(true);

  /**
   * Handles the modal close event
   * Note: The actual page navigation is handled within the AI_Action_Selection_message component
   * This function is currently not used as the navigation logic is centralized in the modal component
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
        
        {/* Analysis Sections - Using the Analyzed_Info_Display component */}
        <Analyzed_Info_Display isAnalysisDisplayed={true} />
        
        {/* Progress Bar */}
        <Progress_Bar />

        {/* Modal Overlay - appears when AI action selection is active */}
        {/* The AI_Action_Selection_message component handles the navigation logic */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
            {/* AI action selection message component - handles page navigation */}
            <AI_Action_Selection_message />
          </div>
        )}
      </div>
    </div>
  );
}

export default AI_Action_Selection;
