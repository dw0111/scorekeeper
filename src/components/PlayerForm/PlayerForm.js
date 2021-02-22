import './PlayerForm.css'

export default function PlayerForm({ handleSubmit, players, addPlayer }) {
  return (
    <form
      className="PlayerForm"
      onSubmit={event => handleSubmit(event, players, addPlayer)}
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
