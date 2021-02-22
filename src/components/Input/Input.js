import './Input.css'

export default function Input({ labelText, placeholderText, name }) {
  return (
    <label className="Input">
      {labelText}
      <input
        className="Input__input"
        placeholder={placeholderText}
        name={name}
      />
    </label>
  )
}
