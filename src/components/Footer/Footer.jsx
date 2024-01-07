import React from 'react';
import styles from './Footer.module.css'
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {motion} from "framer-motion";

function Footer() {
    const links = [
        {link: '#home', title: 'Home'},
        {link: '#events', title: 'Events'},
        {link: '#courses', title: 'Courses'},
        {link: '#teachers', title: 'Teachers'},
        {link: '#contact', title: 'Contact'},
    ]
    return (
        <div className={styles.footer} id='contact'>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <div className={styles.about}>
                            <motion.h3
                                initial={{opacity: 0, y: '-100%'}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >About The School
                            </motion.h3>
                            <motion.p
                                initial={{opacity: 0, y: '-100%'}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident suscipit natus a
                                cupiditate ab minus illum quaerat maxime inventore Ea consequatur consectetur hic
                                provident dolor ab aliquam eveniet alias
                            </motion.p>
                            <motion.div
                                initial={{opacity: 0, y: '-100%'}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className={styles.socials}>
                                <a href="#!"><FaTwitter/></a>
                                <a href="#!"><FaFacebook/></a>
                                <a href="#!"><FaGithub/></a>
                                <a href="#!"><FaYoutube/></a>
                            </motion.div>
                        </div>
                        <ul className={styles.links}>
                            <motion.h3
                                initial={{opacity: 0, y: '-100%'}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >Links
                            </motion.h3>
                            {links.map((el, index) => {
                                return (
                                    <motion.li
                                        initial={{opacity: 0, y: -10}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.3, delay: index * 0.1}}
                                        key={index}><a href={el.link}>{el.title}</a></motion.li>
                                )
                            })}
                        </ul>
                        <motion.div
                            initial={{opacity: 0, y: '-100%'}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className={styles.contact}>
                            <h3>Contact Info</h3>
                            <p>Bukhara, 10126, Uzbekistan</p>
                            <p><a href="/cdn-cgi/l/email-protection">[email protected]</a></p>
                            <p> +123 456 7890</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;