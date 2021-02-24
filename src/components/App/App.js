import { useState } from 'react'
import Player from '../Player/Player'
import Button from '../Button/Button'
import GameForm from '../GameForm/GameForm'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import styled from 'styled-components'
import HistoryEntry from '../HistoryEntry/HistoryEntry'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('play')
  const [history, setHistory] = useState([])

  function endGame() {
    setHistory([{ nameOfGame, players, id: uuidv4() }, ...history])
    setNameOfGame('')
    setPlayers([])
    setCurrentPage('history')
  }

  return (
    <AppGrid>
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={newGame} />
        </div>
      )}

      {currentPage === 'game' && (
        <GamePage>
          <Header text={nameOfGame} />
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
          <Button onClick={endGame}>End Game</Button>
        </GamePage>
      )}

      {currentPage === 'history' && (
        <div>
          {history.map(({ nameOfGame, players, id }) => (
            <HistoryEntry nameOfGame={nameOfGame} players={players} key={id} />
          ))}
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

  function newGame(game, playerNames) {
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setNameOfGame(game)
    setCurrentPage('game')
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
