import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoPreview from "./VideoPreview";
const Card = ({ title, description, link }) => {
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    // setPreview(!preview);
    window.open(link, "_blank");
  };
  return preview === false ? (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary" onClick={handlePreview}>
          Play Video
        </a>
      </div>
    </div>
  ) : (
    <VideoPreview yt={link} />
  );
};

export default Card;
