import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const items = ["item 1", "item 2", "item 3"];

const Sequencing = () => {
  const menuCtrls = useAnimation();
  const itemCtrls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await menuCtrls.start({ x: 0 });
      return await itemCtrls.start({ opacity: 1 });
    };
    sequence();
  }, [menuCtrls, itemCtrls]);

  return (
    <section className="section">
      <h4>Sequencing</h4>
      <motion.ul
        animate={menuCtrls}
        initial={{ x: "100%" }}
        style={{ border: "1px solid #aaa", padding: "3rem" }}
      >
        {items.map((item, i) => (
          <motion.li key={i} animate={itemCtrls} initial={{ opacity: 0 }}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Sequencing;
