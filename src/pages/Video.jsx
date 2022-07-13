import React from "react"
const Video = ({ videoSrcURL, videoTitle}) => (
  <div className="video">
    <iframe
      // src={videoSrcURL}
      src='https://res.cloudinary.com/pingo-mimo/video/upload/v1657643713/PinGo/Dinner-Basil-Mimo-Berlin-firstdish.mov'
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video