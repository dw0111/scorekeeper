import Input from '../Input/Input'
import Button from '../Button/Button'
import styled from 'styled-components'

export default function GameForm({ onCreateGame }) {
  return (
    <Form
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
      <Button>Create game</Button>
    </Form>
  )

  function cleanSubmit(e) {
    e.preventDefault()

    const game = e.target.elements.game.value
    const playersInString = e.target.elements.players.value
    const players = playersInString.trim().split(',')

    return [game, players]
  }
}

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  gap: 40px;
  align-items: end;
  height: 100%;
`
