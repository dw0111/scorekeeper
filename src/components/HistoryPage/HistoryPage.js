import styled from 'styled-components/macro'
import HistoryEntry from '../HistoryEntry/HistoryEntry'

export default function HistoryPage({ history }) {
  return (
    <HistoryPageStyled>
      {history.map(({ nameOfGame, players, id }) => (
        <HistoryEntry nameOfGame={nameOfGame} players={players} key={id} />
      ))}
    </HistoryPageStyled>
  )
}

const HistoryPageStyled = styled.div`
  display: grid;
  gap: 30px;
`
