import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Sequencing from "./Sequencing";
import DynamicStart from "./DynamicStart";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const AnimationControls = () => {
  const controls = useAnimation();
  const ctrlsWVarts = useAnimation();

  controls.start({
    x: 100,
    transition: {
      duration: 1,
    },
  });

  useEffect(() => {
    ctrlsWVarts.set("hidden");
    ctrlsWVarts.start("visible");
  }, [ctrlsWVarts]);

  return (
    <>
      <section className="section">
        <h3>Animation Controls</h3>
        <div className="sub-section">
          <motion.div animate={controls}>
            This has been animated using the <code>useAnimation</code> hook
          </motion.div>
        </div>
        <h4>Starting an animation</h4>
        <div className="sub-section">
          <motion.div animate={ctrlsWVarts} variants={variants}>
            This has been animated using the <code>useAnimation</code> hook with{" "}
            <code>variants</code>
          </motion.div>
        </div>
      </section>
      <Sequencing />
      <DynamicStart />
    </>
  );
};

export default AnimationControls;
