import React from "react";
import { motion } from "framer-motion";
import AnimationControls from "./AnimationControls";
import LayoutAnimations from "./Animation/LayoutAnimations";
import SharedLayoutAnimations from "./Animation/SharedLayoutAnimations";

const simpleVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const listVarts = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const itemVarts = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const staggerListVars = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const dynamicVarts = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
};

const items = ["item 1", "item 2", "item 3"];

const Motion = () => {
  return (
    <>
      <section className="section">
        <h2>Animation</h2>
      </section>
      <hr />
      <section className="section">
        <h3>Target Object</h3>
      </section>
      <section className="section">
        <h4>Transitions</h4>
        <div className="sub-section">
          <motion.div animate={{ x: 100, scale: 1.1 }}>
            I translate x and scale, so I use a spring
          </motion.div>
        </div>
        <div className="sub-section">
          <motion.div animate={{ opacity: 1, color: "#555" }}>
            I translate opacity and color, so I use a tween
          </motion.div>
        </div>
        <div className="sub-section">
          <motion.div
            animate={{ opacity: 1, x: 100 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            My animations are set with the <code>transition</code> prop
          </motion.div>
        </div>
      </section>
      <section className="section">
        <h4>Mount animations</h4>
        <motion.div initial={false} animate={{ x: 100 }}>
          By setting <code>initial</code> to <code>false</code>, I've disabled
          the mount animation. So this element just jumps in
        </motion.div>
      </section>
      <section className="section">
        <h4>Keyframes</h4>
        <div className="sub-section">
          <motion.div
            animate={{ x: [0, 50, 100] }}
            transition={{ duration: 1, times: [0, 0.1, 1] }}
          >
            I'm animated using keyframes. In the <code>transition</code> prop,{" "}
            <code>duration</code> is the length of time, and then{" "}
            <code>times</code> refers to where the animation should be at a
            given point from 0 to 1
          </motion.div>
        </div>
        <div className="sub-section">
          <motion.div
            animate={{ x: [null, 50, 100], scale: [null, 1, 1.1] }}
            transition={{ duration: 1, times: [0, 0.1, 1] }}
            style={{ transformOrigin: "left" }}
          >
            This keyframe animation is using <code>null</code>
          </motion.div>
        </div>
      </section>
      <hr />
      <section className="section">
        <h3>Variants</h3>
        <div className="sub-section">
          <motion.div
            variants={simpleVariants}
            initial="hidden"
            animate="visible"
          >
            Here's a simple variants example
          </motion.div>
        </div>
      </section>
      <section className="section">
        <h4>Propagation</h4>
        <p>
          Animations will flow down to children when they're given their own
          variants
        </p>
        <div className="sub-section">
          <motion.ul initial="hidden" animate="visible" variants={listVarts}>
            <motion.li variants={itemVarts}>Item 1</motion.li>
            <motion.li variants={itemVarts}>Item 2</motion.li>
            <motion.li variants={itemVarts}>Item 3</motion.li>
          </motion.ul>
        </div>
      </section>
      <section className="section">
        <h4>Orchestration</h4>
        <p>
          Variants provide access to extra props like <code>when</code>,{" "}
          <code>delayChildren</code>, and <code>staggerChildren</code>. They
          allow for more control over animated children
        </p>
        <div className="sub-section">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={staggerListVars}
          >
            <motion.li variants={itemVarts}>Item 1</motion.li>
            <motion.li variants={itemVarts}>Item 2</motion.li>
            <motion.li variants={itemVarts}>Item 3</motion.li>
          </motion.ul>
        </div>
      </section>
      <section className="section">
        <h4>Dynamic Variants</h4>
        <div className="sub-section">
          <ul>
            {items.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                animate="visible"
                initial="hidden"
                variants={dynamicVarts}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      <hr />
      <AnimationControls />
      <hr />
      <LayoutAnimations />
      <hr />
      <SharedLayoutAnimations />
    </>
  );
};

export default Motion;
