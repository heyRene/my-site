import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="https://www.instagram.com/renaaataata?igsh=ZXFsZXljNzI4NzZj&utm_source=qr" target="_blank" rel="noopener noreferrer">
              @renaaataata
              
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="https://t.me/renatagftl">
              @renatagftl
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="tel:+79613758798">
              +7 927 675 74 71
            </a>
          </li>
          <li className={styles.item}>
            <span className={styles.text}>г. Москва</span>
          </li>
        </ul>
    </footer>
  );
};

export default Footer;