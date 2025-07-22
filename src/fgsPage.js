import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './fgsPage.css';



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
      <img src="/fgsPage/btnBack.svg" className="btn-back" onClick={handleBackClick} />
      <img src="/fgsPage/titleAnd.svg" className="title-and" />
      <img src="/fgsPage/titleGender.svg" className="title-gender" />
      <img src="/fgsPage/titleFashion.svg" className="title-fashion" />
      <img src="/fgsPage/titleShift.svg" className="title-shift" />
      <img src="/fgsPage/heels1.svg" className="green-heels" />
      <img src="/fgsPage/sticker1.svg" className="sticker sticker-1" />
      <img src="/fgsPage/sticker3.svg" className="sticker sticker-3" />
      <img src="/fgsPage/sticker2.svg" className="sticker sticker-2" />
    </div>
    );
}

export default FgsPage;
