import React from "react";

import { Box, Stack, styled, Typography } from "@mui/material";
import Rotate from "react-reveal/Rotate";
const sportsurl =
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const lifestyleurl =
  "https://images.unsplash.com/photo-1620403724063-e7c763fe9d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
const techurl =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Types = () => {
  return (
    <>
      <Box sx={{ my: 10 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt={10}
        >
         
        
          <StyledBox sx={{ backgroundImage: `url(${sportsurl})` }}>
          <Rotate>
            <StyledTypography align="center" variant="h3">
              Sports
            </StyledTypography>
            </Rotate>
          </StyledBox>
       
          
          <StyledBox sx={{ backgroundImage: `url(${techurl})` }}>
          <Rotate>
            <StyledTypography align="center" variant="h3">
              LifeStyles
            </StyledTypography></Rotate>
          </StyledBox>
         

          <StyledBox sx={{ backgroundImage: `url(${lifestyleurl})` }}>
          <Rotate><StyledTypography align="center" variant="h3">
              Technology
            </StyledTypography></Rotate>
          </StyledBox>
        </Stack>
      </Box>

      <Typography align="center" variant="h3" sx={{ fontWeight: 700 }} >
        Our <b style={{ color: "green" }}>Popular Blogs</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100,mb: 10  }}>
       We give you the freedom to  Write/Update/Delete the post.
      </Typography>
    </>
  );
};

export default Types;
