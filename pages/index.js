import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log("1. Before useHook");
  useEffect(() => {
    console.log("2. Inside useHook");
  }, []);
  console.log("3. After useHook");
  return <div className={styles.container}>CRS-Example</div>;
}
