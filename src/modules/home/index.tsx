import styled from "styled-components";
import Welcome from "./welcome";
import NextEvent from "./nextEvent";
import Partners from "./partners";
import Landing from "./landing";
import Landing2 from "./landing2";
import { useContent } from "../../context/contentContext";
import React from "react";
import { useLocation } from "react-router-dom";

const HomeDiv = styled.div`
  position: relative;
  top: -7rem;
  width: 100%;
  margin-bottom: -7rem;
`;

const Home = () => {
  const { initialized, initEvents } = useContent();
  const location = useLocation();

  React.useEffect(() => {
    if (!initialized.events)
      initEvents();
  }, [initialized.events, initEvents]);

  return (
    <HomeDiv>
      {location.pathname.includes('test-home') ? (
        <Landing />
      ) : (
        <Landing2 />
      )}
      <Welcome />
      <NextEvent />
      <Partners />
    </HomeDiv>
  )
}

export default Home