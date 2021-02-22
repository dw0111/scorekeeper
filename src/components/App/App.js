import './App.css';
import PlayerForm from '../PlayerForm/PlayerForm';

function App() {
  return (
    <div className="App">
      <PlayerForm onAddPlayer={event => onAddPlayer(event)}/>
    </div>
  );
}

export default App;

function onAddPlayer(event) {
  event.preventDefault()
  console.log(`${event.target.elements.name.value} was added`)
}