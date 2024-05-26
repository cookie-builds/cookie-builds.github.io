import styled from "styled-components";
import { mediaQuery } from '../../assets/styling';
import { Link } from "react-router-dom";

export const ProPraesidiaDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  ${mediaQuery.extraSmall`
    flex-direction: row;
  `}
`;

export const Table = styled.table`
  flex: 1 1 0;
  background-color: var(--white);
  width: 100%;
  text-align: left;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
  border-spacing: 0;
  height: min-content;
  
  ${mediaQuery.extraSmall`
    max-width: 20rem;
  `}
`;

export const THead = styled.thead`
  background-color: var(--green);
  color: var(--white);
`;

export const TrHead = styled.tr`
  font-weight: 500;
`;

export const Th = styled.th`
  padding: 1rem 0.5rem;
  font-weight: 500;
`;

export const Td = styled.td`
  padding: 0.5rem;
`;

export const Tr = styled.tr`
  cursor: pointer;
  background-color: var(--white);
  &:nth-child(even) {
    background-color: var(--gray);
  }

  &:hover {
    background-color: var(--light-green);
  }
`;

export const SelectedYear = styled.div<{$open: number}>`
  display:  ${p => p.$open ? 'block' : 'none'};
  background-color: white;
  flex: ${p => p.$open ? '1 1 0' : 'none'};
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
  padding: 1rem;
`;

export const MemberDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);
  transition: 0.2s ease;
  max-width: 34rem;
  width: 100%;

  &:hover {
    transform: scale(1.0125);
  }
`;
export const ImgDiv = styled.div`
  width: 100%;
  height: 20rem;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
export const MTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const MText = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

export const Praesidium = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  ${mediaQuery.extraSmall`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${mediaQuery.medium`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const SYYear = styled.h3`
  margin-bottom: 1.25rem;
`;