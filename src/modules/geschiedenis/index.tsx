
import Banner from '../../components/banner';
import Emergence from './emergence';
import Timeline from './timeline';
import BannerImg from '/assets/images/landing-pic.jpg';

const Geschiedenis = () => {
  return (
    <div>
      <Banner imgUrl={BannerImg} />
      <Emergence />
      <Timeline />
      <div style={{ marginBottom: '30rem' }} />
    </div>
  )
};

export default Geschiedenis;