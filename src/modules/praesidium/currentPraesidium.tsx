import { useContent } from '../../context/contentContext';
import { PraesidiumMember } from '../../context/models';
import { Img, ImgDiv, MText, MTitle, MemberDiv, Praesidium, TextDiv } from './styles';

export const Member = (props: PraesidiumMember) => (
  <MemberDiv to={`/praesidium?functie=${props.function.toLowerCase()}`}>
    <ImgDiv>
      <Img src={props.imageUrl} />
    </ImgDiv>
    <TextDiv>
      <MTitle>{props.function}</MTitle>
      <MText>{props.fName} {props.nName && <i>"{props.nName}"</i>} {props.lName}</MText>
    </TextDiv>
  </MemberDiv>
)

const CurrentPraesidium = () => {
  const { praesidium } = useContent();

  if (praesidium.length === 0) return <></>;

  return (
    <Praesidium>
      {praesidium.map((v) => <Member key={`${v.fName};${v.lName}`} {...v} />)}
    </Praesidium>
  )
}

export default CurrentPraesidium