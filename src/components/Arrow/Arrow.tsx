import { motion, useScroll } from "motion/react";
import styles from "./Arrow.module.css";

const variants = {
  start: {},
  other: {},
};

export function Arrow() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.svg
      version="1.1"
      width="120"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 80"
      className={styles.arrow}
      variants={variants}
    >
      <polyline
        points="20 20 60 60 100 20"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
