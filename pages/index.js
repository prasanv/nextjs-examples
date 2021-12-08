import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Data Fetching Examples</p>
      <p>CSR - Client Side Rendering</p>
      <p>SSR - Server Side Rendering</p>
      <p>SSG - Static Site Generation</p>
      <p>ISR - Incremental Site Generation</p>
    </div>
  );
}
