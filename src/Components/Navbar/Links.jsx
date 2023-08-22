import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.css";
import { SiOpenaigym } from "react-icons/si";
export default function Links() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <SiOpenaigym style={{color:'white', fontSize:'2rem'}}/> <h1 style={{color:'skyblue'}}>Fitkai</h1>
            </NavLink>
          </li>
          <div className="toether">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/exercise/:id">Exercises</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
