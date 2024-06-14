import React from 'react';
import './DownloadApp.scss';

const DownloadApp: React.FC = () => {
  return (
    <section className="download-app">
      <h2>Download our app now</h2>
        <div className='bg_container'>
          <div className='mobile_img_container'>
            <img src={'/images/mobile.svg'} />
          </div>
          <div className='play_store_link_container'>
            <div className='content_container'>
              <p>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
              <div className='btn_container'>
                  <img src='/images/playstore.svg' alt="playstore"/>
                  <img src='/images/appstore.svg' alt="appstore"/>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default DownloadApp;
