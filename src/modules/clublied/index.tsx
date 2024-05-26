import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import styled from "styled-components";
import { mediaQuery } from "../../assets/styling";

const VideoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
  ${mediaQuery.small`
    flex-direction: row;
  `}
`;

const Lyrics = styled.p`
  font-weight: 300;
  padding: 1rem;
`;

const IFrameDiv = styled.div`
  position: relative;
  border: none;
  height: 20rem;
  ${mediaQuery.small`
    height: unset;
    flex: 1 1 0;
  `}
`;
const IFrame = styled.iframe`
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SInnerDiv = styled(InnerDiv)`
  justify-content: space-around;
  padding-top: 0;
  font-size: 1.25rem;
  font-weight: 300;
  ${mediaQuery.small`
    flex-direction: row;
  `}
`;

const Clublied = () => {
  return (
    <div>
      <Banner imgUrl={BannerImg} />
      <OuterSec style={{ flexDirection: 'column'}}>
        <InnerDiv>
          <Title color="--white" text="Clublied" />
          <VideoDiv>
            <IFrameDiv>
              <IFrame src="https://www.youtube.com/embed/-kcOpyM9cBg?si=M0p_fKbqLvigp_f4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </IFrameDiv>
            <Lyrics>
              In 't Kastanjehof gezeten<br/>
              Zat Mercurius aan den toog<br/>
              We hadden toch wel moeten weten<br/>
              Ons tempo lag veel te hoog<br/>
              <br/>
              En we drinken en we vieren,<br/>
              Want student zijn is een feest.<br/>
              Wij proeven hier van alle bieren,<br/>
              Want 't is nooit genoeg geweest.<br/>
              <br/>
              Komt dus allen bij elkander<br/>
              In 't Kastanjehof veur plezier.<br/>
              Alleman kruipt op een ander,<br/>
              En geeft nu mijn pint alhier.<br/>
              <br/>
              Laat ons hier dus nu besluiten<br/>
              Dat Mercurius de club is<br/>
              Waar ze bier drinken met kuipen<br/>
              En waar iedereen welkom is!<br/>
            </Lyrics>
          </VideoDiv>
        </InnerDiv>
        <SInnerDiv>
          <div>
            <Title text="Wijze:" color="--green"/>
            <p>Ode an die freude</p>
          </div>
          <div>
            <Title text="Tekst:" color="--green"/>
            <p>Geert Bruyneel en Philip Vlaeminck</p>
          </div>
        </SInnerDiv>
      </OuterSec>
    </div>
  )
}

export default Clublied