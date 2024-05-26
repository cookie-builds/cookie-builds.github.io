import styled from 'styled-components'
import { EventType } from '../../context/models'
import { Link } from 'react-router-dom';

const EventDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.0125);
  }
`;

const ImgDiv = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
const MTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;
const MText = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

const Event = (props: EventType) => {
  return (
    <EventDiv to={`/eventementen/${props.url}`}>
      <ImgDiv>
        <Img src={props.imageUrl} />
      </ImgDiv>
      <TextDiv>
        <MTitle>{props.title}</MTitle>
        <MText>{props.when}</MText>
      </TextDiv>
    </EventDiv>
  )
}

export default Event