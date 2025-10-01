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
│   ├── database.py                      # Database models and configuration
│   ├── pyproject.toml                   # Python dependencies
│   ├── Dockerfile                       # Backend container configuration
│   └── .dockerignore                    # Docker ignore patterns
├── db/                                  # Database data directory
│   └── data/                            # PostgreSQL data files
├── docker-compose.yaml                  # Docker services configuration
├── .env                                 # Environment variables (create this)
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
- **SQLModel** - Database ORM and validation
- **PostgreSQL** - Production database
- **Docker** - Containerization

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

#### Backend & Database
```bash
# Start the database and backend
docker-compose up db -d

##### Optional for starting only the backend
# Navigate to backend directory
cd backend

# Install dependencies
uv sync

# Start development server
uv run uvicorn main:app --reload
```

### Database

The application uses **PostgreSQL** database running in a Docker container:
- **Production**: PostgreSQL in Docker container
- **Data persistence**: Database data stored in `./db/data/` directory
- **Port**: 5433 (mapped from container port 5432)
- **Auto-setup**: Database and tables are created automatically on first run

## Data Logging System

The application automatically logs comprehensive data for each trial to analyze user behavior and decision-making patterns. All data is stored in the PostgreSQL database.

### Database Management

#### View Data
```bash
# Connect to PostgreSQL database
docker exec -it db psql -U automation -d automation

# View all trials
SELECT * FROM trial;

# Exit PostgreSQL
\q
```

#### Export Data
```bash
# Export all trials to CSV
docker exec -it db psql -U automation -d automation -c "\copy (SELECT * FROM trial) TO '/tmp/trials.csv' WITH CSV HEADER;"

# Copy file from container to host
docker cp db:/tmp/trials.csv ./trials_export.csv
```

#### Reset Database
```bash
# Reset database (drops and recreates all tables)
curl -X POST http://localhost:8000/database/reset
```


### Logged Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `participant_id` | String | Unique identifier for each participant |
| `condition` | Integer | Experiment condition (1-6) determining the interface type |
| `mental_effort_rating` | Integer | User's self-reported mental effort rating (1-150 scale) |
| `url` | String | The actual URL being evaluated |
| `true_classification` | String | Ground truth classification ("Malicious" or "Non-Malicious") |
| `reaction_time_ms` | Integer | Time in milliseconds from URL presentation to user decision |
| `page_load_time` | Integer | Timestamp when URL page was loaded (milliseconds unix timestamp) |
| `button_click_time` | Integer | Timestamp when decision button was clicked (milliseconds unix timestamp) |
| `human_action` | String | Type of action taken ("allow", "block", "confirm", "override", "none") |
| `human_action_result` | String | Final outcome of human action ("URL blocked" or "URL allowed") |
| `accuracy` | Integer | accuracy of human decision (1 = correct, 0 = incorrect) |
| `view_information_clicked` | Integer | did the human click View information button? (1 = clicked, 0 = not clicked, null = not available) |
| `conditions_seen` | String | JSON array of conditions visited for this URL in order (e.g., "[1,3,1,5]" - allows duplicates) |
| `condition_times` | String | JSON array of time spent on each condition in milliseconds (e.g., "[5000,3000,2000]" - matches conditions_seen order) |
| `adaptable` | Boolean | Whether the adaptable automation feature was enabled for this experiment session |
| `freeze_probe_question` | String | The freeze probe question that was displayed (e.g., "What color was the URL?") - NULL if no freeze probe occurred |
| `freeze_probe_answer` | String | Answer to freeze probe question (e.g., "green", "red") - NULL if no freeze probe occurred |
| `created_at` | DateTime | Timestamp when the trial was recorded |



### Session Management

The experiment follows a structured flow with specific parameter generation, tracking, and reset points:

#### **Experiment Configuration (from `/constants/`)**
- **`config.js`**: Global experiment settings
  - `ADAPTABLE = true`: Enables automation level adaptation during experiment
  - `MAX_NUM_URL = 15`: Total number of URLs in experiment sequence
  - `NUM_FREEZE_PROBES = 3`: Number of freeze probes to show
  - `MIN_SEC_FREEZE_PROBE = 5`: Minimum delay before freeze probe (seconds)
  - `MAX_SEC_FREEZE_PROBE = 15`: Maximum delay before freeze probe (seconds)
