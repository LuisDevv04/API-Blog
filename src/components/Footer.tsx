import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <p>
          Built with <span className={styles.heart}>♥</span> using React & Vite
        </p>
      </div>
    </footer>
  );
}

export default Footer;
