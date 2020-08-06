import React from "react";
import AnimationHelpers from "./AnimationHelpers";
import Hover from "./Hover";
import Tap from "./Tap";
import Pan from "./Pan";
import Drag from "./Drag/Drag";

const Gestures = () => {
  return (
    <>
      <section className="section">
        <h2>Gestures</h2>
        <p>
          Framer motion provides some expanded event listeners on react
          components
        </p>
      </section>
      <hr />
      <AnimationHelpers />
      <hr />
      <Hover />
      <hr />
      <Tap />
      <hr />
      <Pan />
      <hr />
      <Drag />
    </>
  );
};

export default Gestures;
