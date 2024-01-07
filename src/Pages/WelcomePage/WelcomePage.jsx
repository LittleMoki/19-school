import React, {useEffect,} from 'react';
import styles from './WelcomePage.module.css';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

function WelcomePage() {
    const videoId = 'LlCwHnp3kL4';
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
            initial={{opacity: 0}}
            animate={controls}
            ref={ref}
            className={styles.welcome_page}
        >
            <div className="container">
                <div className={styles.welcome_page__inner}>
                    <div className="row">
                        <div className="col-md-12 text-left">
                            <motion.h2
                                initial={{opacity: 0, y: '-100%'}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >Welcome to School of Excellence
                            </motion.h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.welcome_page__wrapper}>
                    <div className={styles.video__page}>
                        <motion.div
                            initial={{opacity: 0, y: '100%'}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className={styles.video__content}>
                            <h3>About School</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo veniam labore
                                ratione illo
                                vero voluptate a deserunt incidunt odio aliquam commodi blanditiis voluptas error non
                                rerum
                                temporibus
                                optio accusantium!
                            </p>
                            <p>
                                <a className="btn btn-primary" href="#!">
                                    Learn More
                                </a>
                            </p>
                        </motion.div>
                        <div className={styles.video__page_item}>
                            <motion.iframe
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 0.5}}
                                src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video"></motion.iframe>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default WelcomePage;
