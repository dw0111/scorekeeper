import styled from 'styled-components/macro'

export default function Input({ labelText, placeholderText, name }) {
  return (
    <label className="Input">
      {labelText}
      <InputField placeholder={placeholderText} name={name} />
    </label>
  )
}

const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 7px;
  margin: 10px 0;
  border: 2px solid #123;
  border-radius: 3px;
`
