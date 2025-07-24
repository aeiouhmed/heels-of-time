import "./risePage.css"
import React from "react"
import { useNavigate } from "react-router-dom"

function RisePage () {

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/home")
    }

    return(
        <div className="bg">
          <img src="/risePage/ellipse.svg" className="ellipse"/>
          <img src="/risePage/heels.png" className="heels"/>
          <img src="/risePage/heels-2.svg" className="heel-2"/>
          <img src="/risePage/title.svg" className="title"/>
          <div className="note note-1">
            <img src="/risePage/note-1.svg" alt="" className="note-img" />
            <img src="/risePage/text-1.svg" alt="" className="note-text-img" />
          </div>
          <div className="note note-2">
            <img src="/risePage/note-2.svg" alt="" className="note-img" />
            <img src="/risePage/text-2.svg" alt="" className="note-text-img" />
          </div>
          <div className="note note-3">
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
