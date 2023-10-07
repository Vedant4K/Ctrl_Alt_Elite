import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Skills from "./Skills.jsx";
import Blog from "./Blog.jsx";
import VideoHome from "./VideoCall/VideoHome.jsx";
import Room from "./VideoCall/Room.jsx";
import Card from "./Card.jsx";
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<App />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/join-room" element={<VideoHome />} />
      <Route path="/room/:roomId" element={<Room />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
      <Route path="/card" element={<Card />} />
    </Routes>
  </BrowserRouter>
);
