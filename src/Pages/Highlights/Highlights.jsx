import React, {useEffect, useState} from 'react';
import styles from './Highlights.module.css';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

function Highlights() {
    const [activeIndex, setActiveIndex] = useState(null);

    function buttonHandler(index) {
        document.querySelectorAll(`.${styles.buttons} li`).forEach((item, i) => {
            item.classList.remove(styles.active);
        });

        setActiveIndex(index);
    }

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({opacity: 1});
        }
    }, [controls, inView]);


    return (
        <motion.div
            id='events'
            initial={{opacity: 0}}
            animate={controls}
            ref={ref}
            className={styles.highlights}>
            <div className="container">
                <div className={styles.inner}>
                    <motion.h2
                        initial={{opacity: 0, y: '-100%'}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >Highlights
                    </motion.h2>
                    <div className={styles.buttons__wrapper}>
                        <ul className={styles.buttons}>
                            <li>
                                <a
                                    className={activeIndex === 0 ? styles.active : ''}
                                    onClick={() => buttonHandler(0)}
                                    href="#!">Featured News</a>
                            </li>
                            <li>
                                <a
                                    className={activeIndex === 1 ? styles.active : ''}
                                    onClick={() => buttonHandler(1)}
                                    href="#!">Upcoming Events</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Highlights;
