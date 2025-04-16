'use client';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>StockSmart</div>
      <div className={styles.authButtons}>
        <Link href="/login" className={styles.btnOutline}>Sign In</Link>
        <Link href="/signup" className={styles.btn}>Sign Up</Link>
      </div>
    </nav>
  );
}
