import React, { useRef } from 'react';

import './style.scss';


const Sphere = () => {

  const myCanvasContainerRef = useRef();
  const myCanvasRef = useRef();

  React.useEffect(() => {

    const TagCanvas = window.TagCanvas;
    const options = {
      activeCursor: "grab",
      animTiming: "Smooth",
      depth: 1.1,
      // dragControl: true,
      fadeIn: 3000,
      freezeActive: true,
      freezeDecel: true,
      // decel: 0.3,
      hideTags: true,
      // initial: [0.3, -0.1],
      maxSpeed: 0.03,
      minBrightness: 0,
      noSelect: true,
      // outlineColour: "#FE0853",
      // outlineColour: "#FE0853",
      outlineThickness: 0.5,
      pinchZoom: false,
      shape: "sphere",
      shuffleTags: true,
      reverse: true,
      textColour: "#ffffff",
      // textFont: null,
      textHeight: 20,
      wheelZoom: false,
      // zoomMax: 1.2,
      // zoomMin: 0.8,
      zoom: 0.9,
    };
    try {
      TagCanvas.Start('myCanvas', 'tags', options);
    } catch (error) {
      console.log('Canvas error: ', error)
    }


  }, [])

  return (
    <>
      <div ref={myCanvasContainerRef} id="myCanvasContainer">
        <canvas width="600" height="600" id="myCanvas" ref={myCanvasRef}></canvas>
      </div>
      <div id="tags">
        <a href="#">CSS</a>
        <a href="#">HTML</a>
        <a href="#">Javascript</a>
        <a href="#">GSAP</a>
        <a href="#">Node</a>
        <a href="#">Express</a>
        <a href="#">React</a>
        <a href="#">Linux</a>
        <a href="#">Googling</a>
        <a href="#">Git</a>
        <a href="#">GatsbyJS</a>
        <a href="#">Figma</a>
        <a href="#">jQuery</a>
        <a href="#">Webpack</a>
      </div>
    </>
  )
};

export default Sphere;
