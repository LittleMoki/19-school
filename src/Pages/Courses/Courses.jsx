import React from 'react';
import styles from './Courses.module.css'
import {motion} from "framer-motion";
import {FaRegCalendarCheck} from "react-icons/fa";
import card from '../../assets/images/Slider/gal_img_sm_1.jpg'
import card2 from '../../assets/images/Slider/gal_img_sm_2.jpg'
import card3 from '../../assets/images/Slider/gal_img_sm_3.jpg'

function Courses() {
    let cards = [
        {
            image: card,
            date: 'July 10, 2024',
            title: 'Application Design',
            subtitle: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam quos quis nisi voluptatum architecto rerum error.',
        },
        {
            image: card2,
            date: 'July 10, 2024',
            title: 'Application Design',
            subtitle: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam quos quis nisi voluptatum architecto rerum error.',
        },
        {
            image: card3,
            date: 'July 10, 2024',
            title: 'Application Design',
            subtitle: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam quos quis nisi voluptatum architecto rerum error.',
        },
        {
            image: card,
            date: 'July 10, 2024',
            title: 'Application Design',
            subtitle: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam quos quis nisi voluptatum architecto rerum error.',
        },
    ]
    return (
        <div className={styles.courses} id='courses'>
            <div className="container">
                <div className={styles.inner}>
                    <motion.div
                        initial={{opacity:0,y: '-100%'}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:0.5}}
                        className={styles.content}>
                        <h2>Our Featured Courses</h2>
                        <p>
                            Sed a repudiandae impedit voluptate nam Deleniti dignissimos perspiciatis nostrum porro
                            nesciunt
                        </p>
                    </motion.div>
                    <div className={styles.cards}>
                        {cards.map((el, index) => {
                            return (
                                <motion.div
                                    initial={{opacity:0,y:-10}}
                                    whileInView={{opacity:1,y:0}}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className={styles.card}>
                                    <div className={styles.card__img}>
                                        <img src={el.image} alt="card"/>
                                    </div>
                                    <div className={styles.card__content}>
                                            <span className={styles.card__date}>
                                            <FaRegCalendarCheck/>
                                                {el.date}
                                            </span>
                                        <h3 className={styles.card__title}>{el.title}</h3>
                                        <p className={styles.card__subtitle}>
                                            {el.subtitle}
                                        </p>
                                        <p className={styles.card__buttons}>
                                            <a className='btn btn-primary' href="">
                                                Enroll now
                                            </a>
                                            <span>
                                            2,928 students enrolled
                                        </span>
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

export default Courses;