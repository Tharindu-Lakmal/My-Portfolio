import React from 'react'
import "./Hero.css"
import { assets } from '../../../assets/assets'


const scroller = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimatiom();
}

function addAnimatiom() {
  scroller.forEach((scroller) => {
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

const Hero = () => {

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
            <li>Tharindu Lakaml</li>
            <li>-</li>
            <li>Full Stack Developer</li>
            <li>&</li>
            <li>UI/UX Designer  </li>
          </ul>
        </div>

    </div>
  )
}

export default Hero