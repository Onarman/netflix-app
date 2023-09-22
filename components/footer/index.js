import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made by Onarman
      <Link href="https://twitter.com/codamann" target="_blank">Omer NARMANLI</Link>
    </footer>
  );
}

export default Footer;
