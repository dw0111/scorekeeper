import './Player.css'

export default function Player({name, score, onMinus, onPlus}) {
  return (
    <div className="Player">
      {name}
      <button className="Player__button" onClick={onMinus}> - </button>
      <span>{score}</span>
      <button className="Player__button" onClick={onPlus}> + </button>
    </div>
  )
}