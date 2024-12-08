import { useState } from "react";
import { BabyName } from "../../assets/data";
import { motion } from "motion/react";
import { NoButton } from "../NoButton/NoButton";
import { MaybeButton } from "../MaybeButton/MaybeButton";
import { YesButton } from "../YesButton/YesButton";
import styles from "./NameCard.module.css";

export interface NameCardProps {
  name: BabyName;
  yes: () => void;
  no: () => void;
  maybe: () => void;
}

const card = {
  draw: {
    transform: ["translateY(-200vh)", "translateY(0)"],
    transition: {
      duration: 0.4,
      times: [0, 1],
      ease: "easeOut",
      delay: 0.1,
    },
  },
  front: {
    transform: [
      "rotateY(180deg)",
      "rotateY(90deg) rotateZ(10deg) scale(1.1)",
      "rotateY(0deg)",
    ],
    transition: {
      duration: 0.4,
      times: [0, 0.5, 1],
      ease: "easeOut",
    },
  },
  back: {
    transform: [
      "rotateY(0deg)",
      "rotateY(90deg) rotateZ(-10deg) scale(1.1)",
      "rotateY(180deg)",
    ],
    transition: {
      duration: 0.4,
      times: [0, 0.5, 1],
      ease: "easeOut",
    },
  },
  yes: {
    transform: [
      "translateX(0)",
      "translateX(-5vw) rotateZ(-10deg)",
      "translateX(80vw) rotateZ(20deg)",
    ],
    transition: {
      duration: 0.4,
      times: [0, 0.3, 1],
      ease: ["easeOut", "easeIn"],
    },
  },
  no: {
    transform: [
      "translateX(0)",
      "translateX(5vw) rotateZ(10deg)",
      "translateX(-80vw) rotateZ(-20deg)",
    ],
    transition: {
      duration: 0.4,
      times: [0, 0.3, 1],
      ease: ["easeOut", "easeIn"],
    },
  },
  maybe: {
    transform: ["translateY(0)", "translateY(-80vh)"],
    transition: {
      duration: 0.4,
      times: [0, 1],
      ease: "easeOut",
    },
  },
};

export function NameCard({ name, yes, no, maybe }: NameCardProps) {
  const [facing, setFacing] = useState("draw");
  const [choice, setChoice] = useState("maybe");

  const toggleFacing = () => {
    setFacing((prev) => (prev == "back" ? "front" : "back"));
  };

  return (
    <motion.div
      className={styles.card}
      animate={facing}
      exit={choice}
      variants={card}
    >
      <div className={styles.frontSide}>
        <div className={styles.name}>{name.name}</div>
        <div className={styles.cardButtons}>
          <NoButton
            onClick={() => {
              setChoice("no");
              no();
            }}
          />
          <MaybeButton
            onClick={() => {
              setChoice("maybe");
              maybe();
            }}
          />
          <YesButton
            onClick={() => {
              setChoice("yes");
              yes();
            }}
          />
        </div>
      </div>
      <div className={styles.backSide}>
        <p className={styles.content}>{name.etimology}</p>
      </div>
      <div className={styles.cornerIndicator} onClick={() => toggleFacing()} />
    </motion.div>
  );
}
