import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import CurrentPraesidium from "./currentPraesidium";
import ProPraesidia from "./proPraesidia";
import PraesidiumModal from "./praesidiumModal";
import { useContent } from "../../context/contentContext";
import React from "react";

const Praesidium = () => {
  const { initialized, initPraesidium } = useContent();

  React.useEffect(() => {
    if (!initialized.praesidium)
      initPraesidium();
  }, [initialized.praesidium, initPraesidium]);

  return (
    <>
      <PraesidiumModal />
      <div>
        <Banner imgUrl={BannerImg} />
        <OuterSec>
          <InnerDiv>
            <Title color="--white" text="Praesidium" />
            <CurrentPraesidium />
          </InnerDiv>
        </OuterSec>
        <OuterSec style={{backgroundColor: 'var(--light-green)'}}>
          <InnerDiv $even={1}>
            <Title color="--green"  text="Pro-Praesidia" />
            <ProPraesidia />
          </InnerDiv>
        </OuterSec>
      </div>
    </>
  );
}

export default Praesidium