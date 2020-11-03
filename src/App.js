import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import VideoPageContainer from "./components/VideoPageContainer";

function App() {
  const [data, setData] = useState({
    results: "",
    query: "",
  });
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = useCallback(() => {
    const { results, query } = data;
    axios.post("/api/youtube", { query, results }).then((res) => {
      setChannels(res.data);
    });
  }, [data]);
  


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    getVideos();
  };



  return (
    <div className="App">
      <h1 className="text-primary mb-3">Web Dev Simplified's Channel</h1>
      <input
        name="query"
        onChange={handleChange}
        placeholder="Search Channel"
      />
      <input
        type="number"
        onChange={handleChange}
        name="results"
        placeholder="Number of results"
        id=""
      />
      <button onClick={handleSubmit}>search</button>
      <VideoPageContainer channels={channels} />
    </div>
  );
}

export default App;
