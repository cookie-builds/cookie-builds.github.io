import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import Events from "./events";
import { useContent } from "../../context/contentContext";

const Evenementen = () => {
  const { futureEvents, pastEvents } = useContent();
  return (
    <div>
      <Banner imgUrl={BannerImg} />
      <OuterSec>
        <InnerDiv>
          <Title color="--white" text="Komende evenementen" />
          <Events events={futureEvents} />
        </InnerDiv>
      </OuterSec>
      <OuterSec>
        <InnerDiv style={{paddingTop: '0'}}>
          <Title color="--green" text="Voorgaande evenementen" />
          <Events events={pastEvents} />
        </InnerDiv>
      </OuterSec>
    </div>
  )
}

export default Evenementen