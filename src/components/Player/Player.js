import styled from 'styled-components'
import Button from '../Button/Button'

export default function Player({ playerName, score, onMinus, onPlus }) {
  return (
    <PlayerSection>
      {playerName}
      <ScoreDiv>
        <Button onClick={onMinus}> - </Button>
        <span>{score}</span>
        <Button onClick={onPlus}> + </Button>
      </ScoreDiv>
    </PlayerSection>
  )
}

const PlayerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ScoreDiv = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  span {
    ${({ color }) => 'color: hsl(' + color + ', 50%, 50%);'}
  }
`
