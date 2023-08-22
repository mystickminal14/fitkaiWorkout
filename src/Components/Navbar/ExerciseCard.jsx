import React, {useState} from "react";

import "./ca.css";

import { Link } from "react-router-dom";
export default function ExerciseCard({ exercise }) {

  return (
    <div>
        
      <Link to={`/exercise/${exercise.id}`} >
        <div className="contain">
          <div className="imgcon">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          </div>
          <div className="btns">
            <button>{exercise.bodyPart}</button>
            <button>{exercise.target}</button>
          </div>
          <p className='nam'>{exercise.name}</p>
        </div>
      </Link>
    </div>
  );
}
