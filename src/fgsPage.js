import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './fgsPage.css';
import './App.css'; // Ensure this imports the font styles



function FgsPage() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/home');
    }
    
    // useEffect(() => {
    //     // GSAP animations can be added here if needed
    //     gsap.from('.fgs-page-bg img', {
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 0.2,
    //         ease: 'power3.out',
    //     });
    // }, []);

    return (
    <div classname="" className="fgs-page-bg">
      <div className='btn-back'  onClick={handleBackClick}>
        <button>GO BACK</button>
      </div>
      
      <div className="title-fashion">FASHION</div>
      <div className="title-gender">GENDER &</div>

      <div className="title-shift">
        <div className="shift-text">SHIFT</div>
      </div>
      <div className="right-bar">
        <img src="/fgsPage/imgHeels1.svg" className="img-heels-1" />
        <img src="/fgsPage/imgHeels2.svg" className="img-heels-2" />
        <img src="/fgsPage/imgHeels3.svg" className="img-heels-3" />
      </div>

     
      <img src="/fgsPage/heels1.svg" className="green-heels" />

      <img src="/fgsPage/sticker1.svg" className="sticker sticker-1" />
      <img src="/fgsPage/sticker3.svg" className="sticker sticker-3" />
      <img src="/fgsPage/sticker2.svg" className="sticker sticker-2" />
    </div>
    );
}

export default FgsPage;
