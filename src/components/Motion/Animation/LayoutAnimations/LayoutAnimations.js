import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./LayoutAnimations.module.css";
import ScaleCorrection from "./ScaleCorrection";

const LayoutAnimations = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <section className="section">
        <h3>Layout Animations</h3>
        <p>
          Any <code>motion</code> component can automatically animate between
          different layouts that occur just by setting the <code>layout</code>{" "}
          prop to <code>true</code>
        </p>
        <div className="sub-section">
          <button onClick={() => setIsOn(!isOn)}>Toggle Layout State</button>
        </div>
        <div className="sub-section">
          <div className={styles.wrapper} data-on={isOn}>
            <motion.div layout transition={spring}>
              Watch me animate yo
            </motion.div>
          </div>
        </div>
      </section>
      <ScaleCorrection />
    </>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default LayoutAnimations;
