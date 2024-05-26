import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQuery } from '../../assets/styling';


const LinkDiv = styled.div`
  display: none;
  align-items: center;
  ${mediaQuery.small`
    display: flex;
  `}
`;

const SLink = styled(Link)<{ $active?: number, $isHome?: number }>`
  padding: 1rem 1.5rem;
  position: relative;
  font-weight: ${p => p.$active ? 500 : 300};
  text-align: center;

  &:hover {
    background-color: ${p => p.$isHome ? '#FFFFFF20' : 'var(--light-green)'};
  }

  &:before {
    display: block;
    content: attr(title);
    font-weight: 500;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
  ${p => p.$active && !p.$isHome && `
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background-color: var(--green);
      border-radius: 1px;
    }
  `}
`;

const DesktopNav = () => {
  const { pathname } = useLocation();
  return (
    <LinkDiv>
      <SLink title='LAN' to='/lan' $active={+(pathname.includes('/lan'))} $isHome={+(pathname === '/')}>LAN</SLink>
      <SLink title='Praesidium' to='/praesidium' $active={+(pathname.includes('/praesidium'))} $isHome={+(pathname === '/')}>Praesidium</SLink>
      <SLink title='Geschiedenis' to='/geschiedenis' $active={+(pathname.includes('/geschiedenis'))} $isHome={+(pathname === '/')}>Geschiedenis</SLink>
      <SLink title='Clublied' to='/clublied' $active={+(pathname.includes('/clublied'))} $isHome={+(pathname === '/')}>Clublied</SLink>
      <SLink title='Evenementen' to='/evenementen' $active={+(pathname.includes('/evenementen'))} $isHome={+(pathname === '/')}>Evenementen</SLink>
    </LinkDiv>
  );
};

export default DesktopNav;