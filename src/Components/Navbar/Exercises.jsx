import React, { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';
import './ca.css';
import { AiOutlineArrowLeft ,AiOutlineArrowRight} from "react-icons/ai";
import axios from 'axios';
export default function Exercises({ newval, body, searchval }) {
  const [initaite, final] = useState(1)
  const [postper, useper] = useState(9)
  const lastpage = initaite * postper
  const firstindex = lastpage - postper
  const data = searchval.slice(firstindex, lastpage)
  let totalost = searchval.length
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
       'X-RapidAPI-Key': '18529b5229msh2c5892eb22fa4dcp1287ffjsnea6a0b15b8e2',
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  let pages = []
  for (let i = 1; i <= Math.ceil(totalost / postper); i++) {
    pages.push(i)
  }
  useEffect(() => {
    const edataa = async () => {
      let edata = [];
      if (body === 'all') {
        edata = await axios.get('https://exercisedb.p.rapidapi.com/exercises', options);
      } else {
        edata = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${body}`, options);
      }
      
      
      newval(edata.data);
    };
  
    edataa(); 
  }, [body, newval]);
  return (
    <div>
      <div style={{ marginTop: '100px' }} className="class">
        <h1 style={{ color: 'white', fontFamily: 'poppins', textAlign: 'center' }}>
          Showing results...
        </h1>
        <div className="exercisecard">
          {data.map((detai, index) => (
            <ExerciseCard key={detai.id} exercise={detai} />
          ))}
        </div>
      </div>
      <div className="pagination">
       
        {pages.map((page, index) => {
          return (

            <button className={page == initaite ? 'active' : ''} key={index} onClick={() => {
              final(page)
            }}>{page}</button>
          )
        })}
       
      </div>
    </div>
  );
}
