import styled, { keyframes } from 'styled-components';
import LandingPic from '/assets/images/landing-pic.jpg';
import { mediaQuery } from '../../assets/styling';

const slideIn = keyframes`
  0% {
    bottom: 9rem;
    opacity: 0;
  }

  100% {
    bottom: 8rem;
    opacity: 1;
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
  font-weight: 600;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  bottom: 8rem;
  width: 100%;
  text-align: center;
  user-select: none;
  opacity: 0;
  animation: ${slideIn} 2s ease-out 0.5s forwards;

  ${mediaQuery.extraSmall`
    font-size: 3rem;
  `}

  ${mediaQuery.medium`
    font-size: 5rem;
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