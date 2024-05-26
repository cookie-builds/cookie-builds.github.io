import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import styled from "styled-components";


const SMDiv = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 3rem;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
`;

const SM = styled.a<{color: string}>`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.color};
  color: var(--white);
`;

const SocialMedia = () => {
  return (
    <SMDiv>
      <SM color="#FF0000" href="mailto:mercuriusaalst.studentenclub@gmail.com"><MdOutlineEmail size='1.5rem' /></SM>
      <SM color="#F028D0" href="https://www.instagram.com/mercurius.aalst/"><FaInstagram size='1.5rem' /></SM>
      <SM color="#4080ED" href="https://www.facebook.com/groups/26262717221"><FaFacebookF size='1.5rem' /></SM>
      <SM color="#000000" href="https://www.tiktok.com/@mercurius.aalst"><FaTiktok size='1.5rem' /></SM>
    </SMDiv>
  )
}

export default SocialMedia