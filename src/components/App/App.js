import './App.css';
import PlayerForm from '../PlayerForm/PlayerForm';
import Player from '../Player/Player';

function App() {
  return (
    <div className="App">
      <PlayerForm onAddPlayer={event => onAddPlayer(event)}/>
      <Player name={"John Doe"} score={0} onMinus={() => console.log("Minus was clicked")} onPlus={() => console.log("Plus was clicked")}/>
    </div>
  );
}

export default App;

function onAddPlayer(event) {
  event.preventDefault()
  console.log(`${event.target.elements.name.value} was added`)
}