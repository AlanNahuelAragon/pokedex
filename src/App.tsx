import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import Pokemons from './pages/Pokemons'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="pokedex/pokemon/:name" element={<Pokemon />} />
        <Route path="pokedex/pokemons" element={<Pokemons />} />
        <Route path="pokedex/" element={<Pokemons />} />
        <Route path='pokedex/pokemonnotfound' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
