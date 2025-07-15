import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './startPage.css';

function StartPage() {
  const NUM_HEELS = 7;
  const heelConfigs = [
    { src: '/heel 5.svg', alt: 'Heel 5', x: -200, y: -510, rotate: 0, width: 900 },
    { src: '/heel 3.svg', alt: 'Heel 3', x: -400, y: -440, rotate: 0, width: 720 },
    { src: '/heel 2.svg', alt: 'Heel 2', x: -420, y: -250, rotate: 0, width: 550 },
    { src: '/heel 1.svg', alt: 'Heel 1', x: -380, y: -50, rotate: 0, width: 770 },
    { src: '/heel 7.svg', alt: 'Heel 7', x: 440, y: -600, rotate: 0, width: 670 },
    { src: '/heel 4.svg', alt: 'Heel 4', x: 390, y: 50, rotate: 0, width: 770 },
    { src: '/heel 6.svg', alt: 'Heel 6', x: 390, y: -470, rotate: -20, width: 830 },
  ];

  // Use a single ref to hold all heel refs
  const heelRefs = useRef([]);
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/home');
  }

  useEffect(() => {
    heelConfigs.forEach((heel, i) => {
      const ref = heelRefs.current[i];
      if (!ref) return;
      // Animate from 1.5x the final x/y, more rotated, and slightly larger
      const x0 = heel.x * 1.5;
      const y0 = heel.y * 1.5;
      const startRotate = heel.rotate + 60; // more rotated
      const startScale = 1.2;
      gsap.fromTo(
        ref,
        {
          x: x0,
          y: y0,
          rotate: startRotate,
          scale: startScale,
          opacity: 0,
        },
        {
          x: heel.x,
          y: heel.y,
          rotate: heel.rotate,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          delay: 0.2 + i * 0.1,
          ease: 'power3.out',
        }
      );
    });
  }, []);

  return (
    <div className="centered-title heels-stage start-page-bg">
      {heelConfigs.map((heel, i) => (
        <img
          key={heel.alt}
          src={heel.src}
          alt={heel.alt}
          className="animated-heel"
          ref={el => (heelRefs.current[i] = el)}
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%)`,
            width: `${heel.width}px`,
            zIndex: 1,
            position: 'absolute',
            pointerEvents: 'none',
          }}
        />
      ))}
      <img src="/heels.svg" alt="Heels" className="title-svg" />
      <img src="/of.svg" alt="Of" className="title-svg of-svg" />
      <img src="/time.svg" alt="Time" className="title-svg time-svg" />
      <div className="start-btn" onClick={handleStartClick}>click here to start</div>
    </div>
  );
}

export default StartPage;

