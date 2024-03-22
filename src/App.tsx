import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import Pokemons from './pages/Pokemons'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/:name" element={<Pokemon/>} />
        <Route path="pokedex/pokemons" element={<Pokemons/>} />
        <Route path="pokedex/" element={<Pokemons/>} />
      </Routes>
    </Router>
  )
}

export default App
