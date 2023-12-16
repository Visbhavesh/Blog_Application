import React from 'react';
import { Link } from 'react-router-dom';

import "./Popularpost.css";

const Chip = ({ label }) => <p className='chip'>{label}</p>;

const PopularPostcards = (
  {post
}
) => {

    const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
    const addEllipsis = (str, limit) => {
      return str.length > limit ? str.substring(0, limit) + "..." : str;
    };
   
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={url} alt='cover' />
      <Chip label={post.categories} />
      <h3>{post.title}</h3>
      <p className='blogItem-desc'>{addEllipsis(post.description,100)}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={url} alt='avatar' />
          
            <h4>{post.username}</h4>
          
        </div>
        <Link className='blogItem-link' to={`/blogs/details/${post._id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default PopularPostcards;
