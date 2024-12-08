import { useState } from "react";
import "./App.css";
import { BabyName, babyNames } from "./assets/data";
import { NameCard, NameCardProps } from "./components/NameCard/NameCard";
import { AnimatePresence } from "motion/react";
import { AcceptedNames } from "./components/AcceptedNames/AcceptedNames";

export default function App() {
  let [availableNames, setAvailableNames] = useState(babyNames);
  let [acceptedNames, setAcceptedNames] = useState<BabyName[]>([]);

  let card = (
    <div
      style={{
        textAlign: "center",
        alignSelf: "center",
        fontSize: 22,
      }}
    >
      No more names available.
      <br />
      You can scroll down to see the names you accepted.
    </div>
  );
  if (availableNames.length > 0) {
    const name = availableNames[availableNames.length - 1];

    const no = () => setAvailableNames((prev) => [...prev.slice(0, -1)]);
    const yes = () => {
      setAcceptedNames((prev) => [...prev, name]);
      setAvailableNames((prev) => [...prev.slice(0, -1)]);
    };
    const maybe = () => {
      setAvailableNames((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        [prev[idx], prev[prev.length - 1]] = [prev[prev.length - 1], prev[idx]];
        return [...prev];
      });
    };

    let nameCardProps: NameCardProps = {
      name,
      no,
      yes,
      maybe,
    };
    card = <NameCard key={nameCardProps.name.name} {...nameCardProps} />;
  }

  return (
    <div className="app ">
      <div className="choose">
        <div className="cardSlot">
          <AnimatePresence>{card}</AnimatePresence>
        </div>
      </div>
      <AcceptedNames names={acceptedNames} />
    </div>
  );
}
