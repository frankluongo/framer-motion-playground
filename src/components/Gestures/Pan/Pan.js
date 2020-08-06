import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Pan = () => {
  const [panInfo, setPanInfo] = useState({
    point: {
      x: 0,
      y: 0,
    },
  });
  return (
    <section className="section">
      <h3>Pan</h3>
      <p>
        This gesture recognizes when a pointer presses down on a component and
        moves it more than 3 pixels
      </p>
      <p>
        <code>onPan</code> runs during the pan
      </p>
      <p>
        <code>onPanStart</code> runs when the pan starts
      </p>
      <p>
        <code>onPanEnd</code> runs when the pan ends
      </p>
      <div className="sub-section">
        <motion.div onPan={(e, info) => setPanInfo(info)}>
          PAN ME. Pan info: x: {panInfo.point.x}, y: {panInfo.point.y}
        </motion.div>
      </div>
    </section>
  );
};

export default Pan;
