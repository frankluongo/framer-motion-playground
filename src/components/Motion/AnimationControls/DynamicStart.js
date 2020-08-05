import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const items = ["item 1", "item 2", "item 3"];

const DynamicStart = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 },
    }));
  }, [controls]);

  return (
    <section className="section">
      <h4>DynamicStart</h4>
      <ul>
        {items.map((item, i) => (
          <motion.li
            key={i}
            custom={i}
            animate={controls}
            initial={{ opacity: 0, x: 100 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default DynamicStart;
