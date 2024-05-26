import styled from "styled-components"

const TitleDiv = styled.div<{$color: string}>`
  color: var(${p => p.$color});
  font-weight: 600;
  font-size: 2rem;
`;

const Title = (props: {text: string, color: string}) => {
  return (
    <TitleDiv $color={props.color}>{props.text}</TitleDiv>
  )
}

export default Title