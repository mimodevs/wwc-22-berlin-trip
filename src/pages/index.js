import * as React from "react";
import "./layout.css";
import "./layout2.css";
import { Navbar } from "./Navbar";
import Video from "./Video";
import Album from "./Album";
import Intro from "./Intro";
// import Image from "./wwc22-logo.png"
import { Link } from 'gatsby';



const link = <a href="https://en.wikipedia.org/wiki/Fawlty_Towers"> Fawlty Towers</a>;
console.log(link);
const exp = [
  {
    caption: "Mimos impacting the WeAreDevelopers World Congress",
    desc: "This was the planet the Mimos hit. Fortunately it was not only interesting by itself but it was also hosted by the very vibrant and flashy city of Berlin. So we had more than enough stuff to see and do on our idle time like for instance experiencing Tiesto DJ in Kraftwerk.",
    photo_url:
      "./wwc22-logo.png",
      // "./src/images/icon.png",
      // Image,
    order_id: 1,
  },
  {
    caption: "The first asteroids",
    desc: `Here we have the originators of the Mimo asteroid cloud hitting on the WAD planet.  Basil -the convincing rock- kicked off the first interplanetary flight. Please don't confound our Basil with the one for ${<Link to="www.google.de"/>} although our one is also funny. Our very young 22 year old instructor Abed was the second one to fire up rockets.`,
    photo_url:
      "./originators.jpeg",
    order_id: 2,
  },
  {
    caption: "event kick off",
    desc: "german speaking/accent github copilot",
    photo_url:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80",
    order_id: 3,
  },
  {
    caption: "met John Romero",
    desc: "german speaking/accent github copilot",
    photo_url:
      "https://images.unsplash.com/photo-1656577865296-67f388c6ed0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    order_id: 4,
  },
];
const imgUrl =
  "https://images.unsplash.com/photo-1655821888788-6107699e1700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80";

const Pin = (props) => {
  return (
    <div className="pin">
      <div className="pin-content"> {props.value}</div>
    </div>
  );
};

const Card = (props) => {
  const stylingClass = props.order_id % 2 !== 0 ? "left" : "right";
 
  return (
    
        <div className={"container "+stylingClass}>
        
              <figure className="card">

                  <figcaption>

                  <p className="num">{props.order_id}</p>
                  {props.caption}
                    
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
        <main>
          {/* <title>📌-line</title> */}
        </main>
        <body>
          <Navbar />
          <Intro />
            <div className="outer-box">
              <Timeline />
            </div>
          <Album />
          <Video />
        </body>
      </div>
    </>
  );
};

export default IndexPage;
