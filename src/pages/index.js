import * as React from "react";
import "./layout.css";
import { Navbar } from "./Navbar";
import Video from "./Video";
import Album from "./Album";
import Intro from "./Intro";




const exp = [
  {
    caption: "dinner",
    desc: "Basil cooked for the the tribe",
    photo_url:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80",
    order_id: 1,
  },
  {
    caption: "Irish Pub",
    desc: "Irish Pub",
    photo_url:
      "https://images.unsplash.com/photo-1656577865296-67f388c6ed0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
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
                        
                  <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique...</p>
                    
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
