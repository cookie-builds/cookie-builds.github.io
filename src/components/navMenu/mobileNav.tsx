import React from 'react';
import { MdClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';
import { mediaQuery } from '../../assets/styling';


const IconButton = styled.button<{$opened: number}>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  color: var(${p => p.$opened ? '--green' : '--white'});
  ${mediaQuery.small`
    display: none;
  `}
`;

const MobileNav = (props : { openNav: boolean, setOpenNav: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <IconButton onClick={() => props.setOpenNav(!props.openNav)} $opened={+(props.openNav)}>
      {props.openNav ? <MdClose size='2.5rem' /> : <RxHamburgerMenu size='2.5rem' />}
    </IconButton>
  );
};

export default MobileNav;