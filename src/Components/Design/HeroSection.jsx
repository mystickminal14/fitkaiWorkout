import React from "react";
import "./HeroSection.css";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import { CgGym } from "react-icons/cg";
import Search from "./Search";
export default function HeroSection() {
  return (
    <>
      <div className="hero">
        <div className="herotext">
          <h1
            
          >
            Fitkai
          </h1>
          <h2>Exercises</h2>
          <p className="pdg"style={{color:'skyblue'}}>Sweat, sacrifice, success</p>
          <p>Check out the most effective exercises</p>
          <button>
            Explore Exercises<span></span>
          </button>
        </div>
        <div className="images">
        <div className="imgcoont img-c1">
            <img src={img2} alt="gymImages" />
          </div>
          <div className="imgcoont  img-c2">
            <img src={img1} alt="gymImages" />
          </div>
          
          <CgGym  className='dumbell' />
        </div>
      </div>
      <br/>
      
 
</>
  );
}
