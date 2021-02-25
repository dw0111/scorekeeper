import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function Navigation() {
  return (
    <Nav>
      <NavButtonStyled as={NavLink} exact to="/">
        Create
      </NavButtonStyled>

      <NavButtonStyled as={NavLink} to="/history">
        History
      </NavButtonStyled>
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
const NavButtonStyled = styled(Button)`
  border-radius: 0;
`
