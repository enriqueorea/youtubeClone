import React from "react";
import { CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channel, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      width: { xs: "356px", md: "300px" },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title}
          sx={{
            borderRadius: "50%",
            width: "180px",
            height: "180px",
            margin: "0 auto",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant="h6" fontWeight={"bold"}>
          {channel?.snippet?.title}
          <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
        </Typography>
        {channel?.statistics?.subscriberCount && (
          <Typography variant="subtitle2" fontWeight={"bold"}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
            subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
