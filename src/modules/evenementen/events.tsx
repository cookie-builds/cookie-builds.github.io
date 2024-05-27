import styled from 'styled-components';
import { EventType } from '../../context/models';
import Event from './event';
import { mediaQuery } from '../../assets/styling';

const EventsDiv = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  ${mediaQuery.extraSmall`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Events = (props: { events: EventType[]}) => {
  if (props.events.length === 0) return (
    <p style={{ color: 'var(--white)', fontWeight: '300' }}>Geen evenementen gepland</p>
  )

  return (
    <EventsDiv>
      {props.events.map((v) => <Event key={`${v.title} ${v.orderDate}`} {...v} />)}
    </EventsDiv>
  )
}

export default Events