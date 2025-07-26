import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loadingPage.css';
import './App.css'; // Ensure this imports the font styles
import loadingBg1 from './assets/loadingPage/loadingBg1.svg';
import loadingBg2 from './assets/loadingPage/loadingBg2.svg';
import loadingBg3 from './assets/loadingPage/loadingBg3.svg';
import spinningHeel from './assets/loadingPage/spinningHeel.svg';

const images = [loadingBg1, loadingBg2, loadingBg3];

function LoadingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0); // Opacity of the black overlay
  const navigate = useNavigate();

  const fadeDuration = 1000; // How long it takes to fade to/from black
  const blackScreenHoldDuration = 100; // 0.1 seconds
  const initialImageDisplayDuration = 1000; // How long the first image is fully visible before fading to black
  const subsequentImageDisplayDuration = 2000; // How long subsequent images are fully visible before fading to black

  useEffect(() => {
    const totalPageDuration = 12000; // Total time before navigation

    let animationTimer;
    let navigationTimer;

    const runCycle = () => {
      // Determine display time for the current image
      const displayTime = currentImageIndex === 0 ? initialImageDisplayDuration : subsequentImageDisplayDuration;

      // Phase 1: Image visible, then start fade to black
      animationTimer = setTimeout(() => {
        setOverlayOpacity(1); // Start fade to black

        // Phase 2: Black screen fully opaque, switch image
        animationTimer = setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

          // Phase 3: Hold black for a short duration, then fade from black
          animationTimer = setTimeout(() => {
            setOverlayOpacity(0); // Start fade from black

            // Phase 4: Black screen fully transparent, start next cycle
            animationTimer = setTimeout(() => {
              runCycle(); // Loop back to the start of the cycle
            }, fadeDuration);
          }, blackScreenHoldDuration);
        }, fadeDuration); // Time for overlay to reach full opacity
      }, displayTime);
    };

    runCycle(); // Start the first cycle

    navigationTimer = setTimeout(() => {
      clearTimeout(animationTimer);
      navigate('/start');
    }, totalPageDuration);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate, fadeDuration, blackScreenHoldDuration, initialImageDisplayDuration, subsequentImageDisplayDuration]);

  return (
    <div className="loading-page-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="loading-image"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 0s', // Image opacity changes instantly
          }}
        ></div>
      ))}
      <div
        className="black-overlay"
        style={{
          opacity: overlayOpacity,
          transition: `opacity ${fadeDuration / 1000}s ease-in-out`,
        }}
      ></div>
      <div className='little-loading'>
      <div
        className="little-loading-image"
        style={{
          position: 'absolute',
          top: '1.5vw',
          left: '1.5vw',
          width: '5vw',
          height: '5vw',
          backgroundImage: `url(${spinningHeel})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleX(-1)', /* Mirror the image */
          zIndex: 3, /* Ensure it's above the black overlay */
        }}
      ></div>
      <div className="loading-text">
        Loading...
      </div>
      </div>
      </div>
  );
}

export default LoadingPage;
