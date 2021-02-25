import styled from 'styled-components/macro'

export default styled.button`
  padding: 10px;
  background: ${({ isActive }) => (isActive ? '#fae48bff' : '#ddd')};
  border: none;
  border-radius: 4px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: inherit;
  &.active {
    background: #fae48bff;
  }
`
