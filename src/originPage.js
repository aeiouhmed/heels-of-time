import React, { useRef,  useEffect } from "react";
import './originPage.css';
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

function OriginPage() {

    const navigate = useNavigate()

    const back = () => {
        navigate("/home")
    }

    // Create refs for all animated elements
    const leftTopRef = useRef(null);
    const leftBottomRef = useRef(null);
    const rightMiddleRef = useRef(null);
    const rightBottomRef = useRef(null);
    const titleRef = useRef(null);
    const postItLeftRef = useRef(null);
    const postItRightRef = useRef(null);
    const noteeRef = useRef(null);
    const backBtnRef = useRef(null);

    useEffect(() => {
      // Create GSAP timeline for coordinated animations
      const tl = gsap.timeline();

      // Set intiial states
      gsap.set(leftTopRef.current, {
        scale: 3,
        x: "100vw",
        y: "-100vh",
        opacity: 0
      });

      gsap.set(leftBottomRef.current, { 
        x: "-100vw",
        opacity: 0 
      });
      
      gsap.set(rightMiddleRef.current, { 
          y: "100vh",
          opacity: 0 
      });
      
      gsap.set(rightBottomRef.current, { 
          x: "100vw",
          opacity: 0 
      });
      
      gsap.set(titleRef.current, { 
          y: 50,
          opacity: 0 
      });

      gsap.set([postItLeftRef.current, postItRightRef.current, noteeRef.current], {
          opacity: 0,
          y: 30
      });

      gsap.set(backBtnRef.current, {
          opacity: 0,
          scale: 0.8
      });

      // Animate elements in sequence
      tl
      // Left top: big to small from outside screen
      .to(leftTopRef.current, {
          duration: 1.2,
          scale: 1,
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power3.out"
      })
      
      // Left bottom: slide in from left
      .to(leftBottomRef.current, {
          duration: 0.8,
          x: 0,
          opacity: 1,
          ease: "power2.out"
      }, "-=0.7")
      
      // Right middle: slide up from bottom
      .to(rightMiddleRef.current, {
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: "power2.out"
      }, "-=0.7")
      
      // Right bottom: slide in from right
      .to(rightBottomRef.current, {
          duration: 0.8,
          x: 0,
          opacity: 1,
          ease: "power2.out"
      }, "-=0.7")
      
      // Title: fade and slide up from bottom
      .to(titleRef.current, {
          duration: 0.6,
          y: 0,
          opacity: 1,
          ease: "power2.out"
      }, "-=0.4")
      
      // Post-it notes and content: stagger animation
      .to([postItLeftRef.current, postItRightRef.current], {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "back.out(1.7)",
      }, "-=0.2")
      
      // Note content
      .to(noteeRef.current, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "back.out(1.7)"
      }, "-=0.3")
      
      // Cleanup function
      return () => {
        tl.kill();
      };

    }, []);

    return (
        <div className="grey-bg">
          <img src="/originPage/paper-bg.png" className="paper-bg"/>
          <img ref={leftTopRef} src="/originPage/left-top.svg" className="left-top"/>
          <img ref={titleRef} src="/originPage/origins-early-use.svg" className="origins-early-use"/>
          <img ref={postItLeftRef} src="/originPage/post-it-left.svg" className="post-it-left"/>
          
          <div ref={noteeRef} className="notee">
            <img src="/originPage/text-persian.svg" alt="" className="notee-img" />
            <img ref={postItRightRef} src="/originPage/post-it-right.png" alt="" className="notee-text-img" />
          </div>
          
          <div class="image-container">
            <img ref={leftBottomRef} src="/originPage/left-bottom.svg" className="left-bottom"/>
            <img ref={rightBottomRef} src="/originPage/right-bottom.svg" className="right-bottom"/>
            <img ref={rightMiddleRef} src="/originPage/right-middle.svg" className="right-middle"/>
          </div>
          <div className="back-btn">
            <button onClick={back}>GO BACK</button>
          </div>
      </div>
    );
}

export default OriginPage;
