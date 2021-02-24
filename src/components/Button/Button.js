import styled from 'styled-components/macro'

export default function Button({ onClick, children, isActive }) {
  return (
    <ButtonElement onClick={onClick} isActive={isActive}>
      {children}
    </ButtonElement>
  )
}

const ButtonElement = styled.button`
  padding: 10px;
  background: #bbb;
  border: none;
  border-radius: 4px;
  width: 100%;
  ${({ isActive }) => isActive && 'background: #fae48bff;'}
`
