import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import styles from "./LayoutId.module.css";

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const LayoutId = () => {
  const [selected, setSelected] = useState(colors[0]);
  return (
    <>
      <AnimateSharedLayout>
        <ul className={styles.ul}>
          {colors.map((color) => (
            <Item
              key={color}
              color={color}
              isSelected={selected === color}
              onClick={() => setSelected(color)}
            />
          ))}
        </ul>
      </AnimateSharedLayout>
    </>
  );
};

const Item = ({ color, isSelected, onClick }) => {
  return (
    <li
      className={styles.item}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {isSelected && (
        <motion.div
          layoutId="outline"
          className={styles.outline}
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  );
};

export default LayoutId;
