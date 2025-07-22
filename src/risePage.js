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
          <img src="/risePage/note-1.svg" className="note-1"/>
          <img src="/risePage/note-2.svg" className="note-2"/>
          <img src="/risePage/note-3.svg" className="note-3"/>
          <img src="/risePage/text-1.svg" className="text-1"/>
          <img src="/risePage/text-2.svg" className="text-2"/>
          <img src="/risePage/text-3.svg" className="text-3"/>
          <div className="go-back-btn">
            <button onClick={goBack}>GO BACK</button>
          </div>
      </div>
    )
}

export default RisePage;
