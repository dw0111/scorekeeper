import './App.css';
import PlayerForm from '../PlayerForm/PlayerForm';
import Player from '../Player/Player';
import Button from '../Button/Button';

function App() {
  return (
    <div className="App">
      <PlayerForm onAddPlayer={event => onAddPlayer(event)}/>
      <Player name={"John Doe"} score={20} onMinus={() => console.log("Minus was clicked")} onPlus={() => console.log("Plus was clicked")}/>
      <Player name={"Jane Doe"} score={30} onMinus={() => console.log("Minus was clicked")} onPlus={() => console.log("Plus was clicked")}/>
      <Button text="Reset scores" onClick={() => console.log("Scores were reset")} />
      <Button text="Reset all" onClick={() => console.log("Everything was reset")} />
    </div>
  );
}

export default App;


function onAddPlayer(event) {
  event.preventDefault()
  console.log(`${event.target.elements.name.value} was added`)
}