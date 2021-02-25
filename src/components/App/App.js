import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import Navigation from '../Navigation/Navigation'
import PlayPage from '../PlayPage/PlayPage'
import GamePage from '../GamePage/GamePage'
import HistoryPage from '../HistoryPage/HistoryPage'
import { Switch, Route, useHistory } from 'react-router-dom'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('play')
  const [history, setHistory] = useState([])
  const { push } = useHistory()

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <PlayPage onCreateGame={newGame} />
        </Route>
        <Route path="/game">
          <GamePage
            nameOfGame={nameOfGame}
            players={players}
            onMinus={onMinus}
            onPlus={onPlus}
            onReset={setPlayers}
            onEndGame={endGame}
          />
        </Route>
        <Route>
          <HistoryPage history={history} />
        </Route>
      </Switch>

      {(currentPage === 'play' || currentPage === 'history') && <Navigation />}
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
    push('/game')
  }

  function endGame() {
    setHistory([{ nameOfGame, players, id: uuidv4() }, ...history])
    setNameOfGame('')
    setPlayers([])
    push('/history')
  }
}

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`
