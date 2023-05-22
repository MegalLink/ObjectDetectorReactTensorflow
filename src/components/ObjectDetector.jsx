// Import dependencies
import React, { useRef, useEffect,useState } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import { Alert } from "@mui/material";

export function ObjectDetector({objectToMatch}) {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [matched,setMached]= useState(false);

  let interval;

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("model loaded");
    //  Loop and detect hands
    interval=setInterval(() => {
      detect(net);
    }, 1000);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      handleDetection(obj, ctx)
    }
  };

  const handleDetection = (detections, ctx) => {
    // Loop through each prediction
    detections.forEach((prediction) => {
      // Extract boxes and classes
      const [x, y] = prediction["bbox"];
      const text = prediction["class"];
  
      const match=text.trim() === objectToMatch
      console.log("text", text);
      console.log("matching",matched)
      if (match) {
        console.log("text", text);
        console.log("Matched",match);
        setMached(true)
  
        // Set styling
        const color = Math.floor(Math.random() * 16777215).toString(16);
        ctx.strokeStyle = "#" + color;
        ctx.font = "50px Arial";
  
        // Draw rectangles and text
        ctx.fillStyle = "#" + color;
        ctx.fillText(text, x, y);
        clearInterval(interval)
      }
    });
  };

  return (
    <div className="App">
      <header className="">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            textAlign: "center",
            zindex: -1,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position:"absolute",
            textAlign: "center",
            zindex: -2,
          }}
        />
      </header>
      <div>
       {matched??<Alert severity="success">Detected successfully</Alert>}
        <button onClick={() => runCoco()}>Start Detection</button>
        <button onClick={() => clearInterval(interval)}>Stop Detection</button>
      </div>
    </div>
  );
}

