import styled from "styled-components";
import SocialMedia from "../socialMedia"
import { InnerDiv, OuterSec } from "../standard"
import { IoIosArrowUp } from "react-icons/io";
import { transition } from "../../assets/styling";
import { Link } from "react-router-dom";

const SOuterSec = styled(OuterSec)`
  background-color: var(--green);
  position: relative;
`;

const SInnerDiv = styled(InnerDiv)`
  display: flex;
  align-items: center;
  color: var(--white);
  text-align: center;
`;

const Top = styled.div`
  position: absolute;
  background-color: var(--light-green);
  color: var(--green);
  border: 1px solid var(--green);
  top: -1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  font-weight: 500;

  ${transition}
`;

const Links = styled.div`
  display: flex;
  gap: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 500;
`;


const Footer = () => {
  return (
    <SOuterSec>
      <Top onClick={() => window.scrollTo(0,0)}>
        Naar boven <IoIosArrowUp style={{ marginLeft: '0.5rem'}} />
      </Top>
      <SInnerDiv>
        <SocialMedia />
        <Links>
          <Link to=''>Home</Link>
          <Link to='/lan'>LAN</Link>
          <Link to='/praesidium'>Praesidium</Link>
          <Link to='/geschiedenis'>Geschiedenis</Link>
          <Link to='/clublied'>Clublied</Link>
          <Link to='/evenementen'>Evenementen</Link>
        </Links>
        <div style={{ fontWeight: 300 }}>
          Copyright ©2024; Created by CookieBuilds
        </div>
      </SInnerDiv>
    </SOuterSec>
  )
}

export default Footer