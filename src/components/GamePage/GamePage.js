import styled from 'styled-components/macro'
import Button from '../Button/Button'
import Header from '../Header/Header'
import Player from '../Player/Player'

export default function GamePage({
  nameOfGame,
  players,
  onMinus,
  onPlus,
  onReset,
  onEndGame,
}) {
  return (
    <GamePageStyled>
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
          onReset(players.map(player => ({ name: player.name, score: 0 })))
        }
      >
        Reset scores
      </Button>
      <Button onClick={onEndGame}>End Game</Button>
    </GamePageStyled>
  )
}

const GamePageStyled = styled.div`
  display: grid;
  gap: 20px;
`
