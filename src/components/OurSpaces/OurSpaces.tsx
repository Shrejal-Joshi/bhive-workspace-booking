import React, { useEffect, useState } from 'react';
import ISpaceData from '../../typedefs/SpaceData';
import { RiArrowRightSLine } from "react-icons/ri";
import './OurSpaces.scss';
import { Link } from 'react-router-dom';

const OurSpaces: React.FC = () => {
  const [spacesData, setSpacesData] = useState([]);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const fetchData = async () => {
    try {
      const jsonURL = `${process.env.REACT_APP_BASE_URL}/data.json`;
      const response = await fetch(jsonURL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setSpacesData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleClickLocation = (url: string) => {
    if (!url) {
      console.error('URL is invalid or not provided');
      return;
    }
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      console.error('Failed to open the URL. Check for pop-up blockers or browser settings.');
    }
  };
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const degreesToRadians = (degrees: any) => {
    return degrees * Math.PI / 180;
  };

  const maxLength = 30; // Maximum characters to display

  const trimAddress = (address: string, maxLength: number) => {
    return address.length > maxLength ? `${address.slice(0, maxLength)}...` : address;
  };

  const trimSpaceName = (spaceName: string) => {
    let textBeforeComma = spaceName;
    if (spaceName.includes(',')) {
      textBeforeComma = spaceName.substring(0, spaceName.indexOf(','));
    }
    return textBeforeComma;
  };

  useEffect(() => {
    fetchData();
    getLocation();
  }, []);

  return (
    <section className="our_spaces">
      <h2>Our Space Overview</h2>
      <div className='space_list_container'>
        {spacesData.map((spaceData: ISpaceData, index) => {
          const distance = userLocation
            ? haversineDistance(userLocation.latitude, userLocation.longitude, spaceData.latitude, spaceData.longitude)
            : null;

          return (
              <div key={index} className='card' >
                <div className='address_container'>
                  <div className='name_container'>
                    <h3>{trimAddress(spaceData.address, maxLength)}</h3>
                  </div>
                  <div className='location_container'  onClick={() => {handleClickLocation(spaceData.google_maps_url)}}>
                    <img src={'/images/direction.svg'} alt="direction" />
                    <p>{distance ? `${Math.round(distance)} kms` : '...'}</p>
                  </div>
                </div>
                <div className='space_image'>
                  {spaceData.images.map((image: string, imgIndex: number) => (
                    <div key={imgIndex}>
                      <img src={`${process.env.REACT_APP_BASE_URL}/${image}`} alt={spaceData.name} />
                      <div className='space_name_container'>
                        <img src={"/images/spacelogo.svg"} alt="space" />
                        <p>{trimSpaceName(spaceData.name)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='card_content'>
                  <div className='pricing'>
                    <div className='day_pass'>
                      <p>Day Pass</p>
                      <div className='price_container'>
                        <div className='price'>
                          <p>₹ {spaceData.day_pass_price}
                            <span className='span_container'>/Day</span>
                          </p>
                        </div>
                        <div className='arrow_container'>
                          <img src={'/images/arrow.svg'} alt="arrow" />
                          <img src={'/images/arrow1.svg'} alt="arrow" />
                          <img src={'/images/arrow2.svg'} alt="arrow" />
                        </div>
                      </div>
                    </div>
                    {Object.entries(spaceData.day_pass_discounts_percentage).map(([key, discount]) => (
                      <div key={key}>
                        {key === "10" ? (
                          <div>
                            <button className='discount_btn_container'>
                              {discount.value} % Discount
                            </button>
                            <div className='bulk_pass'>
                              <p>Bulk Pass</p>
                              <div className='price_container'>
                                <div className='price'>
                                  <p>₹ {spaceData.day_pass_price * 10}
                                    <span className='span_container'>/10 Day</span>
                                  </p>
                                </div>
                                <div className='arrow_container'>
                                  <img src={'/images/arrow.svg'} alt="arrow" />
                                  <img src={'/images/arrow1.svg'} alt="arrow" />
                                  <img src={'/images/arrow2.svg'} alt="arrow" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurSpaces;
