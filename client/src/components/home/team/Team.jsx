import React from "react";
// import Heading from "../../common/Heading"
// import { team } from "../../data/Data"
import "./team.css";
import Roll from "react-reveal/Roll";
import { Box, Stack, styled, Typography } from "@mui/material";
import Slide from "react-reveal/Slide";
const team = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];
const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Slide right>

          <Typography align="center" variant="h3" sx={{ fontWeight: 650 }}>
            Our <b style={{ color: "green" }}>Bloggers</b>
          </Typography>
          <Typography
            align="center"
            variant="body2"
            sx={{ fontWeight: 100, mb: 10, px: 18 }}
            >
            Blogging is often straightforward for nonfiction writers, less so
            for novelists
          </Typography>

            </Slide>
          <div className="content mtop grid3">
            {team.map((val, index) => (
              <Roll>
                <div className="box" key={index}>
                  <button className="btn3">{val.list} Blogs</button>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>
                  </div>
                </div>
              </Roll>
            ))}
          </div>
        </div>
      </section>
      <Typography
        align="center"
        variant="body2"
        sx={{ fontWeight: 100, mb: 20 }}
      ></Typography>
    </>
  );
};

export default Team;
