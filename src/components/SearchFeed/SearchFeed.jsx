import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../";
import { useParams } from "react-router-dom";
import { fetchVideos } from "../../api";
const searchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos(`/search?part=snippet&q=${searchTerm}`).then(
      ({ items, ...res }) => setVideos(items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Results for:<span style={{ color: "#F31503" }}> {searchTerm} </span>{" "}
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default searchFeed;
