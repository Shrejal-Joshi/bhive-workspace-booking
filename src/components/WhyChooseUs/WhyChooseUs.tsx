import React from 'react';
import './WhyChooseUs.scss';

const WhyChooseUs: React.FC = () => {

  const data = [
    {
      image: "/images/communityEvent.svg",
      title:  "Community Events"
    },
    {
      image: "/images/gym.svg",
      title:  "Gym Facilities"
    },
    {
      image: "/images/wifi.svg",
      title:  "High-Speed WiFi"
    },
    {
      image: "/images/cup.svg",
      title:  "Cafe & Tea Bar"
    },
    {
      image: "/images/rupee.svg",
      title:  "Affordable"
    },
    {
      image: "/images/lounge.svg",
      title:  "Comfort Lounges"
    },
    {
      image: "/images/clock.svg",
      title:  "Quick Booking"
    },
    {
      image: "/images/play.svg",
      title:  "Sports Area"
    }

  ]
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
        <div className='list_container'>
          {
            data.map((item, index) => (
              <div key={index} className='item_container'>
                <img src={item.image} alt={item.title}  /> 
                <p>{item.title}</p>
              </div>
            ))
          }

        </div>
    </section>
  );
};

export default WhyChooseUs;
