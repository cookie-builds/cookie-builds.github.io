
import React from 'react';
import Banner from '../../components/banner';
import { useContent } from '../../context/contentContext';
import Emergence from './emergence';
import Timeline from './timeline';
import BannerImg from '/assets/images/landing-pic.jpg';

const Geschiedenis = () => {
  const { initialized, initTimeline } = useContent();

  React.useEffect(() => {
    if (!initialized.timeline)
      initTimeline();
  }, [initialized.timeline, initTimeline]);
  return (
    <div>
      <Banner imgUrl={BannerImg} />
      <Emergence />
      {initialized.timeline && <Timeline />}
    </div>
  )
};

export default Geschiedenis;