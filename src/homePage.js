import React from 'react';
import './homePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  const handleOriginClick = () => {
    navigate('/home/origins')
  }

  const handleRiseClick = () => {
    navigate('/home/rise')
  }

  const handleFgsClick = () => {
    navigate('/home/fgs');
  }
  return (
    <div className="home-bg">
      <img src="/homePage/heels-of-time.svg" alt="HeelsOfTime" className="heels-of-time" />
      <img src="/homePage/fashion.svg" alt="fashion" className="fashion" />
      <img src="/homePage/origins.svg" alt="origins" className="origins" />
      <img src="/homePage/rise.svg" alt="rise" className="rise" />
      <img src="/homePage/green-heel.png" alt="greenHeel" className="green-heel" onClick={handleOriginClick}/>
      <img src="/homePage/white-boot-2.png" alt="whiteBoot_2" className="white-boot-2" />
      <img src="/homePage/white-boot-1.png" alt="whiteBoot_1" className="white-boot-1" onClick={handleFgsClick} />
      <img src="/homePage/pink-heel.png" alt="pinkHeel" className="pink-heel" onClick={handleRiseClick}/>
    </div>
  );
}

export default HomePage;
