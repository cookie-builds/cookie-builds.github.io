import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import NavModal from './navModal';
import { InnerDiv, OuterSec } from '../standard';
import Schild from '../schild';
import { mediaQuery } from '../../assets/styling';

const SHeader = styled(OuterSec)<{ $isHome: number}>`
  position: static;
  top: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${p => p.$isHome ? 'transparent' : 'var(--white)'};
  color: ${p => p.$isHome ? 'var(--white)' : 'var(--green)'};
  padding: 1rem;
  box-shadow: ${p => p.$isHome ? 'none' : '0px 4px 4px 0px rgba(0,0,0,0.2)'};
  z-index: 10000;
  transition: 0.2 ease;
  ${mediaQuery.medium`
    padding: 1rem 4rem;
  `};
`;

const SInnerDiv = styled(InnerDiv)`
  padding: 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SLink = styled(Link)`
  padding: 0;
  height: 80px;

  &:hover {
    transform: scale(1.0125);
  }
`;

const NavMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => setOpenNav(false), [pathname])

  React.useEffect(() => {
    if (openNav)
      document.body.style.overflow = 'hidden';
    else
      document.body.style.overflow = '';
  }, [openNav]);
  return (
    <>
      <SHeader $isHome={+(pathname === '/')}>
        <SInnerDiv>
          <SLink to='/'>
            <Schild colored={pathname !== '/'} color={openNav ? '#217226': 'white'} height={80} />
          </SLink>
          <DesktopNav />
          <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
        </SInnerDiv>
      </SHeader>
      <NavModal open={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default NavMenu;