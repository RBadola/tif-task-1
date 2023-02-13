import React, { useState } from "react";
import item1 from "/item1.png";
import item2 from "/item2.png";
import item3 from "/item3.png";
import item4 from "/item4.png";
import item5 from "/item5.png";
import item6 from "/item6.png";
import "./Articles.css";
const Articles = () => {
  const [first, setfirst] = useState(true);
  const cardData = [
    {
      imgsrc: item1,
      title: " Grilled  Tomatoes at Home ",
    },
    {
      imgsrc: item2,
      title: " Snacks for Travel ",
    },
    {
      imgsrc: item3,
      title: "Post-workout Recipes ",
    },
    {
      imgsrc: item4,
      title: "How To Grill Corn",
    },
    {
      imgsrc: item5,
      title: "Crunchwrap Supreme ",
    },
    {
      imgsrc: item6,
      title: " Broccoli Cheese Soup ",
    },
  ];
  const First3 = (props) => {
    return cardData.map((item, index) => {
      if (index < 3) {
        return (
          <div className="card" key={index}>
            <img src={item.imgsrc} className="cardImg" />
            <p className="cardTitle">{item.title}</p>
            <p className="cardDesc">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard....
            </p>
            <button className="btn">Read More</button>
          </div>
        );
      }
    });
  };
  function Second3() {
    return cardData.map((item, index) => {
      if (index > 2 && index < 6) {
        return (
          <div className="card" key={index}>
            <img src={item.imgsrc} className="cardImg" />
            <p className="cardTitle">{item.title}</p>
            <p className="cardDesc">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard....
            </p>
            <button className="btn">Read More</button>
          </div>
        );
      }
    });
  }
  return (
    <div>
      <p className="headingA  ">Latest Articles</p>
      <div className="cards ">
        {first ? <First3 /> : <Second3 />}
        <div className="btns ">
          <button className="btn2" onClick={() => setfirst(true)} disabled={first}>
            &#8826; 
          </button> 
          &nbsp;&nbsp;
          {
            first? 1:2
          }/2&nbsp;<button className="btn22 " onClick={() => setfirst(false)} disabled={!first}>
          &#8827;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
