import React, { useEffect } from 'react'
import './imageSlider.css'
import { slider } from '../../../assets/assets'





const ImageSlider = () => {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".imageSlider-container");

        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimatiom();
        }

        function addAnimatiom() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".slider");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true);

                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }

    }, []);
    
  return (
    <div className='imageSlider'>

        <div className="imageSlider-container" data-direction="left" data-speed="slow">           
            <div className="slider">
                {slider.slice(0, 4).map((item, index) => {
                    return (
                        <>
                        <div className="top-slider" key={index}>
                            <img src={item} alt="" />
                        </div>
                        </>
                    )
                })}
            </div>
        </div>

        <div className="imageSlider-container" data-direction="right" data-speed="fast">
            <div className="slider">
                {slider.slice(4).map((item, index) => {
                    return (
                        <div className="top-slider" key={index}>
                            <img src={item} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default ImageSlider