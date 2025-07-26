import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './fgsPage.css';
import './App.css'; // Ensure this imports the font styles



function FgsPage() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/home');
    }
    

    useEffect(() => {
        // Set initial states for elements to ensure animations replay on reload
        gsap.set(".green-heels", { rotation: -180, transformOrigin: "bottom right" });
        gsap.set(".sticker-1", { x: "-100%", opacity: 0 });
        gsap.set(".sticker-2", { y: "100%", opacity: 0 }); // Sticker 2 comes from bottom
        gsap.set(".sticker-3", { x: "300%", opacity: 0 }); // Sticker 3 comes from VERY FAR to the right
        gsap.set(".img-heels-1", { y: "-100%", opacity: 0 });
        gsap.set(".img-heels-2", { x: "100%", opacity: 0 });
        gsap.set(".img-heels-3", { y: "100%", opacity: 0 });
        // Set initial states for text elements
        // Set initial states for text elements
        gsap.set(".fashion-char, .gender-char", { opacity: 0 });
        gsap.set(".title-shift", { x: "-100%", opacity: 0 });

        const tl = gsap.timeline();

        tl.to(".green-heels", { rotation: 0, duration: 1, ease: "power2.out" })
          // Text animations after green-heels
          .to(".fashion-char", { opacity: 1, duration: 0.1, stagger: 0.05, ease: "power1.out" }, "+=0") // Type out effect for Fashion
          .to(".gender-char", { opacity: 1, duration: 0.1, stagger: 0.05, ease: "power1.out" }, "+=0") // Type out effect for Gender &
          // img-heels animations after text
          .to(".img-heels-1", { y: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }, "+=0") // 0.0s delay after text animations
          .to(".img-heels-2", { x: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.7") // Start 0.1s after img-heels-1 starts (0.8 - 0.7 = 0.1)
          .to(".img-heels-3", { y: "0%", opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.7") // Start 0.1s after img-heels-2 starts
          // SHIFT animation and Sticker animations at the same time, after img-heels
          .to(".title-shift", { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }, "+=0") // Start immediately after img-heels-3
          .to(".sticker-1", { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }, "<") // Start with SHIFT
          .to(".sticker-2", { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }, "<") // Start with SHIFT
          .to(".sticker-3", { x: "0%", opacity: 1, duration: 1, ease: "power2.out" }, "<"); // Start with SHIFT

    }, []);

    return (
    <div className="fgs-page-bg">
      <div className='btn-back'  onClick={handleBackClick}>
        <button>GO BACK</button>
      </div>
      
      <div className="title-fashion">
        {"FASHION".split("").map((char, index) => (
          <span key={`fashion-${index}`} className="fashion-char">{char}</span>
        ))}
      </div>
      <div className="title-gender">
        {"GENDER &".split("").map((char, index) => (
          <span key={`gender-${index}`} className="gender-char">{char}</span>
        ))}
      </div>

      <div className="title-shift">
        <div className="shift-text">SHIFT</div>
      </div>
      <div className="right-bar">
        <img src="/fgsPage/imgHeels1.svg" alt="Heels 1" className="img-heels-1" />
        <img src="/fgsPage/imgHeels2.svg" alt="Heels 2" className="img-heels-2" />
        <img src="/fgsPage/imgHeels3.svg" alt="Heels 3" className="img-heels-3" />
      </div>

     
      <img src="/fgsPage/heels1.svg" alt="Green Heels" className="green-heels" />

      <img src="/fgsPage/sticker1.svg" alt="Sticker 1" className="sticker sticker-1" />
      <img src="/fgsPage/sticker3.svg" alt="Sticker 3" className="sticker sticker-3" />
      <img src="/fgsPage/sticker2.svg" alt="Sticker 2" className="sticker sticker-2" />
    </div>
    );
}

export default FgsPage;
