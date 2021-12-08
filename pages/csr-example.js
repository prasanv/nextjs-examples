import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function CSRExample() {
  const [dateTime, setDateTime] = useState(null);
  const d = new Date();
  const componentTime = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;

  console.log("1. Before useHook");

  const fetchData = async () => {
    const res = await fetch("https://worldtimeapi.org/api/ip");
    const data = await res.json();
    setDateTime(data.datetime);
  };

  useEffect(() => {
    console.log("2. Inside useHook");
    fetchData();
  }, []);

  console.log("3. After useHook");

  return (
    <div className={styles.container}>
      <p>CRS-Example</p>
      <p>dateTime from componentTime = {componentTime}</p>
      <p>dateTime from useEffect fetch = {dateTime}</p>
    </div>
  );
}
