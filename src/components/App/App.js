import { useState } from 'react'
import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'
import GameForm from '../GameForm/GameForm'
import Header from '../Header/Header'
import History from '../HistoryEntry/HistoryEntry'
import Navigation from '../Navigation/Navigation'
import styled from 'styled-components'

function App() {
  let [players, setPlayers] = useState([
    { name: 'John Doe', score: 2 },
    { name: 'Jane Doe', score: 40 },
  ])

  const [activeIndex, setActiveIndex] = useState(0)
  const pages = ['Play', 'History']

  return (
    <AppGrid>
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
        onClick={() =>
          setPlayers(players.map(player => ({ name: player.name, score: 0 })))
        }
      >
        Reset scores
      </Button>
      <Button onClick={() => setPlayers([])}>Reset all</Button>
      <GameForm onCreateGame={newGame} />
      <Header text="Carcassonne" />
      <History
        nameOfGame="Carcassonne"
        players={[{ name: 'John Doe', score: 40 }]}
      />
      <Navigation
        onNavigate={(page, index) => {
          console.log(`Changed to ${page}`)
          setActiveIndex(index)
        }}
        pages={pages}
        activeIndex={activeIndex}
      />
    </AppGrid>
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

  function newGame(game, players) {
    console.log(`Game is called ${game}. The players are ${players}`)
  }
}

export default App

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
