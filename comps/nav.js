import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav>
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
      </nav>
      {children}
    </div>
  );
};
export default Nav;
