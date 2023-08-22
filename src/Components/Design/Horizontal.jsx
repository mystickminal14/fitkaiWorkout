import React from "react";
import "./Horizontal.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Horizontal({props,body,setbody}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1304 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

  return (
    <>

      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "poppins",
          marginTop: "80px"
        }}
      >
        Categories
      </h1>

      <Carousel responsive={responsive} swipeable={true} >
        {props.map((bodyPart, index) => (
          <div className="carousel-item" key={index}>
            <div className="cards">
              <div className="scroll" onClick={()=>{
              setbody( bodyPart );
              window.scrollTo({top:1800, left:100 ,behavior:'smooth'})
              }}>
                <i className="fas fa-dumbbell" />
                <p>{bodyPart}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
