import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./ScaleCorrection.module.css";

const ScaleCorrection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <section className="section">
      <h4>Scale Correction</h4>
      <p>
        To prevent the visual distortion of children, add the{" "}
        <code>layout</code> property to child element(s)
      </p>
      <div className="sub-section">
        <p>With correction</p>
        <motion.div
          layout
          data-isOpen={isOpen}
          initial={{ borderRadius: 50 }}
          className={styles.parent}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div layout className={styles.child} />
        </motion.div>
      </div>
      <div className="sub-section">
        <p>Without correction</p>
        <motion.div
          layout
          data-isOpen={isOpen2}
          initial={{ borderRadius: 50 }}
          className={styles.parent}
          onClick={() => setIsOpen2(!isOpen2)}
        >
          <motion.div className={styles.child} />
        </motion.div>
      </div>
      <div className="sub-section">
        <p>
          Transforms can also distort <code>boxShadow</code> and{" "}
          <code>borderRadius</code>. The motion component will automatically
          correct this distortion on both props, as long as they're set as
          motion values.
        </p>
        <p>
          If you're not animating these values, the easiest way to do this is to
          set them via <code>initial</code>.
        </p>
      </div>
      <div className="sub-section">
        <h4>Customising layout animations</h4>
        <p>
          Layout animations can be customised using the transition property.
        </p>
        <code>{"<motion.div layout transition={{ duration: 0.3 }} />"}</code>
        <p>
          Each axis can be animated seperately by naming <code>layoutX</code>{" "}
          and <code>layoutY</code>
          transitions.
        </p>
        <p>
          Currently, <code>layoutX</code> and <code>layoutY</code> will animate
          the position and size of an axis simultaneously. In a future release
          it'll be possible to configure these separately.
        </p>
      </div>
    </section>
  );
};

export default ScaleCorrection;
