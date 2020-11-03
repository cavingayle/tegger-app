import React, { useState } from "react";
import styled from "styled-components";
import Video from "./Video";
import Pagination from "./Pagination";

function VideoGrid({ channels }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = channels.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Video
        channels={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={channels.length}
        paginate={paginate}
      />
    </Container>
  );
}

export default VideoGrid;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
