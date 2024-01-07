import React from 'react';
import styles from './Choose.module.css'
import {IoIosCheckmarkCircle} from "react-icons/io";
import {motion} from "framer-motion";

function Choose() {
    let choose = [
        {
            title: 'Consectetur Adipisicing,',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.'
        },
        {
            title: 'Consectetur Adipisicing,',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.'
        },
        {
            title: 'Consectetur Adipisicing,',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.'
        },
        {
            title: 'Consectetur Adipisicing,',
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.'
        },
    ]
    return (
        <div className={styles.choose}>
            <div className="container">
                <div className={styles.inner}>
                    <motion.div
                        initial={{opacity: 0, y: '-100%'}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        className={styles.text}>
                        <h2>Why Choose Enlight School</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus
                            quos quibusdam soluta at.</p>
                    </motion.div>
                    <div className={styles.cards}>
                        {choose.map((el, index) => {
                            return (
                                <motion.div
                                    initial={{opacity: 0, y: -10}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, delay: index * 0.1}}
                                    className={styles.card}>
                                    <div className={styles.card__icon}>
                                        <IoIosCheckmarkCircle/>
                                    </div>
                                    <div className={styles.card__content}>
                                        <h3>
                                            {el.title}
                                        </h3>
                                        <p>
                                            {el.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;