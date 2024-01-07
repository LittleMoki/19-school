import React from 'react';
import styles from './Teachers.module.css'
import {motion} from "framer-motion";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGooglePlusG} from "react-icons/fa";
import teacher from '../../assets/images/Teachers/person_1.jpg'
import teacher2 from '../../assets/images/Teachers/person_2.jpg'
import teacher3 from '../../assets/images/Teachers/person_3.jpg'
import teacher4 from '../../assets/images/Teachers/person_4.jpg'

function Teachers() {
    let teachers=[
        {
            image:teacher,
            title:'Chris Worth',
            subtitle:'Physical Education'
        },
        {
            image:teacher2,
            title:'Janet Morris',
            subtitle:'English Teacher'
        },
        {
            image:teacher3,
            title:'Linda Reyez',
            subtitle:'Math Teacher'
        },
        {
            image: teacher4,
            title: 'Jessa Sy',
            subtitle: 'Physics Teacher'
        },
    ]
    return (
        <div className={styles.teachers} id='teachers'>
            <div className="container">
                <div className={styles.inner}>
                    <motion.div
                        initial={{opacity:0,y: '-100%'}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:0.5}}
                        className={styles.content}>
                        <h2 className={styles.title}>Meet Our Qualified Teachers</h2>
                        <p className={styles.subtitle}>Sed a repudiandae impedit voluptate nam Deleniti dignissimos
                            perspiciatis nostrum porro
                            nesciunt</p>
                    </motion.div>
                    <div className={styles.cards}>
                        {teachers.map((el,index)=>{
                            return (
                                <motion.div
                                    initial={{opacity:0,y:-10}}
                                    whileInView={{opacity:1,y:0}}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className={styles.card}>
                                    <div className={styles.card__img}>
                                        <img src={el.image} alt="teacher"/>
                                    </div>
                                    <h3 className={styles.card__title}>{el.title}</h3>
                                    <p className={styles.card__subtitle}>
                                        {el.subtitle}
                                    </p>
                                    <div className={styles.socials}>
                                        <a className={styles.twitter} href="#!"><FaTwitter/></a>
                                        <a className={styles.facebook} href="#!"><FaFacebook/></a>
                                        <a className={styles.intagram} href="#!"><FaInstagram/></a>
                                        <a className={styles.google} href="#!"><FaGooglePlusG/></a>
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

export default Teachers;