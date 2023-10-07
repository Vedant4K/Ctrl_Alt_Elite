import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Video.css";
import meet from "../assets/meet.png";

const VideoRoom = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "row",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "1rem" }}>
          Enter a Room Id to share with your Mentor.
        </h2>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter room code"
        />
        <button onClick={handJoinRoom}>Join Room</button>
      </div>
      <div>
        <img src={meet} width={500} />
      </div>
    </section>
  );
};

export default VideoRoom;
