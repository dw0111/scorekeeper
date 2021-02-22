import './App.css'
import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'
import { useState } from 'react'

function App() {
  let [players, setPlayers] = useState(['John Doe', 'Jane Doe'])

  return (
    <div className="App">
      <PlayerForm
        handleSubmit={addPlayer}
        players={players}
        addPlayer={setPlayers}
      />
      {players.map(player => (
        <Player
          playerName={player}
          score={0}
          onMinus={() => console.log('Minus was clicked')}
          onPlus={() => console.log('Plus was clicked')}
          key={player}
        />
      ))}
      <Button
        text="Reset scores"
        onClick={() => console.log('Scores were reset')}
      />
      <Button
        text="Reset all"
        onClick={() => console.log('Everything was reset')}
      />
    </div>
  )
}

export default App

function addPlayer(event, players, addPlayer) {
  event.preventDefault()

  const form = event.target
  const input = form.elements.name
  const name = input.value

  form.reset()
  input.focus()

  addPlayer([...players, name])
}
