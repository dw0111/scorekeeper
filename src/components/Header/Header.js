import styled from 'styled-components'

export default function Header({ text }) {
  return (
    <HeaderElement>
      <h2>{text}</h2>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  text-align: center;
  font-size: 90%;
`
