import { Grid } from "@mui/material";

//components
import Banner from "../banner/Banner";
import Banner2 from "../banner/Banner2";
import Types from "../banner/Subbanner";
import Footer from "../footer/Footer";
import Categories from "./Categories";
import Popularpost from "./post/Popularpost";
import Posts from "./post/Posts";
const Blogs = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
        <Grid container item xs={10} sm={10} lg={10}>
          <Posts />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Blogs;
