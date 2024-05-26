import styled from "styled-components";
import LandingPic from '/assets/images/landing-pic.jpg';
import Schild from '../../components/schild';
import Welcome from "./welcome";
import NextEvent from "./nextEvent";
import Partners from "./partners";

const HomeDiv = styled.div`
  position: relative;
  top: -7rem;
  width: 100%;
  margin-bottom: -7rem;
`;

const Div = styled.div<{$img: string}>`
  position: relative;
  height: calc(100vh - 2.5rem);
  background-image: url(${p => p.$img});
  background-size: cover;
  background-position: center;
`;

const LogoDiv = styled.div`
  height: 320px;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Home = () => {
  return (
    <HomeDiv>
      <Div $img={LandingPic}>
        <LogoDiv>
          <Schild colored={true} height={320} />
        </LogoDiv>
      </Div>
      <Welcome />
      <NextEvent />
      <Partners />
    </HomeDiv>
  )
}

export default Home