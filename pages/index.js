import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Data Fetching Example</p>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/csr-example">
            <a>CSR Example</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr-example">
            <a>SSR Example</a>
          </Link>
        </li>
        <li>
          <Link href="/ssg-example">
            <a>SSG Example</a>
          </Link>
        </li>
        <li>
          <Link href="/isr-example">
            <a>ISR Example</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
