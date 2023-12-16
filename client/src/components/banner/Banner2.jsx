import React from "react";
import { Box, Typography } from "@mui/material";
// import HeroImage from "../../static/HeroImage.jpg";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";
const HeroImage ="https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80" ||"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" ||
  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
const Banner2 = () => {
  return (

    <Box>
      {/* <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Fashions<b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We Make you look the better of you!
      </Typography> */}
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>

            
            <Rotate top left>
              <Typography variant={"h6"} color="tomato" align="center" pt={8}>
                Trending Blogs
              </Typography>

              <Typography variant="h4" align="center">
                Life is Boring without Blogs!
              </Typography>
              <Typography variant="body1" align="center" pb={8}>
                We Love Blogs
              </Typography>
            </Rotate>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner2;
