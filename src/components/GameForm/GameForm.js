import Input from '../Input/Input'
import Button from '../Button/Button'
import styled from 'styled-components'

export default function GameForm({ onCreateGame }) {
  return (
    <Form onSubmit={e => handleSubmit(e)}>
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

  function handleSubmit(e) {
    e.preventDefault()

    const game = e.target.elements.game.value
    const playerNamesInString = e.target.elements.players.value
    const playerNames = playerNamesInString.split(',').map(name => name.trim())

    onCreateGame(game, playerNames)
  }
}

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  gap: 40px;
  align-items: end;
  height: 100%;
`
