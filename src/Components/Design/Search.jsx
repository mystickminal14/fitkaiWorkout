import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "axios";
import Horizontal from "./Horizontal";

export default function Search({newval,bp,setbody}) {
  const [sear, getSearch] = useState("");

  const [bodypartss, setBodyparts] = useState([]);
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
       'X-RapidAPI-Key': '18529b5229msh2c5892eb22fa4dcp1287ffjsnea6a0b15b8e2',
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const get = (e) => {
    getSearch(e.target.value.toLowerCase());
  };
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          options
        );

        setBodyparts(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchExercises();
  }, []);

  const clicked = async () => {
    if (sear) {
      try {
        const response = await axios.request(options);
        const exerciseData = response.data.filter((exer) => {
          return (
            exer.name.toLowerCase().includes(sear) ||
            exer.target.toLowerCase().includes(sear) ||
            exer.equipment.toLowerCase().includes(sear) ||
            exer.bodyPart.toLowerCase().includes(sear)
          );
        });
        getSearch("");
      
        newval(exerciseData);
      } catch (error) {
        console.error(error);
      }
    }
  };
 
  return (
    <>
      <div className="para">
        <p className="quote">
          "Incredible Workouts You Need to Be Familiar With"
        </p>
      </div>
      <div className="search">
        <input
          type="text"
          value={sear}
          onChange={get}
          placeholder="search Exercises"
        style={{fontFamily:'hammersmith one'}}
        />
        <button onClick={clicked}>Search</button>
      </div>

      <div className="horizontal">
      <Horizontal body={bp} setbody={setbody}props={bodypartss} />
      </div>
    </>
  );
}
