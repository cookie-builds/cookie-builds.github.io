import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DoopDiv = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  color: var(--white);
  height: 2.5rem;
  text-decoration: none;
  font-weight: 300;
  z-index: 10000;
`;

const Doop = () => {
  return (
    <DoopDiv to='/doop'>
      Meer weten over onze doop?&nbsp; <b>Klik&nbsp;hier</b>
    </DoopDiv>
  )
}

export default Doop