import { useState } from "react";
import "./App.css";
import { babyNames } from "./assets/data";

let acceptedNames = [];

function NameCard() {
  const rand = () => Math.floor(Math.random() * babyNames.length);
  let [babyNameIndex, setBabyNameIndex] = useState(rand());
  let [toRotate, setToRotate] = useState("uwuntu");
  let [isShowingFront, setIsShowingFront] = useState(true);

  const deleteName = (idx: number) => {
    let lastIdx = babyNames.length - 1;
    [babyNames[idx], babyNames[lastIdx]] = [babyNames[lastIdx], babyNames[idx]];
    babyNames.pop();
  };

  const flipCard = () => {
    setToRotate(isShowingFront ? "card--back" : "card--front");
    setIsShowingFront(!isShowingFront);
  };

  return (
    <div className={"card " + toRotate}>
      <div className="frontSide">
        <div className="name">{babyNames[babyNameIndex].name}</div>
        <div className="cardButtons">
          <button
            onClick={() => {
              deleteName(babyNameIndex);
              setBabyNameIndex(rand());
            }}
          >
            Reject
          </button>
          <button onClick={() => setBabyNameIndex(rand())}>Maybe</button>
          <button
            onClick={() => {
              acceptedNames.push(babyNames[babyNameIndex]);
              deleteName(babyNameIndex);
              setBabyNameIndex(rand());
            }}
          >
            Accept
          </button>
        </div>
      </div>
      <div className="backSide">
        <p className="content">{babyNames[babyNameIndex].etimology}</p>
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
