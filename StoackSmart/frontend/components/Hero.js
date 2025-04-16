import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to StockSmart</h1>
      <p>Your personalized stock market assistant with real-time data and memory.</p>
    </section>
  );
}
