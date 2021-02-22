import './PlayerForm.css'

export default function PlayerForm({onAddPlayer}) {
  return (
    <form className="PlayerForm" onSubmit={onAddPlayer}>
      <label>
        Add player:
        <input placeholder="Player name" name="name"/>
      </label>
    </form>
  )
}