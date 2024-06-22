import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyAKXqF6KODs9PuwC3N8l_OI9czMJhGyz3o'; // Reemplaza 'TU_CLAVE_DE_API' con tu propia clave de API

const YouTubeSearch = ({ videoIds }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoData = await Promise.all(videoIds.map(async (videoId) => {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
          );
          return response.data.items[0];
        }));
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, [videoIds]);

  return (
    <div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Top<strong className="purple"> Natanael</strong> 
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {videos.map((video) => (
          <div key={video.id} style={{ width: '200px', margin: '10px' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                title={video.snippet.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
