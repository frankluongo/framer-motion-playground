import React from "react";
import { motion } from "framer-motion";
import DragControls from "./DragControls/DragControls";

const Drag = () => {
  return (
    <section className="section">
      <h3>Drag</h3>
      <p>
        Drag is similar to <code>pan</code>, except that it takes the component
        with you as you move
      </p>
      <div className="sub-section">
        <motion.div drag>Drag me anywhere</motion.div>
      </div>
      <div className="sub-section">
        <h4>Drag Directions</h4>
        <motion.div drag="x">Drag me left and right</motion.div>
      </div>
      <div className="sub-section">
        <h4>Drag Constraints</h4>
        <motion.div drag="x" dragConstraints={{ left: 0, right: 300 }}>
          Drag me left and right and watch me bounce back
        </motion.div>
      </div>
      <div className="sub-section">
        <h4>Drag Elastic</h4>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 300 }}
          dragElastic={0.8}
        >
          Drag me left and right and watch how I bounce back
        </motion.div>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 300 }}
          dragElastic={0}
        >
          Drag me left and right and watch how I bounce back, jk I don't lol
        </motion.div>
      </div>
      <div className="sub-section">
        <h4>Drag Momentum</h4>
        <p>Apply or don't apply momentum while dragging</p>
        <motion.div drag="x" dragConstraints={{ left: 0, right: 300 }}>
          Drag me left and right
        </motion.div>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 300 }}
          dragMomentum={false}
        >
          Drag me left and right
        </motion.div>
      </div>
      <div className="sub-section">
        <h4>Drag Transition</h4>
        <p>Changing the transition fr when you let go of the drag</p>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 300 }}
          dragTransition={{ bounceDamping: 10, bounceStiffness: 500 }}
        >
          Drag me left and right
        </motion.div>
      </div>
      <div className="sub-section">
        <h4>Drag Propagation</h4>
        <p>Allows drag gesture propagation down to children elements</p>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 300 }}
          dragTransition={{ bounceDamping: 10, bounceStiffness: 500 }}
        >
          Drag me left and right
          <motion.div drag>NOW DRAG MEEE</motion.div>
        </motion.div>
      </div>
      <div className="sub-section">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 300 }}
          dragTransition={{ bounceDamping: 10, bounceStiffness: 500 }}
          dragPropagation={true}
        >
          Drag me left and right
          <motion.div drag>NOW DRAG MEEE</motion.div>
        </motion.div>
      </div>
      <div className="sub-section">
        <h4>Drag Controls</h4>
        <p>
          This is useful for things like video scrubbing where the user is
          dragging one thing but it needs to affect another thing
        </p>
        <DragControls />
      </div>
    </section>
  );
};

export default Drag;
