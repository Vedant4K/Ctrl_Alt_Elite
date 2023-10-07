import React from "react";

const VideoPreview = ({ yt }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <iframe
        width="560"
        height="315"
        src={yt}
        //   title={title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPreview;
