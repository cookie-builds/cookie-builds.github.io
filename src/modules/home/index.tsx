import styled from "styled-components";
import Welcome from "./welcome";
import NextEvent from "./nextEvent";
import Partners from "./partners";
import Landing from "./landing";

const HomeDiv = styled.div`
  position: relative;
  top: -7rem;
  width: 100%;
  margin-bottom: -7rem;
`;

const Home = () => {
  return (
    <HomeDiv>
      <Landing />
      <Welcome />
      <NextEvent />
      <Partners />
    </HomeDiv>
  )
}

export default Home