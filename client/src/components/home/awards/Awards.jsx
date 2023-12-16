import React from "react"
// import Heading from "../../common/Heading"
// import { awards } from "../../data/Data"
import { Box, Stack, styled, Typography } from "@mui/material";
import "./awards.css"
const awards = [
  {
    icon: <i className='fa-solid fa-trophy'></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i className='fa-solid fa-briefcase'></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i className='fa-solid fa-lightbulb'></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i className='fa-solid fa-heart'></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
]
const Awards = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
        <div className='heading'>
        <h1>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h1>
        <p>Our Awards</p>
      </div>
          
          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
        <Typography
            align="center"
            variant="body2"
            sx={{ fontWeight: 100, mb: 30 }}
          >
           
          </Typography>
    
      </section>
    </>
  )
}

export default Awards
