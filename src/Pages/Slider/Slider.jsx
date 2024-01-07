import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import styles from './Slider.module.css';
import sliderImage from '../../assets/images/Slider/gal_img_sm_1.jpg';
import sliderImage2 from '../../assets/images/Slider/gal_img_sm_2.jpg';
import sliderImage3 from '../../assets/images/Slider/gal_img_sm_3.jpg';
import {delay, motion} from 'framer-motion';

function Slider() {
    let SliderImages = [
        {image: sliderImage},
        {image: sliderImage2},
        {image: sliderImage3},
    ]
    return (
        <div className='container' id='home'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                loop={true}
                autoplay={{delay: 2000}}
                effect="fade"
            >
                {SliderImages.map((el, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{opacity: 0,}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2}}
                                exit={{opacity: 0}}
                                className={styles.slider__item}>
                                <img src={el.image} alt="slider"/>
                            </motion.div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Slider;
