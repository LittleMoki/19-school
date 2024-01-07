import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-scroll'

function Navbar() {
    const navbar = [
        {link: '#home', title: 'Home'},
        {link: '#events', title: 'Events'},
        {link: '#courses', title: 'Courses'},
        {link: '#teachers', title: 'Teachers'},
        {link: '#contact', title: 'Contact'},
    ];

    const [menu, setMenu] = useState(false);

    const menuVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {opacity: 1, y: 0},
    };

    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <a href="#!">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <ul className={styles.navbar__list}>
                        {navbar.map((el, index) => (
                            <li className={styles.navbar__item} key={index}>
                                <a className={styles.navbar__link} href={el.link}>
                                    {el.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.burger} onClick={() => setMenu(!menu)}>
                        <div className={styles.burger__item}></div>
                        <div className={styles.burger__item}></div>
                        <div className={styles.burger__item}></div>
                    </div>
                    <AnimatePresence>
                        {menu && (
                            <motion.ul
                                className={styles.burger__list}
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {navbar.map((el, index) => (
                                    <motion.li
                                        key={index}
                                        className={styles.burger__list_item}
                                        initial={{opacity: 0, y: -10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3, delay: index * 0.1}}
                                    >
                                        <a className={styles.burger__list_link} href={el.link}>
                                            {el.title}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
