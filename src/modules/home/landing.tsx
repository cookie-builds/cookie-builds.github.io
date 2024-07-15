import styled, { keyframes } from 'styled-components';
import LandingPic from '/assets/images/landing-pic.jpg';
import { mediaQuery } from '../../assets/styling';

const slideIn = keyframes`
  0% {
    bottom: 8.5rem;
    opacity: 0;
    font-size: 0.95em;
  }

  100% {
    bottom: 8rem;
    opacity: 1;
    font-size: 1em;
  }
`;

const Div = styled.div<{$img: string}>`
  position: relative;
  height: calc(100vh - 0rem); // -2.5rem
  background-image: url(${p => p.$img});
  background-size: cover;
  background-position: center;
  line-height: 2.5rem;
  font-size: 2.5rem;
  
  ${mediaQuery.extraSmall`
    line-height: 4rem;
    font-size: 4rem;
  `}

  ${mediaQuery.medium`
    line-height: 6rem;
    font-size: 6rem;
  `}
`;

const Span = styled.div`
  position: absolute;
  color: var(--white);
  font-weight: 600;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  bottom: 8rem;
  width: max-content;
  max-width: 100vw;
  left: 50%;
  transform: translateX(calc(-50% - 1rem));
  text-align: center;
  user-select: none;
  opacity: 0;
  animation: ${slideIn} 1.5s ease-out 0.5s forwards;
  padding: 0 1rem;
`;

const Landing = () => {

  return (
    <Div $img={LandingPic}>
      <Span>Studentenclub Mercurius</Span>
    </Div>
  )
}

export default Landing