import React from 'react';
import styles from './Students.module.css';
import {useInView} from 'react-intersection-observer';
import {FaRegUser} from 'react-icons/fa';
import {FaUserTie} from 'react-icons/fa';
import {IoLibraryOutline} from 'react-icons/io5';
import {FaRegSmileBeam} from 'react-icons/fa';
import AnimatedNumber from "./AnimatedNumber.jsx";



function Students() {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={styles.students}>
            <div className="container">
                <div className={styles.students__wrapper}>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.card__logo}>
                                <FaRegUser style={{width: '30px', height: '30px'}}/>
                            </div>
                            <div className={styles.card__content}>
                                {inView && <AnimatedNumber value={20203}/>}
                                <span>Students Enrolled</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card__logo}>
                                <FaUserTie style={{width: '30px', height: '30px'}}/>
                            </div>
                            <div className={styles.card__content}>
                                {inView && <AnimatedNumber value={139}/>}
                                <span>Students Enrolled</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card__logo}>
                                <IoLibraryOutline style={{width: '30px', height: '30px'}}/>
                            </div>
                            <div className={styles.card__content}>
                                {inView && <AnimatedNumber value={99} text={'%'}/>}
                                <span>Students Enrolled</span>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.card__logo}>
                                <FaRegSmileBeam style={{width: '30px', height: '30px'}}/>
                            </div>
                            <div className={styles.card__content}>
                                {inView && <AnimatedNumber value={100} text={'%'}/>}
                                <span>Students Enrolled</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Students;
