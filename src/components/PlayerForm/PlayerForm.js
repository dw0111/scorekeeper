import './PlayerForm.css'

export default function PlayerForm({ players, addPlayer }) {
  function cleanSubmit(event) {
    const form = event.target
    const input = form.elements.name
    const name = input.value

    form.reset()
    input.focus()

    return name
  }

  return (
    <form
      className="PlayerForm"
      onSubmit={event => {
        event.preventDefault()
        const newPlayer = cleanSubmit(event)
        addPlayer([{ name: newPlayer, score: 0 }, ...players])
      }}
    >
      <label>
        Add player:
        <input
          className="PlayerForm__input"
          placeholder="Player name"
          name="name"
        />
      </label>
    </form>
  )
}
