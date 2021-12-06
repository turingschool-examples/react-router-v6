import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Creatures from '../Creatures/Creatures';

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink to="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/puppies" element={<Creatures creatureType='puppies'/>} />
      </Routes>
    </main>
  );
}

export default App;
