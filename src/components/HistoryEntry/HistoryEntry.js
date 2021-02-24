import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryElement>
      <HistoryName>{nameOfGame}</HistoryName>
      <HistoryPlayers>
        {players.map(player => (
          <HistoryPlayer key={uuidv4()}>
            <span>{player.name}</span>
            <span>{player.score}</span>
          </HistoryPlayer>
        ))}
      </HistoryPlayers>
    </HistoryElement>
  )
}

const HistoryElement = styled.section`
  display: grid;
  gap: 10px;
  width: 100%;
`

const HistoryName = styled.div`
  font-size: 120%;
`
const HistoryPlayers = styled.div`
  display: grid;
  gap: 8px;
`

const HistoryPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
