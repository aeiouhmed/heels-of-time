import React from "react";
import './originPage.css';
import { useNavigate } from "react-router-dom";

function OriginPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/home")
    }

    return (
        <div className="grey-bg">
          <img src="/originPage/paper-bg.png" className="paper-bg"/>
          <img src="/originPage/left-bottom.svg" className="left-bottom"/>
          <img src="/originPage/left-top.svg" className="left-top"/>
          <img src="/originPage/origins-early-use.svg" className="origins-early-use"/>
          <img src="/originPage/post-it-left.svg" className="post-it-left"/>
          <img src="/originPage/post-it-right.png" className="post-it-right"/>
          <img src="/originPage/text-persian.svg" className="text-persian"/>
          <img src="/originPage/right-bottom.svg" className="right-bottom"/>
          <img src="/originPage/right-middle.svg" className="right-middle"/>
          <div className="go-back-btn">
            <button onClick={goBack}>GO BACK</button>
          </div>
      </div>
    );
}

export default OriginPage;
