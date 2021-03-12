import React, { useState, useEffect, useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.moxCanceFullscreen) {
      document.moxCanceFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

export const App = () => {
  const [fullCheck, setFullCheck] = useState(false);
  const onFullS = (isFull) => {
    console.log(isFull ? "We are Full" : "We are small");
    setFullCheck(isFull);
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://akns-images.eonline.com/eol_images/Entire_Site/20201022/rs_1200x1200-201122201055-1200-bts-ama-awards-mp.jpg?fit=around%7C1080:1080&output-quality=90&crop=300:200;center,80px" />
        {fullCheck && <button onClick={exitFull}>Exit Full Screen</button>}
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};
