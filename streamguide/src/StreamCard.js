import React from "react";

function StreamCard({ title, platform, link, thumbnail }) {
  return (
    <div className="stream-card">
      <img src={thumbnail} alt={title} className="thumbnail" />
      <h3>{title}</h3>
      <p>Platform: {platform}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Watch Now</button>
      </a>
    </div>
  );
}

export default StreamCard;

