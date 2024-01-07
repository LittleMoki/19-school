import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay} from 'swiper/modules';
import styles from './StudentsSlider.module.css'
import {FaRegCalendarCheck} from "react-icons/fa";
import card from '../../assets/images/Slider/gal_img_sm_1.jpg'
import card2 from '../../assets/images/Slider/gal_img_sm_2.jpg'
import card3 from '../../assets/images/Slider/gal_img_sm_3.jpg'
import {motion} from "framer-motion";

function StudentsSlider() {
    let slides = [
        {
            image: card,
            title: 'Tempora consectetur unde nisi',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ut.',
            date: 'July 9, 2024'
        },
        {
            image: card2,
            title: 'Tempora consectetur unde nisi',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ut.',
            date: 'July 9, 2024'
        },
        {
            image: card3,
            title: 'Tempora consectetur unde nisi',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ut.',
            date: 'July 9, 2024'
        },
        {
            image: card,
            title: 'Tempora consectetur unde nisi',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ut.',
            date: 'July 9, 2024'
        },
        {
            image: card2,
            title: 'Tempora consectetur unde nisi',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ut.',
            date: 'July 9, 2024'
        },{
            image: card3,
            title: 'Tempora consectetur unde nisi',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ut.',
            date: 'July 9, 2024'
        },
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration:2}}
            viewport={{ once: true }}
            className={styles.slides}>
            <div className='container'>
                <div className={styles.inner}>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        loop={true}
                        autoplay={{delay: 3000}}
                        breakpoints={{
                            360: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView:2,
                            },
                            1200: {
                                slidesPerView:3,
                            },
                            1400: {
                                slidesPerView:3,
                            },
                        }}
                    >
                        {slides.map((el, index) => {
                            return (
                                <SwiperSlide key={index} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <motion.div
                                        initial={{opacity:0,y:-10}}
                                        whileInView={{opacity:1,y:0}}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}                                        className={styles.card}>
                                        <div className={styles.card__img}>
                                            <img src={el.image} alt="card"/>
                                        </div>
                                        <div className={styles.card__inner}>
                                            <div className={styles.card__content}>
                                                <h3>{el.title}</h3>
                                                <p>{el.subtitle}</p>
                                                <span>
                                            <FaRegCalendarCheck/>{el.date}
                                        </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </motion.div>
    );
}

export default StudentsSlider;