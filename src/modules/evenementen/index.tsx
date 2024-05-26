import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import Events from "./events";
import { useContent } from "../../context/contentContext";
import React from "react";

const Evenementen = () => {
  const { futureEvents, pastEvents } = useContent();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      const imagesToPreload: string[] = [...futureEvents.map((v) => v.imageUrl)];
      Promise.all(imagesToPreload.map((url) => new Promise(function (resolve, reject) {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      }))).then(() => setLoading(false));
      
    } catch (err) {
      console.error(err);
    }
  }, [futureEvents]);

  return (
    <div>
      <Banner imgUrl={BannerImg} />
      {loading ? (
        <p style={{ color: 'var(--white)', fontWeight: '300' }}>Evenementen laden...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default Evenementen