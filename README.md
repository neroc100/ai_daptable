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


