import { useState } from "react";
import "./App.css";
import { babyNames } from "./assets/data";

function NameCard() {
  const rand = () => babyNames[Math.floor(Math.random() * babyNames.length)];
  let [babyName, setName] = useState(rand());
  let [toRotate, setToRotate] = useState("uwuntu");
  let [isShowingFront, setIsShowingFront] = useState(true);

  const flipCard = () => {
    setToRotate(isShowingFront ? "card--back" : "card--front");
    setIsShowingFront(!isShowingFront);
  };

  return (
    <div className={"card " + toRotate}>
      <div className="frontSide">
        <div className="name">{babyName.name}</div>
        <div className="cardButtons">
          <button onClick={() => setName(rand())}>Reject</button>
          <button onClick={() => setName(rand())}>Maybe</button>
          <button onClick={() => setName(rand())}>Accept</button>
        </div>
      </div>
      <div className="backSide">
        <p className="content">{babyName.etimology}</p>
      </div>
      <div className="cornerIndicator" onClick={() => flipCard()} />
    </div>
  );
}

function App() {
  return (
    <>
      <NameCard />
    </>
  );
}

export default App;
