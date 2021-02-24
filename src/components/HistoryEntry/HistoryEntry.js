import styled from 'styled-components'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryElement>
      <HistoryName>{nameOfGame}</HistoryName>
      <HistoryPlayers>
        {players.map((player, index) => (
          <>
            <span key={index}>{player.name}</span>
            <span key={`${index}.score`}>{player.score}</span>
          </>
        ))}
      </HistoryPlayers>
    </HistoryElement>
  )
}

const HistoryElement = styled.section`
  width: 100%;
`

const HistoryName = styled.div`
  font-size: 120%;
  margin-bottom: 10px;
`
const HistoryPlayers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