- **`freezeProbeConfig.js`**: Freeze probe questions array for situational awareness testing
- **`URL_config.js`**: Complete URL database with 15 URLs, each containing:
  - URL string and malicious classification
  - URL string analysis features (entropy, length, character ratios)
  - Domain characteristics (active time, host, lifetime, directories)
  - Encryption/HTTP response data
  - DNS and network information
  - Content analysis features
  - Reputation and security indicators

#### **Parameter Generation and Tracking Flow**

**1. Experiment Start (`condition.jsx`)**
- **Select**: `condition` (1-6) - Selected experimental condition
- **Navigation**: Routes to participant ID collection

**2. Participant ID Collection (`participant_id.jsx`)**
- **Generated**: `participant_id` - Unique participant identifier
- **Stored**: In global context and localStorage
- **Navigation**: Routes to appropriate condition page based on selected condition

**3. URL Presentation (`URL_presentation.jsx`)**
- **Generated**: `page_load_time` - Unix timestamp when URL displayed
- **Generated**: `current_url_for_timestamp` - Tracks which URL timestamp belongs to
- **Reset**: `view_information_clicked` status for new URL
- **Reset**: `conditions_seen` and `condition_times` arrays for new URL
- **Generated**: `initial_condition_logged_for_url` - Prevents duplicate condition logging
- **Triggered**: Freeze probe timer start for target URLs

**4. User Interaction (Decision Buttons)**
- **Generated**: `button_click_time` - Unix timestamp when decision made
- **Generated**: `human_action` - Type of action taken ("allow", "block", "confirm", "override", "none")
- **Generated**: `reaction_time_ms` - Calculated as button_click_time - page_load_time

**5. Condition Changes (Adaptable Mode)**
- **Generated**: `conditions_seen` - JSON array of conditions visited for current URL
- **Generated**: `condition_times` - JSON array of time spent on each condition
- **Updated**: Real-time tracking of condition switches and timing

**6. Information Seeking (Conditions 4-6)**
- **Generated**: `view_information_clicked` - Whether "View Information" button was clicked
- **Values**: 1 = clicked, 0 = available but not clicked, null = not available

**7. Freeze Probes (Random Interruptions)**
- **Generated**: `freeze_probe_question` - Randomly selected question from predefined array
- **Generated**: `freeze_probe_answer` - Participant's response to freeze probe
- **Timing**: Triggered by timer (5-15 second delay) or immediate button click
- **Scope**: Only logged for trials where freeze probe actually occurred

**8. Trial Submission (`handleTrialSubmit.js`)**
- **Generated**: `mental_effort_rating` - Self-reported effort (0-150 scale)
- **Generated**: `human_action_result` - Final outcome ("URL allowed" or "URL blocked")
- **Generated**: `accuracy` - Decision correctness (1 = correct, 0 = incorrect)
- **Generated**: `adaptable` - Whether adaptable automation was enabled (from config)
- **Generated**: `true_classification` - Ground truth from URL configuration
- **Generated**: `url` - Actual URL string from configuration
- **Reset**: Freeze probe data cleared after successful submission
- **Navigation**: Routes to next URL or completion page

**9. URL Progression (`handleNextURL.js`)**
- **Updated**: `urlCount` incremented (1 to MAX_NUM_URL)
- **Updated**: `currentUrl` switched to next URL in sequence
- **Navigation**: Routes to appropriate condition page for next URL

**10. Experiment Completion (`redirect.jsx`)**
- **Reset**: All localStorage data cleared
- **Reset**: URL counter reset to 1
- **Reset**: Freeze probe selections regenerated
- **Reset**: All experiment contexts cleared
- **Navigation**: Returns to main page for new experiment

#### **Data Persistence and Reset Points**

**Per-URL Reset (New URL Loaded)**
- `view_information_clicked` status
- `conditions_seen` and `condition_times` arrays
- `initial_condition_logged_for_url` flag
- Freeze probe timer and state

**Per-Trial Reset (After Submission)**
- Freeze probe question and answer data
- All timestamp data for next trial

**Per-Session Reset (Experiment Complete)**
- All localStorage data
- All global context state
- URL counter and progression
- Freeze probe random selections

**Reload Protection**
- Timestamps preserved during accidental page reloads
- URL-specific data maintained across reloads
- Context state restored from localStorage where applicable
