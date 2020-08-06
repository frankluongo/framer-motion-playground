import React from "react";
import { motion } from "framer-motion";

const AnimationHelpers = () => {
  return (
    <section className="section">
      <h3>Animation Helpers</h3>
      <p>
        Framer motion provides two helpers, <code>whileHover</code> and{" "}
        <code>whileTap</code>
      </p>
      <div className="sub-section">
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          Hover and click me!
        </motion.button>
      </div>
    </section>
  );
};

export default AnimationHelpers;
