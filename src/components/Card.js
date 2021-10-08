import styled from "styled-components/macro"

export default function Card({ title, text, author, color }) {
  return (
    <Wrapper>
      <Title color={color}>{title}</Title>
      <p>{text}</p>
      <small>{author ? author : "Anonymous"}</small>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 4px;
`

const Title = styled.h2`
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: normal;
  margin: 0;
`
