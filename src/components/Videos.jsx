import { Stack, Box } from "@mui/material";
import { ChannelNew, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';
  console.log(videos);
  return (
    <Stack
      direction={ direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      marginLeft={{md:3.5}}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelNew channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
