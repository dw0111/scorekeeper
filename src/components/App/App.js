import { useState } from 'react'
import PlayPage from '../PlayPage/PlayPage'
import Navigation from '../Navigation/Navigation'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import GamePage from '../GamePage/GamePage'
import HistoryPage from '../HistoryPage/HistoryPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('play')
  const [history, setHistory] = useState([])

  return (
    <AppGrid>
      {currentPage === 'play' && <PlayPage onCreateGame={newGame} />}

      {currentPage === 'game' && (
        <GamePage
          nameOfGame={nameOfGame}
          players={players}
          onMinus={onMinus}
          onPlus={onPlus}
          onReset={setPlayers}
          onEndGame={endGame}
        />
      )}

      {currentPage === 'history' && <HistoryPage history={history} />}

      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
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

  function endGame() {
    setHistory([{ nameOfGame, players, id: uuidv4() }, ...history])
    setNameOfGame('')
    setPlayers([])
    setCurrentPage('history')
  }
}

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
