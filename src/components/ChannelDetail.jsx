import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelNew } from "./";
import { fetchFromTheAPI } from "../utils/fetchFromTheAPI";
import zIndex from "@mui/material/styles/zIndex";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail);

  useEffect(() => {
    fetchFromTheAPI(`channels?.part=snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );

    fetchFromTheAPI(`search?channelId=${id}&part=snippet&
    order=date`).then((data) => setvideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box >
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(198,13,207,0.9641106442577031) 0%, rgba(0,255,252,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelNew channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ml:{md:'100px'}}} />
        <Videos videos={videos} />

      </Box>
    </Box>
  );
};

export default ChannelDetail;
