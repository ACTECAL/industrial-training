import React from 'react';
import './CheatSheetVideos.css';

function CheatSheetVideos({ videos = [] }) {
  if (!videos.length) return null;
  return (
    <div className="cheatsheet-videos-section">
      <h3 className="cheatsheet-videos-title">Related Videos</h3>
      <div className="cheatsheet-videos-list">
        {videos.map((video, idx) => (
          <div className="cheatsheet-video-item" key={idx}>
            <h4 className="cheatsheet-video-title">{video.title}</h4>
            <div className="cheatsheet-video-frame-wrapper">
              <iframe
                width="100%"
                height="315"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {video.description && <p className="cheatsheet-video-desc">{video.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheatSheetVideos; 