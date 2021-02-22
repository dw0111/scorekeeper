import './Player.css'

export default function Player({ playerName, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      {playerName}
      <div className="Player__counter">
        <button className="Player__btn" onClick={onMinus}>
          -
        </button>
        <span className="Player__score">{score}</span>
        <button className="Player__btn" onClick={onPlus}>
          +
        </button>
      </div>
    </section>
  )
}
