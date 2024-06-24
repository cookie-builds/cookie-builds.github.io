import Banner from "../../components/banner";
import Helmet from "../../components/helmet"
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import BannerImg from '/assets/images/landing-pic.jpg';

const Doop = () => {
  return (
    <>
      <Helmet title='Mercurius Aalst | Doop' />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color="--green" text="Doop" />
          </InnerDiv>
        </OuterSec>
        <OuterSec $color='--light-green'>
          <InnerDiv $even={1}>
            <Title color="--green" text="Doop" />
          </InnerDiv>
        </OuterSec>
      </div>
    </>
  )
}

export default Doop;