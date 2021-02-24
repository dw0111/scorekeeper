import styled from 'styled-components'

export default function Navigation({ onNavigate, pages, activeIndex }) {
  return (
    <Nav>
      {pages.map((page, index) =>
        index === activeIndex ? (
          <ActiveButton key={page} onClick={() => onNavigate(page, index)}>
            {page}
          </ActiveButton>
        ) : (
          <NavButton key={page} onClick={() => onNavigate(page, index)}>
            {page}
          </NavButton>
        )
      )}
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
`

const ActiveButton = styled.button`
  background: #fae48bff;
  padding: 15px;
  border: none;
  width: 50%;
`
