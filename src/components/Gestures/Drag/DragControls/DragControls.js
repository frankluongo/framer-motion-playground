import React from "react";
import { useDragControls, motion } from "framer-motion";

import styles from "./DragControls.module.css";

const DragControls = () => {
  const dragControls = useDragControls();

  return (
    <>
      <div className={styles.controller} onMouseDown={startDrag}>
        Drag me
      </div>
      <motion.div
        className={styles.element}
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ left: 0, right: 300 }}
      />
    </>
  );

  function startDrag(e) {
    dragControls.start(e, { snapToCursor: true });
  }
};

export default DragControls;
