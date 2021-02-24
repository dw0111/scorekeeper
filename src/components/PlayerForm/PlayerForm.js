import styled from 'styled-components'

export default function PlayerForm({ players, addPlayer }) {
  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        const newPlayer = cleanSubmit(event)
        addPlayer([{ name: newPlayer, score: 0 }, ...players])
      }}
    >
      <label>
        Add player:
        <input placeholder="Player name" name="name" />
      </label>
    </Form>
  )

  function cleanSubmit(event) {
    const form = event.target
    const input = form.elements.name
    const name = input.value

    form.reset()
    input.focus()

    return name
  }
}

const Form = styled.form`
  input {
    border: 2px solid #bbb;
    width: 100%;
  }
`
