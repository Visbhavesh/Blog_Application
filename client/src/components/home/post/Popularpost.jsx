import React from "react";
// import BlogItem from "./BlogItem";
import "./Popularpost.css";
import { useEffect, useState } from "react";
import { API } from "../../../service/api";
import { Grid, Box ,Typography} from '@mui/material';
import PopularPostcards from "./Postcards";
const Popularpost = () => {
  const [posts, getPosts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts();
      if (response.isSuccess) {
        getPosts(response.data);
      }
    };
    fetchData();
  }, []);



  return (
    <div className="blogList-wrap">


      {posts.map((post) => (
        <PopularPostcards post={post} />
      ))}

    

    </div>
  );
};

export default Popularpost;
