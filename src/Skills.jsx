import React, { useEffect, useState } from "react";
import videos from "./assets/Videos";
import Card from "./Card";

const Skills = () => {
  const [fetchedVideos, setFetchedVideos] = useState([]);
  const apiKey = "AIzaSyDzmUHFX1TM7WrY2PSqxOHmIk7lHo6_xkw"; // Replace with your actual API key

  useEffect(() => {
    fetchVideoTitles();
  }, []);

  const fetchVideoTitles = async () => {
    try {
      const fetchPromises = videos.map(async (videoUrl) => {
        const videoId = videoUrl.split("v=")[1];
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const title = data.items[0].snippet.title;
          return { title, link: videoUrl };
        }
      });

      const fetchedVideoData = await Promise.all(fetchPromises);
      setFetchedVideos(fetchedVideoData.filter(Boolean));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="gradient-div-2 skills-content">
      <h2 style={{ fontWeight: "600" }}>Skills</h2>
      <p>"Every Lesson Is a Step Toward a Fresh Start."</p>
      <p>
        Access to many Self-Help Tutorials. Designed to develop necessary skills
        amongst individuals.
      </p>
      <div className="card-group">
        {fetchedVideos.map((video, index) => (
          <Card
            key={index}
            title={video.title}
            description=""
            link={video.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
