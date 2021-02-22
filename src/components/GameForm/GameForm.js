import Input from '../Input/Input'
import './GameForm.css'
import '../Button/Button.css'

export default function GameForm({ onCreateGame }) {
  return (
    <form
      className="GameForm"
      onSubmit={e => {
        const [game, players] = cleanSubmit(e)
        onCreateGame(game, players)
      }}
    >
      <Input
        labelText="Name of game"
        placeholderText="e.g. Carcarssonne"
        name="game"
      />
      <Input
        labelText="Player names"
        placeholderText="e.g. John Doe, Jane Doe, ..."
        name="players"
      />
      <button className="Button">New game</button>
    </form>
  )

  function cleanSubmit(e) {
    e.preventDefault()

    const game = e.target.elements.game.value
    const playersInString = e.target.elements.players.value
    const players = playersInString.trim().split(',')

    return [game, players]
  }
}
