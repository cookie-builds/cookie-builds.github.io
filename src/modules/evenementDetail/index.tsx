import React from "react"
import { EventType } from "../../context/models";
import { useContent } from "../../context/contentContext";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner";
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import dayjs from "dayjs";
import Buttons from "./buttons";
import Details from "./details";
import styled from "styled-components";

const IFrame = styled.iframe`
  border: none;
  width: 100%;
  height: 20rem;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
`;

const EvenementDetail = () => {
  const { initialized, initEvents, pastEvents, futureEvents } = useContent();
  const [event, setEvent] = React.useState<EventType | undefined>(undefined);
  const { eventUrl } = useParams();

  React.useEffect(() => {
    if (!initialized.events)
      initEvents();
  }, [initialized.events, initEvents]);

  React.useEffect(() => {
    setEvent([...pastEvents, ...futureEvents].find((v) => v.url === eventUrl))
  }, [eventUrl, pastEvents, futureEvents]);

  if (!event) return (<>loading</>)
  return (
    <div>
      <Banner imgUrl={event.imageUrl} event />
      <OuterSec>
        <InnerDiv style={{ paddingTop: '1.5rem'}}>
          <Title color="--green" text={`${event.title} ${event.orderDate < dayjs().format('YYYY-MM-DD HH:mm') ? `(${event.orderDate.slice(0, 4)})` : ''}`} />
          <Details {...event} />
          <Buttons {...event} />
          {event.mapsUrl && <IFrame src={event.mapsUrl} loading="lazy" />}
        </InnerDiv>
      </OuterSec>
    </div>
  )
}

export default EvenementDetail