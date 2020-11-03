import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function Video({ channels }) {
  const [toggle, setToggle] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const playVideo = (videoId) => {
    setIsOpen(true);
    setCurrentVideo(videoId);
  };
console.log()
 
  return (
    <Container>
      <button className="btn btn-outline-dark" onClick={handleToggle}>
        Toggle Columns
      </button>

      <Grid toggle={toggle} className="list-group mb-4">
        {channels.map((chan) => (
          <VideoItem
            onClick={() => playVideo(chan.id.videoId)}
            className="list-group-item"
          >
            <div key={chan.snippet.channelId}>
              <Title>{chan.snippet.title}</Title>
              <img
                src={chan.snippet.thumbnails.default.url}
                alt={chan.snippet.title}
              />
            </div>

            <Description>
              {chan.snippet.description.length > 1000 ? (
                <p>{chan.snippet.description.substring(0, 750) + "..."}</p>
              ) : (
                <p>{chan.snippet.description}</p>
              )}
            </Description>
          </VideoItem>
        ))}
      </Grid>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {currentVideo}
      </Modal>
    </Container>
  );
}

export default Video;

const Container = styled.div`
  align-items: center;
  padding: 50px 50px 0 50px;

  @media (max-width: 786px) {
    grid-template-columns: 1fr;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2.3em;
    max-width: 100%;
  }
`;

const Grid = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: ${({ toggle }) =>
    toggle ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr"};
  grid-gap: 1em;
  list-style: none;

  @media (max-width: 786px) {
    grid-template-columns: 1fr;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    padding: 2.3em;
  }
`;
const VideoItem = styled.li`
  max-width: 350px;
  overflow: hidden;
`;

const Title = styled.h3`
  font-weight: bold;
  padding: 5px;
`;

const Description = styled.p`
  margin-top: 5px;
  line-height: 1.3em;
  font-weight: 450;
`;
