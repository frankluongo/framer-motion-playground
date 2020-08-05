import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import styles from "./SharedLayoutAnimations.module.css";

const items = [0, 1, 2];

const SharedLayoutAnimations = () => {
  return (
    <section className="section">
      <h3>Shared Layout Animations</h3>
      <div className="sub-section">
        <AnimateSharedLayout>
          <motion.ul
            layout
            initial={{ borderRadius: 25 }}
            className={styles.ul}
          >
            {items.map((item) => (
              <ExItem key={item} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </div>
    </section>
  );
};

const ExItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      className={styles.li}
    >
      <motion.div className={styles.avatar} layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
};

const Content = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.row} />
      <div className={styles.row} />
      <div className={styles.row} />
    </motion.div>
  );
};

export default SharedLayoutAnimations;
