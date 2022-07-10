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
    desc: `Here we have the originators of the Mimo asteroid cloud hitting on the WAD planet. Basil -the convincing rock- kicked off the first interplanetary flight. Please don't confound our Basil with the one from Fawlty Towers although our one is also funny. Our very young 22 year old instructor Abed was the second one to fire up rockets.`,
    photo_url:
      "./originators.jpeg",
    order_id: 2,
  },
  {
    caption: "Basil Our Cook",
    desc: "Basil was not only the originator of this event but offered to be our cook for the first evening. And no, we didn't have common Hamburgers with fries and ketchup. No, we had something very spectacular. In this video Basil explains the story of our first dish: believe it or not we had frozen salmon with olive oil and it was delicious and refreshing to be honest.",
    photo_url:
      "./BasilCookSnapshot.png",
    order_id: 3,
  },
  {
    caption: "And now the main dish",
    desc: "But the frozen fish wasn't enough jaw-dropping stuff: we also had the opportunity to taste this wonderful 'sous vide' meat. We were all flabbergasted to learn that Basil brought all of this equipment to Berlin to cook this meat for all of us just for that first evening. Thank you very much for that Basil!",
    photo_url:
      "./sousVideMeat.jpeg",
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
          
        </main>
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
