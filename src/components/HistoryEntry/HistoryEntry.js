import './HistoryEntry.css'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <section className="HistoryEntry">
      <div className="History__name">{nameOfGame}</div>
      <div className="History__players">
        {players.map((player, index) => (
          <>
            <span key={index}>{player.name}</span>
            <span key={`${index}.score`}>{player.score}</span>
          </>
        ))}
      </div>
    </section>
  )
}
