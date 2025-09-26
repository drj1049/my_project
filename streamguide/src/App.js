import React, { useState, useEffect } from "react";
import StreamCard from "./StreamCard";
import streamsData from "./data.json";
import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [streams, setStreams] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setStreams(streamsData);
  }, []);

  const filteredStreams = streams.filter(stream => {
    const matchesSearch = stream.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || stream.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <h1>🎥 StreamGuide – What’s Live Now</h1>

      <input
        type="text"
        placeholder="Search streams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories">
        {["All", "Gaming", "Music", "Sports"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="stream-list">
        {filteredStreams.length > 0 ? (
          filteredStreams.map((stream, index) => (
            <StreamCard key={index} {...stream} />
          ))
        ) : (
          <p>No streams found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

