import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

function Navbar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          alt="facebook"
          width={24}
          height={24}
        ></Image>
        <Image
          src="/instagram.png"
          alt="facebook"
          width={24}
          height={24}
        ></Image>{" "}
        <Image src="/tiktok.png" alt="facebook" width={24} height={24}></Image>{" "}
        <Image src="/youtube.png" alt="facebook" width={24} height={24}></Image>
      </div>
      <div className={styles.logo}>Anh Dev</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        {/* <Link href="/">Home</Link> */}
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
