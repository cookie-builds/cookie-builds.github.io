import styled from 'styled-components';
import LandingPic from '/assets/images/landing-pic.jpg';
import Schild from '../../components/schild';
import { mediaQuery } from '../../assets/styling';
import React from 'react';

const Div = styled.div<{$img: string}>`
  position: relative;
  height: calc(100vh - 2.5rem);
  background-image: url(${p => p.$img});
  background-size: cover;
  background-position: center;
  ${mediaQuery}
`;

const LogoDiv = styled.div<{$height: number}>`
  height: ${p => p.$height}px;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
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
      <LogoDiv $height={logoHeight}>
        <Schild colored={true} height={logoHeight} />
      </LogoDiv>
    </Div>
  )
}

export default Landing