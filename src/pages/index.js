import * as React from "react";
import "./layout.css";
import "./layout2.css";
import { Navbar } from "./Navbar";
import Video from "./Video";
import Album from "./Album";
import Intro from "./Intro";
// import Image from "./wwc22-logo.png"
import { Link } from 'gatsby';



const exp = [
  {
    caption: "Mimos impacting the WeAreDevelopers World Congress",
    desc: "This was the planet the Mimos hit. Fortunately it was not only interesting by itself but it was also hosted by the very vibrant and flashy city of Berlin. So we had more than enough stuff to see and do on our idle time like for instance experiencing Tiesto DJ in Kraftwerk.",
    photo_url:
      "https://res.cloudinary.com/pingo-mimo/image/upload/v1657644448/PinGo/wad-world-congress-2022-mimo.png",
      // "./src/images/icon.png",
      // Image,
    order_id: 1,
    type: "image",
  },
  {
    caption: "The first asteroids",
    desc: `Here we have the originators of the Mimo asteroid cloud hitting on the WAD planet. Basil -the convincing rock- kicked off the first interplanetary flight. Please don't confound our Basil with the one from Fawlty Towers although our one is also funny. Our very young 22 year old instructor Abed was the second one to fire up rockets.`,
    photo_url:
      "https://res.cloudinary.com/pingo-mimo/image/upload/v1657644409/PinGo/abed-basil-berlin-first-day-mimo.jpg",
    order_id: 2,
    type: "image",
  },
  {
    caption: "Basil Our Cook",
    desc: "Basil was not only the originator of this event but offered to be our cook for the first evening. And no, we didn't have common Hamburgers with fries and ketchup. No, we had something very spectacular. In this video Basil explains the story of our first dish: believe it or not we had frozen salmon with olive oil and it was delicious and refreshing to be honest.",
    photo_url: <Video />,
    //"https://res.cloudinary.com/pingo-mimo/image/upload/v1657649098/PinGo/Basil-Berlin-FirstDish-WAD-Congress-2022.png",
    order_id: 3,
    type: "video",
  },
  {
    caption: "And now the main dish",
    desc: "But the frozen fish wasn't enough jaw-dropping stuff: we also had the opportunity to taste this wonderful 'sous vide' meat. We were all flabbergasted to learn that Basil brought all of this equipment to Berlin to cook this meat for all of us just for that first evening. Thank you very much for that Basil!",
    photo_url:
      "https://res.cloudinary.com/pingo-mimo/image/upload/v1657644247/PinGo/sousVide-Meat-Mimo-Basil-Berlin.jpg",
    order_id: 4,
    type: "image",
  },
  {
    caption: "First collission",
    desc: "And here we have almost all the asteroids sitting at one table shortly after impacting in Berlin . Abed! please buy yourself an iphone for the next event! It shoots better pictures.",
    photo_url:
      "https://res.cloudinary.com/pingo-mimo/image/upload/v1657641259/PinGo/image-cohort4-cohort5-dinner-first-evening-berlin.jpg",
    order_id: 5,
    type: "image",
  },
  {
    caption: "First Day at WAD World Congress and First speech from GitHub CEO Thomas Dohmke",
    desc: "The first day of the congress was kicked off by the CEO of Github: a bloke with a very strong German accent. Later on we learned that he was originally from Berlin. Thomas Dohmke explained the newest features of Github: one collaborative cloud-based Github Codespaces and AI aided Github Copilot.",
    photo_url:
      "https://res.cloudinary.com/pingo-mimo/image/upload/v1657649610/PinGo/Image-weAreDevs-Berlin-2022-Thomas-Dohmke-Github-CEO.jpg",
    order_id: 6,
    type: "image",
  },
  {
    caption: "Another fantastic speech from Keith Richards @ WAD World Congress ",
    desc: "This guy (Keith Richards) told us a bit about the Design Principles. One of his most famous books: DOM Scripting costs almost 60 Euros. This is obviously a collector's price because the book is from 2010. The most remarkable sentence of his speech was: \"JavaScript should only do what only JavaScript can do\".",
    photo_url:
      "https://res.cloudinary.com/pingo-mimo/image/upload/v1657650275/PinGo/Keith-Richards-Design-Principles-JavaScript-Berlin-WAD22.jpg",
    order_id: 7,
    type: "image",
  },
];

const Card = (props) => {
  const stylingClass = props.order_id % 2 !== 0 ? "left" : "right";
 
  return ( 
        <div className={"container "+stylingClass}>
              <figure className="card">
                  <figcaption>
                  <p className="num">{props.order_id}</p>
                  <p className="title">{props.caption}</p>         
                  </figcaption>
                  <img src={props.img} width="100%" height="100%" alt={props.caption} />
                  <p className="details">{props.desc}</p>
              </figure>
        </div>  
  );
};

const Timeline = () => {
  return (
    <div className="timeline">
      {exp.map((item, index) => (
        <Card
          img={item.photo_url}
          caption={item.caption}
          order_id={item.order_id}
          desc={item.desc}
          key={index}
        />
      ))}
    </div>
  );
};

const IndexPage = () => {
  return (
    <>
      <div>
        <head>
        <title>PinGo</title>
        </head>
        {/* <main>
          
        </main> */}
        <body>
          <Navbar />
          <Intro />
          {<hr></hr>}
          <Timeline />
          <Album />
          <Video />
        </body>
      </div>
    </>
  );
};

export default IndexPage;
