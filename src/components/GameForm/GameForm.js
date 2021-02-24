import Input from '../Input/Input'
import Button from '../Button/Button'

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
      <Button>New game</Button>
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
