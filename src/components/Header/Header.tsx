import React from 'react';
import './Header.scss';
import { MdCall } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className='nav_container'>
        <div className="logo">
        <img src="/images/logo.svg" alt="Logo"  />

        </div>
        <div className='contact_container'>
          <MdCall color='#FFCF4B' />
        </div>

      </div>

      <div className='banner_container'>
       
        <div className='banner_img_container'>
          <img src={'/images/bannerImg.svg'} alt="banner" className='banner_image' />
          <div className='overlay_image'>
          </div>

        </div>
        <div className='banner_text_container'>
          <h1 className="title">Host your meeting with world-class amenities. Starting at
            <span className="subtitle"> ₹199/-!</span>

          </h1>
        </div>
       

      </div>
    
    </div>
  );
};

export default Header;
