import './App.css'
import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'
import { useState } from 'react'

function App() {
  let [players, setPlayers] = useState([
    { name: 'John Doe', score: 2 },
    { name: 'Jane Doe', score: 40 },
  ])

  return (
    <div className="App">
      <PlayerForm players={players} addPlayer={setPlayers} />
      {players.map((player, index) => (
        <Player
          playerName={player.name}
          score={player.score}
          onMinus={() => onMinus(index)}
          onPlus={() => onPlus(index)}
          key={player.name}
        />
      ))}
      <Button
        text="Reset scores"
        onClick={() =>
          setPlayers(players.map(player => ({ name: player.name, score: 0 })))
        }
      />
      <Button text="Reset all" onClick={() => setPlayers([])} />
    </div>
  )

  function onPlus(index) {
    setPlayers([
      ...players.slice(0, index),
      { name: players[index].name, score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function onMinus(index) {
    setPlayers([
      ...players.slice(0, index),
      { name: players[index].name, score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }
}

export default App
