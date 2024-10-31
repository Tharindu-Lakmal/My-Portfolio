import React, { useEffect } from 'react'
import "./Hero.css"
import { assets } from '../../../assets/assets'



const Hero = () => {

  useEffect(() => {
    const scroller_heading = document.querySelector('.scroller_inner');

    function handleScroller() {
      let scrolled = window.scrollY;

      if (scrolled < 780) {
        scroller_heading.style.left = `${scrolled / 26}%`;
      }
    }

    window.addEventListener('scroll', handleScroller);
  }, [])


  
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimatiom();
    }

    function addAnimatiom() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // console.log(scrollerContent);
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          // console.log(duplicatedItem);

          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

  }, []);

  return (
    <div className='hero'>

        <div className="text">

          <div className="text-inner-left">
            <p>Sabaragamuwa University of Sri Lanka</p>
            <iframe src="https://lottie.host/embed/24b5776e-4d90-4807-b0a5-e6d3995212fb/3sbocf3b2R.json"></iframe>
          </div>

          <div className="text-inner-right">
            <img src={assets.arrowRightDown} alt="" />
            <div className="text1">
              <h1 className="first-header">UI/UX Designer</h1>
              <h1 className="second-header">Full Stack Developer</h1>
            </div>
          </div>

        </div>

        <div className="user-container">
          <img src={assets.user} alt="" />
        </div>

        <div className="scroller">
          <ul className="scroller_inner">
            <li> Tharindu Lakmal</li>
            <li>—</li>
            <li>Full Stack Developer</li>
            <li><b> , </b></li>
            <li>UI/UX Designer</li>
            <li>
              <iframe src="https://lottie.host/embed/806215a2-76dc-4b0f-8c75-8dd1e512e288/YJ2xJFrTDy.json"></iframe>
            </li>

            <li> Tharindu Lakmal</li>
            <li>—</li>
            <li>Full Stack Developer</li>
            <li><b> , </b></li>
            <li>UI/UX Designer</li>
            <li>
              <iframe src="https://lottie.host/embed/806215a2-76dc-4b0f-8c75-8dd1e512e288/YJ2xJFrTDy.json"></iframe>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Hero