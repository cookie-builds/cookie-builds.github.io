import styled, { keyframes } from 'styled-components';
import LandingPic from '/assets/images/landing-pic.jpg';
import { mediaQuery } from '../../assets/styling';

const slideIn = keyframes`
  0% {
    bottom: 8.5rem;
    opacity: 0;
    scale: 0.95;
  }

  100% {
    bottom: 8rem;
    opacity: 1;
    scale: 1;
  }
`;

const Div = styled.div<{$img: string}>`
  position: relative;
  height: calc(100vh - 2.5rem);
  background-image: url(${p => p.$img});
  background-size: cover;
  background-position: center;
`;

const Span = styled.div`
  position: absolute;
  color: var(--white);
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 600;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  bottom: 8rem;
  width: min-content;
  left: calc(50% - 10rem);
  text-align: center;
  user-select: none;
  opacity: 0;
  animation: ${slideIn} 1.5s ease-out 0.5s forwards;
  scale: 0.95;
  padding: 0 1rem;
  
  ${mediaQuery.extraSmall`
    width: 100%;
    left: unset;
    padding: 0 2rem;
    line-height: 4rem;
    font-size: 4rem;
  `}

  ${mediaQuery.medium`
    line-height: 6rem;
    font-size: 6rem;
  `}
`;

const Landing = () => {

  return (
    <Div $img={LandingPic}>
      <Span>Studentenclub Mercurius</Span>
    </Div>
  )
}

export default Landing