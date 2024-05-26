import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { PraesidiumMember } from '../../context/models';
import { useContent } from '../../context/contentContext';
import { IoClose } from "react-icons/io5";
import Title from '../../components/title';


const ModalDiv = styled.div<{$open: number}>`
  position: fixed;
  top: 0;
  right: ${p => p.$open ? '-100%' : '0'};
  height: 100vh;
  width: 100%;
  max-width: 25rem;
  background-color: var(--white);
  z-index: 15000;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
  transition: 0.2s ease;
  overflow: scroll;
`;

const InsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;
const Text = styled.h2`
  font-weight: 300;
`;
const Img = styled.img`
  width: 100%;
`;
const H3 = styled.h3`
  font-weight: 600;
`;

const PraesidiumModal = () => {
  const { praesidium } = useContent();
  const [searchParams, setSearchParams] = useSearchParams();
  const [member, setMember] = React.useState<PraesidiumMember | undefined>(undefined);

  React.useEffect(() => {
    if (!searchParams.get('functie')) return;
    setMember(praesidium.find((v) => v.url === searchParams.get('functie')))
  }, [praesidium, searchParams])
  return (
    <ModalDiv $open={+(searchParams.get('functie') === null)}>
      <InsideDiv>
        <IoClose onClick={() => setSearchParams('')} style={{ cursor: 'pointer' }} size='2rem' />
        <div>
          <Title color='--green' text={member?.function || ''} />
          <Text>{member?.fName} {member?.nName && <i>"{member?.nName}"</i>} {member?.lName}</Text>
        </div>
        <Img src={member?.imageUrl} />
        {member?.questions.map((v) => (
          <div key={v.q}>
            <H3>{v.q}</H3>
            <p>{v.a}</p>
          </div>
        ))}
        <div>
          <H3>Fun facts:</H3>
          <div>
            {member?.funFacts.map((v) => <p>- {v}</p>)}
          </div>
        </div>
      </InsideDiv>
    </ModalDiv>
  )
}

export default PraesidiumModal