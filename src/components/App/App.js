import { useState } from 'react'
import Player from '../Player/Player'
import Button from '../Button/Button'
import GameForm from '../GameForm/GameForm'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import styled from 'styled-components'
import HistoryEntry from '../HistoryEntry/HistoryEntry'

function App() {
  let [players, setPlayers] = useState([
    { name: 'John Doe', score: 2 },
    { name: 'Jane Doe', score: 40 },
  ])

  const [currentPage, setCurrentPage] = useState('history')

  return (
    <AppGrid>
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={newGame} />
        </div>
      )}

      {currentPage === 'game' && (
        <GamePage>
          <Header text="Carcassonne" />
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
              setPlayers(
                players.map(player => ({ name: player.name, score: 0 }))
              )
            }
          >
            Reset scores
          </Button>
          <Button onClick={() => console.log('End Game')}>End Game</Button>
        </GamePage>
      )}

      {currentPage === 'history' && (
        <div>
          <HistoryEntry
            nameOfGame="Carcassonne"
            players={[{ name: 'John Doe', score: 40 }]}
          />
        </div>
      )}

      {(currentPage === 'play' || currentPage === 'history') && (
        <div>
          <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
        </div>
      )}
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

const GamePage = styled.div`
  display: grid;
  gap: 20px;
`
