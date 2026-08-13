
# 🎬 Movie Explorer

A modern, responsive movie discovery web app built with React and the TMDB API. Search for movies, view detailed information, and save your favorites — all with a premium, cinematic dark UI.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)

## ✨ Features

- **Movie Search** — search TMDB's full movie catalog by title, with Enter-key and click-to-search support
- **Popular Movies** — trending/popular movies load by default on the home page
- **Movie Details** — full details view with poster, overview, rating, runtime, language, and genres
- **Favorites** — save movies to a personal favorites list, persisted in Local Storage across sessions
- **Responsive Design** — clean layouts across mobile, tablet, and desktop
- **Loading, Error & Empty States** — skeleton loading grid, retryable error handling, and clear empty-state messaging
- **Accessible UI** — keyboard-navigable cards and buttons, visible focus states, descriptive alt text and ARIA labels

## 🛠️ Tech Stack

- **React** (Vite) — component-based UI
- **React Router DOM** — client-side routing
- **Tailwind CSS v4** — utility-first styling
- **Lucide React** — icon library
- **TMDB API** — movie data source
- **Local Storage** — favorites persistence (no backend required)

## 📁 Project Structure

```
src/
├── components/       # Reusable UI building blocks
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── Loading.jsx
│   ├── ErrorState.jsx
│   └── EmptyState.jsx
├── pages/            # Full-screen views
│   ├── Home.jsx
│   ├── MovieDetails.jsx
│   └── Favorites.jsx
├── services/         # API request logic
│   └── movieApi.js
├── hooks/            # Reusable stateful logic
│   └── useFavorites.js
├── App.jsx           # Routing shell
├── main.jsx          # App entry point
└── index.css         # Tailwind import + global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get a TMDB API key

1. Create a free account at [themoviedb.org](https://www.themoviedb.org/)
2. Go to **Settings → API** and request a **Developer** API key
3. Copy your **API Key (v3 auth)**

### 4. Set up environment variables

Create a `.env` file in the project root:

```
VITE_TMDB_API_KEY=your_api_key_here
```

> The `.env` file is git-ignored and should never be committed. Never hardcode your API key in source files.

### 5. Run the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📦 Production Build

```bash
npm run build     # Creates an optimized build in /dist
npm run preview   # Serves the production build locally for testing
```

## 🧪 Testing Checklist

- [x] Popular movies load on home page
- [x] Search (Enter key and button click)
- [x] Clear search returns to popular movies
- [x] No-results state with recovery action
- [x] Movie details page with full metadata
- [x] Back navigation
- [x] Add/remove favorites
- [x] Favorites persist after refresh (Local Storage)
- [x] Empty favorites state
- [x] Loading skeleton state
- [x] API error state with retry
- [x] Broken poster image fallback
- [x] Responsive across mobile/tablet/desktop
- [x] Keyboard navigation and focus states

## 📝 License

This project was built for educational and portfolio purposes.

## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.
- Icons by [Lucide](https://lucide.dev/)