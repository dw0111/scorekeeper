import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav>
      <NavButton
        onClick={() => onNavigate('play')}
        isActive={currentPage === 'play'}
      >
        Play
      </NavButton>
      <NavButton
        onClick={() => onNavigate('history')}
        isActive={currentPage === 'history'}
      >
        History
      </NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100vw;
`

const NavButton = styled.button`
  padding: 15px;
  background: #bbb;
  border: none;
  width: 50%;
  ${props => props.isActive && 'background: #fae48bff;'}
`
