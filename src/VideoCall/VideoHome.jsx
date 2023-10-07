import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter room code"
      />
      <button onClick={handJoinRoom}>Join Room</button>
    </section>
  );
};

export default VideoRoom;
