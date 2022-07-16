
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const [activeNavBar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)

        return () => {
            window.removeEventListener("scroll", changeBackground)
        }
    })

 return (
     <header className={clsx(styles.headerContainer, {
         [styles.active] : activeNavBar
     })}>
         <a href="#home" className={styles.headerLink}>
             Home
         </a>
         <a href="#projects" className={styles.headerLink}>
             Projects
         </a>
     </header>
 )
}

export default Header;