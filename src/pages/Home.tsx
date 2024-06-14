import React from 'react';
import Header from '../components/Header/Header';
import DownloadApp from '../components/DownloadApp/DownloadApp';
import OurSpaces from '../components/OurSpaces/OurSpaces';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import '../styles/main.scss'
const Home: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <WhyChooseUs />
      <OurSpaces />
      <DownloadApp />
    </div>
  );
};

export default Home;
