import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import First from "../components/First";

function Home() {
  return (
    <div className="container">
      {/* <img src="//i.imgur.com/WW7r0p1.jpg" alt="Homepic" className="fullimg" /> */}
      <Navbar />
      <First />
    </div>
  );
}

export default Home;
