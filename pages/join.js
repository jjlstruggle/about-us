import styles from "../styles/join.module.css";

export default function Join({ vh }) {
  return (
    <div className={styles.box}>
      <div
        className={styles.h1 + " font2"}
        style={{ marginTop: 48 * vh, marginBottom: 48 * vh }}
      >
        <span />
        <div>萌新指南</div>
      </div>
    </div>
  );
}
