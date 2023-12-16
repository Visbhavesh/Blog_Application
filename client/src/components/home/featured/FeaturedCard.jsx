import React from "react"
import { Box, Stack, styled, Typography } from "@mui/material";
// import { featured } from "../../data/Data"
import Spin from "react-reveal/Spin";
const featured = [
  {
    cover: "../images/hero/h1.png",
    name: "Nature",
    total: "12 Blogs",
  },
  {
    cover: "../images/hero/h2.png",
    name: "Lifestyle",
    total: "15 Blogs",
  },
  {
    cover: "../images/hero/h3.png",
    name: "City",
    total: "25 Blogs",
  },
  {
    cover: "../images/hero/h4.png",
    name: "Technology",
    total: "30 Blogs",
  },
  {
    cover: "../images/hero/h6.png",
    name: "Politics",
    total: "20 Blogs",
  },
]
const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <Spin>
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
          </Spin>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
