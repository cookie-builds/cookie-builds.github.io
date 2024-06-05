import styled, { keyframes } from 'styled-components';
import { InnerDiv, OuterSec } from '../../components/standard';
import Title from '../../components/title';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const PartnerScroll = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  &:before,
	&:after {
		background: linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
		content: "";
		height: 100%;
		position: absolute;
		width: 5rem;
		z-index: 2;
	}
	
	&:after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&:before {
		left: 0;
		top: 0;
	}
`;
const PartnersDiv = styled.div`
  display: flex;
  width: calc(18rem * 10);
  animation: ${scroll} 30s linear infinite;
  display: flex;
`;
const Partner = styled.div`
  flex: 1 1 0;
  height: 8rem;
  width: 18rem;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Partners = () => {
  return (
    <OuterSec>
      <InnerDiv>
        <Title color="--green" text="Partners" />
        <PartnerScroll>
          <PartnersDiv>
            <Partner>
              <Img src='/assets/logos/hogent.png' />
            </Partner>
            <Partner>
              <Img src='/assets/logos/hogent.png' />
            </Partner>
            <Partner>
              <Img src='/public/assets/logos/hogent.png' />
            </Partner>
            <Partner style={{ backgroundColor: '#654321' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#FF0000' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#00FF00' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#0000FF' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#123456' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#654321' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#FF0000' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#00FF00' }}>
            </Partner>
            <Partner style={{ backgroundColor: '#0000FF' }}>
            </Partner>
          </PartnersDiv>
        </PartnerScroll>
      </InnerDiv>
    </OuterSec>
  )
}

export default Partners