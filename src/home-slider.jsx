import React, { useState } from "react";
import sliderOneImage from './assets/sliders/slider-one.jpg';
import sliderTwoImage from './assets/sliders/slider-two.jpg';
import backArrow from './assets/right-arrow.svg';
import './scss/slider.scss';

const GallerySlider = () => {
    const images = [
        sliderOneImage,
        sliderTwoImage,
    ];

    const [slideIndex, setSlideIndex] = useState(0);

    const changeSlide = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }
        setSlideIndex(newIndex);
    };



    return (
        <div className="slider-container">
            <div className="slider">
                {images.map((image, index) => (
                    <img
                        className={'slider__image'}
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{ display: index === slideIndex ? "block" : "none" }}
                    />
                ))}
            </div>
            <button className="next" onClick={() => changeSlide(1)}>
                <img src={backArrow} alt={'back-arrow'} className={'next__icon'} />
            </button>
        </div>
    );
};

export default GallerySlider;
