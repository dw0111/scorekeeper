import styled from 'styled-components/macro'

export default function Button({ onClick, children }) {
  return <ButtonElement onClick={onClick}>{children}</ButtonElement>
}

const ButtonElement = styled.button`
  padding: 5px 10px;
  background: #bbb;
  border: none;
  border-radius: 4px;
  width: 100%;
`
