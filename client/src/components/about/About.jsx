import React from "react";
import Footer from "../footer/Footer";
// import Back from "../common/Back";
// import Heading from "../common/Heading";
// import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  const img="https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80" ||"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" ||
  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
  return (
    <>
      <section className="about">
        <div className="back">
          <div className="container">
            {/* <span>About Us</span> */}
            <h1>About Us</h1>
          </div>
          <img src={img} alt="" />
        </div>
        {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
        <div className="container flex mtop">
          <div className="left row">
            <div className="heading"></div>
            <h1>  Hi,I am Yogesh </h1>
           

            <p>
            
            A Full Stack Web Developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Skilled in ReactJS,Javascript,HTML, Front-end Development, Cascading Style Sheets (CSS). </p>
            <p>
            Strong engineering professional with a Bachelor of Technology - BTech focused in Electronics and Communications Engineering from Indian Institute of Information Technology, Design and Manufacturing, Jabalpur. Motivated to learn, grow and excel in Web Development Field.
            </p>
            {/* <button className="btn2">More About Us</button> */}
          </div>
          <div className="right row">
            <img src={img} alt="" />
          </div>
        </div>
        <section className="footerContact">
          <div className="container">
            <div className="send flex">
              <div className="text">
                <h1>Do You Have Questions ?</h1>
                <p>I am Lookin for an group Project to contribute</p>
              </div>
              <button className="btn5">Contact Us Today</button>
            </div>
          </div>
        </section>
       
      </section>
      <Footer/>
    </>
  );
};

export default About;
