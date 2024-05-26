import styled from 'styled-components'

const BannerImgDiv = styled.div<{$url: string}>`
  position: absolute;
  width: 100%;
  height: 16rem;
  background-image: url(${p => p.$url});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Banner = (props: {imgUrl: string}) => {
  return (
    <BannerImgDiv $url={props.imgUrl} />
  )
}

export default Banner