import styled, { keyframes } from 'styled-components';
import LandingPic from '/assets/images/landing-pic.jpg';
import Schild from '../../components/schild';
import { mediaQuery } from '../../assets/styling';
import React from 'react';
import { Link } from 'react-router-dom';

const slideIn = keyframes`
  0% {
    bottom: 2rem;
    opacity: 0;
  }

  100% {
    bottom: 1rem;
    opacity: 1;
  }
`;

const Div = styled.div<{$img: string}>`
  position: relative;
  height: calc(100vh - 2.5rem);
  background-image: url(${p => p.$img});
  background-size: cover;
  background-position: center;
  ${mediaQuery}
`;

const LogoDiv = styled(Link)<{$height: number}>`
  height: ${p => p.$height}px;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${slideIn} 2s ease-out 1s forwards;
  opacity: 0;
  ${mediaQuery.small`
    height: 320px;
  `}
`;

const Landing = () => {
  const [logoHeight, setLogoHeight] = React.useState<number>(320);

  React.useEffect(() => {
    setLogoHeight(window.innerWidth > 768 ? 320 : 240)
  }, [])
  return (
    <Div $img={LandingPic}>
      <LogoDiv to="test-home" $height={logoHeight} >
        <Schild colored={true} height={logoHeight} />
      </LogoDiv>
    </Div>
  )
}

export default Landing