import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome'
import MovieList from './components/MovieList';
import MoviesAdd from './components/MoviesAdd';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome username="Nicolas" />} />
        <Route path="movies/add" element={<MoviesAdd />} />
        <Route path="/movies/list" element={<MovieList />} />

      </Routes>
    </Router >
  )
}

export default App
