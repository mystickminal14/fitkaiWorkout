import React ,{useState} from "react";
import Links from "./Links";
import HeroSection from "../Design/HeroSection";
import Exercises from "./Exercises";
import Search from "../Design/Search";
import Footer from "./Footer";

export default function Home() {
  const [searchval, newval] = useState([]);
  const [body, setbody] = useState('all')
console.log(searchval)
  return (
    <>
      <Links />
      <HeroSection/>
      <Search  newval={newval} body={body} setbody={setbody}/>
      <Exercises  newval={newval} body={body} searchval={searchval}/>
   <Footer/>
    </>

  );
}
