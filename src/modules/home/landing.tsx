import styled from 'styled-components';
import LandingPic from '/assets/images/landing-pic.jpg';
// import Schild from '../../components/schild';
import { mediaQuery } from '../../assets/styling';
// import React from 'react';

const Div = styled.div<{$img: string}>`
  position: relative;
  height: calc(100vh - 2.5rem);
  background-image: url(${p => p.$img});
  background-size: cover;
  background-position: center;
`;

const Span = styled.span`
  position: absolute;
  color: var(--white);
  font-size: 2.5rem;
  font-weight: 600;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  bottom: 15rem;
  width: 100%;
  text-align: center;

  ${mediaQuery.extraSmall`
    font-size: 3rem;
  `}

  ${mediaQuery.medium`
    font-size: 5rem;
  `}
`;

// const LogoDiv = styled.div<{$height: number}>`
//   height: ${p => p.$height}px;
//   position: absolute;
//   bottom: 1rem;
//   left: 50%;
//   transform: translateX(-50%);
//   ${mediaQuery.small`
//     height: 320px;
//   `}
// `;

const Landing = () => {

  // React.useEffect(() => {
  //   setLogoHeight(window.innerWidth > 768 ? 320 : 240)
  // }, [])

  return (
    <Div $img={LandingPic}>
      <Span>Studentenclub Mercurius</Span>
    </Div>
  )
}

export default Landing