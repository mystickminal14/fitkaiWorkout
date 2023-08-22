import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./E.css";
export default function Edetails() {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": "18529b5229msh2c5892eb22fa4dcp1287ffjsnea6a0b15b8e2",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const [Edetails, setEdet] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          options
        );
        setEdet(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, [id]);

  return (
    <>
      <div className="ed">
        <div className="ddd">
          <img src={Edetails.gifUrl} alt={Edetails.name} />
        </div>
        <div className="detailsss">
          <h1 class='dname'>{Edetails.name}</h1>
          <p className='p'>
            Exercises keep you strong {Edetails.name} is one of the best
            exercises to target your {Edetails.target}. It will help you improve
            your mood and gain energy.
          </p>
          <div className="ic">
            <i className="fa-solid fa-dumbbell dumb a" />
            <h3  className='h3'>{Edetails.bodyPart}</h3>
          </div>
          <div className="ic">
            <i className="fa-solid fa-dumbbell dumb b" />
            <h3 className='h3'>{Edetails.equipment}</h3>
          </div>

          <div className="ic">
            <i className="fa-solid fa-dumbbell dumb" />
            <h3 className='h3'>{Edetails.target}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
