import styles from "./Arrow.module.css";

export function Arrow() {
  return (
    <svg
      version="1.1"
      width="120"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 80"
      className={styles.arrow}
    >
      <polyline
        points="20 20 60 60 100 20"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}
