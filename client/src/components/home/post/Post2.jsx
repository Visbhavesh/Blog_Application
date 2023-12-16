import * as React from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { styled, Box } from "@mui/material";

// import Rotate from "react-reveal/Rotate";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  //   height: 450px;
  & > img,
  & > p {
    padding: 0 5px 5px 5px;
  }
`;
export default function Post2({ post }) {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  return (
    <Bounce>
      <Rotate>
        <Roll>
          <Container>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
                    {post.username[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.username}
              />
              <CardMedia
                component="img"
                height="200"
                image={url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {addEllipsis(post.title, 20)}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {addEllipsis(post.description, 150)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Container>
        </Roll>
      </Rotate>
    </Bounce>
  );
}
