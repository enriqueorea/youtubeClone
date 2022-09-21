import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "../";
import { fetchVideos } from "../../api";

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchVideos(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchVideos(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setChannelVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box
        style={{
          background:
            "linear-gradient(90deg, rgba(207,21,21,1) 0%, rgba(0,0,0,1) 35%, rgba(175,191,194,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      ></Box>
      <ChannelCard channel={channelDetails} marginTop="-120px" />
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelVideos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
