import { useState } from "react";
import "./App.css";
import { babyNames } from "./assets/data";
import { NameCard, NameCardProps } from "./components/NameCard";
import { AnimatePresence } from "motion/react";

function Show() {
  return null;
}

function App() {
  let [availableNames, setAvailableNames] = useState(babyNames);
  let [acceptedNames, setAcceptedNames] = useState(babyNames);
  let [view, setView] = useState("");

  let card = <div>No more names available.</div>;
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
    <div className={"app " + view}>
      <div className="choose">
        <div className="cardSlot">
          <AnimatePresence>{card}</AnimatePresence>
        </div>
        <button
          className="viewChanger"
          onClick={() => setView(view == "show" ? "choose" : "show")}
        >
          See accepted
        </button>
      </div>
      <Show />
    </div>
  );
}

export default App;
