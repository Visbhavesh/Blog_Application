import { Grid } from "@mui/material";

//components

import Banner2 from "../banner/Banner2";
import Types from "../banner/Subbanner";
import Footer from "../footer/Footer";


import Featured from "./featured/Featured";
import Popularpost from "./post/Popularpost";

import Team from "./team/Team";
import Slide from "react-reveal/Slide";
const Home = () => {
  return (
    <>
      <Banner2 />
      <Slide left> <Types /></Slide>
     
      <Popularpost />

      <Featured />
      <Slide left>
        <section className="footerContact">
          <div className="container">
            <div className="send flex">
              <div className="text">
                <h1>Do You Have Questions ?</h1>
                <p>We'll help you to grow your career and growth.</p>
              </div>
              <button className="btn5">Contact Us</button>
            </div>
          </div>
        </section>
      </Slide>
      <Team />
      <Footer />
    </>
  );
};

export default Home;
