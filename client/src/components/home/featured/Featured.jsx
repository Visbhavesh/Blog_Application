import React from "react";
// import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";
import { Box, Stack, styled, Typography } from "@mui/material";
import Slide from "react-reveal/Slide";
const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
        <Slide left>
        <Typography align="center" variant="h3" sx={{ fontWeight: 650 ,mt:20,mb:10}} >
       Featured <b style={{ color: "green" }}>Blogs</b>
      </Typography></Slide>

      
          <div className="heading"></div>
          <FeaturedCard />
        </div>
        <Typography
            align="center"
            variant="body2"
            sx={{ fontWeight: 100, mb: 20 }}
          >
           
          </Typography>
    
      </section>
    </>
  );
};

export default Featured;
