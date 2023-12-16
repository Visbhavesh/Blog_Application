import React from "react";
import Footer from "../footer/Footer";
// import img from "../images/pricing.jpg"
// import Back from "../common/Back"
import "./contact.css";
const img =
  "https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80" ||
  "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" ||
  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <div className="back">
          <div className="container">
            <span>Contact Us</span>
            <h1>Get Helps & Friendly </h1>
          </div>
          <img src={img} alt="" />
        </div>

        <div className="container">
          <form className="shadow">
            <h3>Contact Form</h3> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button>Send</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
