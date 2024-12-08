import { useState } from "react";
import { BabyName } from "../assets/data";
import { motion } from "motion/react";
import { NoIcon } from "./NoIcon";
import { YesIcon } from "./YesIcon";
import { MaybeIcon } from "./MaybeIcon";

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
    <motion.div className="card" animate={facing} exit={choice} variants={card}>
      <div className="frontSide">
        <div className="name">{name.name}</div>
        <div className="cardButtons">
          <motion.button
            className="cardButton"
            onClick={() => {
              setChoice("no");
              no();
            }}
            initial={{
              scale: 1,
              opacity: 0.5,
              color: "black",
            }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              color: "red",
              transition: {},
            }}
            whileTap={{
              scale: 0.9,
              opacity: 1,
              color: "red",
            }}
          >
            <NoIcon className="buttonIcon" />
          </motion.button>
          <motion.button
            className="cardButton"
            onClick={() => {
              setChoice("maybe");
              maybe();
            }}
            initial={{
              scale: 1,
              opacity: 0.5,
              color: "black",
            }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              color: "red",
              transition: {},
            }}
            whileTap={{
              scale: 0.9,
              opacity: 1,
              color: "red",
            }}
          >
            <MaybeIcon className="buttonIcon" />
          </motion.button>
          <motion.button
            className="cardButton"
            onClick={() => {
              setChoice("yes");
              yes();
            }}
            initial={{
              scale: 1,
              opacity: 0.5,
              color: "black",
            }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              color: "green",
              transition: {},
            }}
            whileTap={{
              scale: 0.9,
              opacity: 1,
              color: "green",
            }}
          >
            <YesIcon className="buttonIcon" />
          </motion.button>
        </div>
      </div>
      <div className="backSide">
        <p className="content">{name.etimology}</p>
      </div>
      <div className="cornerIndicator" onClick={() => toggleFacing()} />
    </motion.div>
  );
}
