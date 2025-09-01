# URL Analysis Dashboard

A React-based web application for conducting security experiments where experts evaluate URL safety with and without AI assistance.

## Project Structure

```
src/
├── components/
│   ├── 00 General_Page_Content/          # Shared UI components
│   │   ├── Dashboard_Header.jsx          # Main title
│   │   ├── URL_presentation.jsx          # URL display
│   │   ├── Progress_Bar.jsx              # Progress indicator
│   │   └── Separator.jsx                 # Visual divider
│   │
│   ├── 02 Human_Action_Implementation/   # Manual decision components
│   │   ├── Allow_Button.jsx              # Allow URL button
│   │   ├── Block_Button.jsx              # Block URL button
│   │   └── Success_Message_*.jsx         # Success feedback
│   │
│   ├── 03 AI_Info_Acquisition/           # AI data collection
│   │   ├── AI_info_Acq_box.jsx           # AI acquisition status
│   │   ├── Info_Display.jsx              # Feature information display
│   │   └── Feature_boxes/                # Individual feature components
│   │
│   ├── 04 AI_Info_Analysis/              # AI analysis components
│   │   └── AI_info_ana_box.jsx           # AI analysis status
│   │
│   ├── 05 AI_Action_Selection/           # AI recommendation components
│   │   ├── AI_Action_Selection_box.jsx   # AI decision status
│   │   ├── Review_Button.jsx             # Information review button
│   │   └── ALLOW/VETO/AUTO/              # Decision-specific messages
│   │
│   ├── 06 AI Action Implementation/      # AI action execution
│   │   └── AI_progress_bar.jsx           # AI action progress
│   │
│   └── AI information/                   # AI information popup
│       └── ai_info_message.jsx           # Combined AI info display
│
├── pages/                                # Main application pages
│   ├── 01_manual.jsx                     # Manual URL evaluation
│   ├── 02_info_acquisition.jsx           # AI data collection view
│   ├── 03_info_analysis.jsx              # AI analysis view
│   ├── 04_allow_malicious.jsx            # Allow malicious URL
│   ├── 05_veto_non_malicious.jsx         # Veto non-malicious URL
│   └── 06_auto_malicious.jsx             # Auto-block malicious URL
│
└── context/                              # React context
    └── ConditionContext.jsx              # Experiment condition management
```



## Tech Stack

- **React 18** - Frontend framework with hooks and functional components
- **Vite** - Build tool and development server for fast development
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library for UI elements
- **React Router** - Client-side routing for navigation between pages

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd automation

# Install dependencies
bun install

# Start development server
bun run dev
```

