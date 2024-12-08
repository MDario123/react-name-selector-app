import { BabyName } from "../assets/data";

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
      <ul className="show">
        {names.map((name) => (
          <li
            key={name}
            className="acceptedName"
            onClick={async () => {
              const shareData = {
                title: "UWU",
                text: name,
                url: "uwu.com",
              };
              try {
                await navigator.share(shareData);
              } catch (err) {
                alert(err);
              }
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
