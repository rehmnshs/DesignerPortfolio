import React, { useEffect, useState } from "react";
import "./css/App.css";

import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import SplitType from "split-type";

export default function App({
  number,
  setpic1Source,
  setpic2Source,
  setpic3Source,
  setpic4Source,
  setpic5Source,
  setpic6Source,
  setpic7Source,
  setpic8Source,
  setpic9Source,
  setpic10Source,
  setpic11Source,
  setpic12Source,
  setpic13Source,
  title,
  setTitle,
  para,
  setpara,
  exp,
  setexp,
  rightexp,
  setrightexp,
  pic1Source,
  pic2Source,
  pic3Source,
  pic4Source,
  pic5Source,
  pic6Source,
  pic7Source,
  pic8Source,
  pic9Source,
  pic10Source,
  pic11Source,
  pic12Source,
  pic13Source,
}) {
  const [user, setuser] = useState();
  const [showOverlay, setShowOverlay] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 'smooth' for a smooth scroll, use 'auto' for instant scroll
  }
  const splitTypes = document.querySelectorAll(".para");
  useEffect(() => {
    scrollToTop();

    gsap.from(".layer0", { scale: 0, duration: 3 });

    gsap.from(".layer", {
      scale: 0,
      scrollTrigger: { trigger: ".layer" },
      duration: 2,
    });
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars" });
      gsap.to(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top center",
          end: "bottom 70%",
          scrub: 1,
          markers: false,
        },
        opacity: 0.5,
        stagger: 0.2,
      });
      console.log("dawdaqd");
    });
  }, []);

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const x = clientX;
    const y = clientY;
    gsap.to("#circle", {
      left: x,
      top: y,
      duration: 0.1,
      ease: "sine.out",
    });
  });

  function circleColorChange(project) {
    if (showOverlay) {
      gsap.to(".disappearabout", { opacity: 0, duration: 0.3 });
      var menuu = document.getElementById("overla");

      menuu.classList.toggle("closing-animation");

      let circle = document.getElementById("circle");
      let menu = document.getElementById("men");

      circle.style.backgroundColor = showOverlay ? "blueviolet" : "white";

      menu.classList.remove(showOverlay ? "menu1" : "menu");
      menu.classList.add(showOverlay ? "menu" : "menu1");
      return setTimeout(function () {
        setShowOverlay(!showOverlay);
        if (project === "projects") {
          navigate("/projects");
        }
        if (project === "contact") {
          navigate("/contact");
        }
      }, 500);
    }
    gsap.to(".disappearabout", { opacity: 0, duration: 0.3, delay: 1 });
    setShowOverlay(!showOverlay);
    let circle = document.getElementById("circle");
    let menu = document.getElementById("men");

    circle.style.backgroundColor = showOverlay ? "blueviolet" : "white";

    menu.classList.remove(showOverlay ? "menu1" : "menu");
    menu.classList.add(showOverlay ? "menu" : "menu1");
  }

  return (
    <>
      {showOverlay && (
        <>
          {" "}
          <div className="overlay" id="overla">
            <div className="onepartabout">
              <div className="refsabout">
                <div
                  className="disappearabout refs"
                  onClick={() => circleColorChange("home")}
                >
                  Home
                </div>

                <div
                  className="disappearabout refs"
                  onClick={() => {
                    circleColorChange("projects");
                  }}
                >
                  Projects
                </div>
                <div
                  className="disappearabout refs"
                  onClick={() => circleColorChange("contact")}
                >
                  Contact
                </div>
              </div>
              <div className="socialmedia"></div>
            </div>
            <div className="secondpartabout">
              <div className="disappearabout">{number}</div>
            </div>
          </div>
        </>
      )}
      <h1 id="title2">{title}</h1>
      <div id="circle"></div>

      <div className="menu" id="men" onClick={circleColorChange}>
        Menu
      </div>
      <div className="banner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="layer0"></div>

      <div className="middleimg">
        <img src={pic1Source[0]} />
      </div>
      <div className="paraContainer">
        <p className="para">{para}</p>
      </div>
      <div className="layer"></div>
      <div className="twoside">
        <div className="exp">
          <div>{exp}</div>
        </div>

        <div className="rightsidexp">
          <div id="qe">{rightexp}</div>
        </div>
      </div>
      <div className="thirdpage">
        <div className="img1">
          <div className="innerimg1">
            <img id="img1" src={pic2Source[0]} onClick={() => {}} />
            <div className="txtimg">ladsas</div>
          </div>{" "}
        </div>

        <div className="img2">
          <div className="innerimg2">
            <img id="img2" src={pic3Source[0]} />
            <div className="txtimg">ladsas</div>


          </div>
          <div>ladsas</div>
        </div>
      </div>
  
      <div className="img3">
        <div className="innerimg3">
          <img  className="img3inner" src={pic4Source[0]} />
          <div className="txtimg">ladsas</div>

        </div>
      </div>
     
      <div className="designImgs">
        <h1 className="visproj " onClick={()=>{navigate('/projects')}}>
          Visit Our Projects 
        </h1>
      </div>
    </>
  );

}
