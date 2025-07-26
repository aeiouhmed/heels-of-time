import "./risePage.css"
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"

function RisePage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/home")
    }

    // Create refs for animated elements
    const heels2Ref = useRef(null)
    const heelsRef = useRef(null)
    const titleRef = useRef(null)
    const note1Ref = useRef(null)
    const note2Ref = useRef(null)
    const note3Ref = useRef(null)

    useEffect(() => {
        // Create GSAP timeline
        const tl = gsap.timeline()

        // Set initial states
        gsap.set(heels2Ref.current, {
            x: "-150vw",
            y: "200vh",
            rotation: -180,
            opacity: 1
        })

        gsap.set(heelsRef.current, {
            x: "100vw",
            opacity: 0
        })

        gsap.set(titleRef.current, { 
            y: 50,
            opacity: 0 
        });

        // Notes start off-screen from different directions
        gsap.set(note1Ref.current, {
            x: "-100vw",
            rotation: -10,
            opacity: 0
        })

        gsap.set(note2Ref.current, {
            x: "100vw",
            rotation: 10,
            opacity: 0
        })

        gsap.set(note3Ref.current, {
            y: "100vh",
            rotation: -5,
            opacity: 0
        })

        // Animation sequence
        tl
        // Heels2 flies in from outside with rotation
        .to(heels2Ref.current, {
            duration: 1.5,
            x: 0,
            y: 0,
            rotation: 0,
            ease: "power2.out"
        })

        .to(heelsRef.current, {
            duration: 0.6,
            x: 0,
            opacity: 1,
            ease: "power2.out"
        }, "-=1.5") 

        // Title fades in
        .to(titleRef.current, {
            duration: 0.6,
            y: 0,
            opacity: 1,
            ease: "power2.out"
        }, "-=0.5")

        // Notes slide in from different directions
        .to(note1Ref.current, {
            duration: 0.6,
            x: 0,
            rotation: 0,
            opacity: 1,
            ease: "back.out(1.7)"
        }, "-=0.4")

        .to(note2Ref.current, {
            duration: 0.6,
            x: 0,
            rotation: 0,
            opacity: 1,
            ease: "back.out(1.7)"
        }, "-=0.4")

        .to(note3Ref.current, {
            duration: 0.6,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "back.out(1.7)"
        }, "-=0.4")

        // Cleanup function
        return () => {
            tl.kill()
        }
    }, [])

    return(
        <div className="bg">
            <img src="/risePage/ellipse.svg" className="ellipse"/>
            <img ref={heelsRef} src="/risePage/heels.png" className="heels"/>
            <img ref={heels2Ref} src="/risePage/heels-2.svg" className="heel-2"/>
            <img ref={titleRef} src="/risePage/title.svg" className="title"/>
            <div ref={note1Ref} className="note note-1">
                <img src="/risePage/note-1.svg" alt="" className="note-img" />
                <img src="/risePage/text-1.svg" alt="" className="note-text-img" />
            </div>
            <div ref={note2Ref} className="note note-2">
                <img src="/risePage/note-2.svg" alt="" className="note-img" />
                <img src="/risePage/text-2.svg" alt="" className="note-text-img" />
            </div>
            <div ref={note3Ref} className="note note-3">
                <img src="/risePage/note-3.svg" alt="" className="note-img" />
                <img src="/risePage/text-3.svg" alt="" className="note-text-img" />
            </div>
            <div className="go-back-btn">
                <button onClick={goBack}>GO BACK</button>
            </div>
        </div>
    )
}

export default RisePage;