import React, { useEffect } from 'react'
import "./Hero.css"
import { assets } from '../../../assets/assets'



const Hero = () => {

  useEffect(() => {
    const scroller_heading = document.querySelectorAll('.text h1');

    function handleScroller() {
      let scrolled = window.scrollY;

      if (scrolled < 780) {
        scroller_heading[0].style.left = `${scrolled / 6}%`;
        scroller_heading[1].style.right = `${scrolled / 6}%`;
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
            <h1 className="first-header">UI/UX <span>Designer</span></h1>
            <h1 className="second-header">Full Stack Developer</h1>
        </div>

        <div className="user-container">
          <img src={assets.user} alt="" />
        </div>

        <div className="scroller">
          <ul className="scroller_inner">
            <li> Tharindu Lakmal</li>
            <li>—</li>
            <li>Full Stack Developer</li>
            <li><b> ; </b></li>
            <li>UI/UX Designer</li>
            <li>
              <iframe src="https://lottie.host/embed/806215a2-76dc-4b0f-8c75-8dd1e512e288/YJ2xJFrTDy.json"></iframe>
            </li>

            <li> Tharindu Lakmal</li>
            <li>—</li>
            <li>Full Stack Developer</li>
            <li><b> ; </b></li>
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