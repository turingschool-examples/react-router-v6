import './App.css';
import CreatureDetails from '../CreatureDetails/CreatureDetails';

function App() {
  return (
    <main className="App">
      <nav>
        <a href="/puppies" className="nav">Puppies</a>
        <a href="/sharks" className="nav">Sharks</a>
      </nav>
      <h1>Puppies or Sharks?</h1>
    </main>
  );
}

export default App;
