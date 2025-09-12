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

To run the database use
```bash
cd backend
docker compose up -d 
```
