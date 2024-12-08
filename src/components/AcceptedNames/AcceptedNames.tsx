import { BabyName } from "../../assets/data";
import styles from "./AcceptedNames.module.css";

export function AcceptedNames({ names: namesx }: { names: BabyName[] }) {
  const names = namesx.map((name) => name.name).sort();
  return (
    <>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Accepted Names
      </h2>
      <ul className={styles.show}>
        {names.map((name) => (
          <li key={name}>
            <button
              className={"but " + styles.acceptedName}
              onClick={async () => {
                const shareData = {
                  text: name,
                };
                try {
                  await navigator.share(shareData);
                } catch (err) {
                  navigator.clipboard
                    .writeText(name)
                    .then(() => {
                      alert("Name succesfully copied to clipbard!");
                    })
                    .catch(() => {
                      alert("Error copying name to clipbard.");
                    });
                }
              }}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
