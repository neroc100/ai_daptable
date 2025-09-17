# URL Analysis Dashboard

A full-stack web application for conducting security experiments where experts evaluate URL safety with and without AI assistance. Features a React frontend for user interaction and a FastAPI backend for API services.

## Project Structure

```
automation/
├── frontend/                             # React frontend application
│   ├── src/                             # React source code
│   │   ├── components/                  # UI components
│   │   ├── pages/                       # Application pages
│   │   ├── composables/                 # Custom hooks
│   │   └── context/                     # React context
│   ├── package.json                     # Frontend dependencies
│   └── vite.config.js                   # Vite configuration
├── backend/                             # FastAPI backend
│   ├── main.py                          # FastAPI application
│   ├── pyproject.toml                   # Python dependencies
│   └── uv.lock                          # Dependency lock file
└── README.md                            # Project documentation
```

## Tech Stack

### Frontend
- **React 19** - Frontend framework with hooks and functional components
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Router** - Client-side routing

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **uv** - Fast Python package manager

## Installation & Setup

### Frontend
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
bun install

# Start development server
bun run dev
```

### Backend
```bash
# Navigate to backend directory
cd backend

# Install dependencies
uv sync

# Start development server
uv run uvicorn main:app --reload
```

### Database

The application uses SQLite database which is automatically created when you run the backend server. No additional setup is required.

## Data Logging System

The application automatically logs comprehensive data for each trial to analyze user behavior and decision-making patterns. All data is stored in the backend/automation.db file.

### Logged Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `participant_id` | String | Unique identifier for each participant |
| `condition` | Integer | Experiment condition (1-6) determining the interface type |
| `mental_effort_rating` | Integer | User's self-reported mental effort rating (1-150 scale) |
| `url` | String | The actual URL being evaluated |
| `true_classification` | String | Ground truth classification ("Malicious" or "Non-Malicious") |
| `reaction_time_ms` | Integer | Time in milliseconds from URL presentation to user decision |
| `human_action` | String | Type of action taken ("allow", "block", "confirm", "override", "none") |
| `human_action_result` | String | Final outcome ("URL blocked" or "URL allowed") |
| `accuracy` | Integer | Decision accuracy (1 = correct, 0 = incorrect) |
| `view_information_clicked` | Integer | Information seeking behavior (1 = clicked, 0 = not clicked, null = not available) |
| `conditions_seen` | String | JSON array of conditions visited for this URL in order (e.g., "[1,3,1,5]" - allows duplicates) |
| `condition_times` | String | JSON array of time spent on each condition in milliseconds (e.g., "[5000,3000,2000]" - matches conditions_seen order) |
| `adaptable` | Boolean | Whether the adaptable automation feature was enabled for this experiment session |
| `created_at` | DateTime | Timestamp when the trial was recorded |

### Data Collection Flow

1. **URL Presentation**: Timestamp logged when URL is displayed to user, condition timer started
2. **User Interaction**: Timestamp and action type logged when user makes decision
3. **Condition Changes**: Time spent on each condition logged when switching conditions (adaptable mode)
4. **Information Seeking**: Tracks if user clicked "View Information" button (conditions 4-6)
5. **Trial Submission**: All data compiled and sent to backend when user submits mental effort rating
6. **Data Storage**: Complete trial data stored in database with calculated accuracy and results

### Accuracy Calculation

- **Correct Decision**: Malicious URLs blocked OR Non-Malicious URLs allowed → Accuracy = 1
- **Incorrect Decision**: Malicious URLs allowed OR Non-Malicious URLs blocked → Accuracy = 0

### Human Action Types

- **allow**: User directly allows the URL (condition 1-3)
- **block**: User directly blocks the URL  (condition 1-3)
- **confirm**: User confirms AI's recommendation in condition 4
- **override**: User overrides AI's recommendation in condition 4 or 5
- **none**: Next button was clicked in condition 5 or 6

### Session Management

- **Main Page Reset**: All localStorage cleared when returning to main page
- **URL Reset**: View information status reset for each new URL
- **Reload Protection**: Timestamps preserved during accidental page reloads
