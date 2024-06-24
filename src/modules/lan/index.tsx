import styled from "styled-components";
import { boxShadow } from "../../assets/styling";
import Banner from "../../components/banner";
import Helmet from "../../components/helmet";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";

const P = styled.p`
  width: 100%;
  padding: 1rem;
  background-color: var(--white);
  ${boxShadow}
`;

const SInnerDiv = styled(InnerDiv)`
  padding-top: 0;
`;

const Lan = () => {
  return (
    <>
      <Helmet title='Mercurius Aalst | LAN' />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color='--white' text='LAN-party' />
            <P>
              Tekst met uitleg over de LAN-party.
            </P>
          </InnerDiv>
        </OuterSec>
        <OuterSec $color='--white'>
          <SInnerDiv>
            <Title color='--green' text='Sfeerbeelden' />
            <div>
              Fotos van vorige edities van de LAN
            </div>
          </SInnerDiv>
        </OuterSec>
        <OuterSec $color='--light-green'>
          <InnerDiv $even={1}>
            <Title color='--green' text='Sponsors' />
            <div>
              Fotos met sponsors van de LAN
            </div>
          </InnerDiv>
        </OuterSec>
      </div>
    </>
  )
}

export default Lan;