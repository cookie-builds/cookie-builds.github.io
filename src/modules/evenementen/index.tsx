import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";

const Evenementen = () => {
  return (
    <div>
      <Banner imgUrl={BannerImg} />
      <OuterSec>
        <InnerDiv>
          <Title color="--white" text="Evenementen" />
        </InnerDiv>
      </OuterSec>
    </div>
  )
}

export default Evenementen