import styled from "styled-components";
import SocialMedia from "../socialMedia"
import { InnerDiv, OuterSec } from "../standard"
import { IoIosArrowUp } from "react-icons/io";
import { transition } from "../../assets/styling";
import { Link } from "react-router-dom";
import Schild from "../schild";

const SOuterSec = styled(OuterSec)`
  background-color: var(--green);
`;

const SInnerDiv = styled(InnerDiv)`
  display: flex;
  position: relative;
  align-items: center;
  color: var(--white);
  text-align: center;
  padding: 7.5rem 0 2.5rem 0;
`;

const Top = styled.div`
  position: absolute;
  background-color: var(--white);
  color: var(--green);
  border: 1px solid var(--green);
  top: -1.5rem;
  right: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
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

const SLink = styled(Link)`
  position: absolute;
  top: -1.5rem;
  left: 0;
`;

const Footer = () => (
  <SOuterSec>
    <SInnerDiv>
      <SLink to='/'>
        <Schild colored height={120} />
      </SLink>
      <Top onClick={() => window.scrollTo(0,0)}>
        Naar boven <IoIosArrowUp style={{ marginLeft: '0.5rem'}} />
      </Top>
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
);

export default Footer