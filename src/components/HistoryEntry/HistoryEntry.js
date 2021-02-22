import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="History">
      <div className="History__name">{nameOfGame}</div>

      {players.map(player => (
        <div key={player.name}>
          <span className="History__player">{player.name}</span>
          <span className="History__score">{player.score}</span>
        </div>
      ))}
    </section>
  )
}