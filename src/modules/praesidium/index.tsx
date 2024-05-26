import Banner from "../../components/banner";
import BannerImg from '../../assets/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";

const Praesidium = () => {
  return (
    <div>
      <Banner imgUrl={BannerImg} />
      <OuterSec>
        <InnerDiv>
          <Title color="--white" text="Praesidium" />
        </InnerDiv>
      </OuterSec>
    </div>
  )
}

export default Praesidium