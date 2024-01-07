import React, { useEffect, useState } from "react";
import "./css/App.css";
import img from "../src/assets/j1.jpg";

import img2 from "../src/assets/j65.jpg";
import img3 from "../src/assets/j64.jpg";
import img7 from "../src/assets/mv5.jpg";
import mv3 from "../src/assets/mv3.jpg";
import mv4 from "../src/assets/mv4.jpg";
import mv6 from "../src/assets/mv6.jpg";
import mv7 from "../src/assets/mv7.jpg";
import { useNavigate } from "react-router-dom";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import SplitType from "split-type";

export default function App() {
  const [user, setuser] = useState();
  const [showOverlay, setShowOverlay] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 'smooth' for a smooth scroll, use 'auto' for instant scroll
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
        opacity:0.5,
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
              <div className="disappearabout refs" onClick={()=>circleColorChange("home")}>Home</div>

                <div
                  className="disappearabout refs"
                  onClick={() => {
                    circleColorChange("projects");
                  }}
                >
                  Projects
                </div>
                <div className="disappearabout refs" onClick={()=>circleColorChange("contact")}>Contact</div>
              </div>
              <div className="socialmedia">
                <div className="disappearabout sm">Facebook</div>
                <div className="disappearabout sm">instagram</div>
              </div>
            </div>
            <div className="secondpartabout">
              <div className="disappearabout">+352 661 638 639</div>
            </div>
          </div>
        </>
      )}
      <h1 id="title2">Selemen</h1>
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
        <img src={img} />
      </div>
      <div className="paraContainer">
        <div className="para">
          Selemen® — is a company for the construction and decoration of
          premises. We carry out projects on time, within budget 
        </div>
      </div>
      <div className="layer"></div>
      <div className="twoside">
        <div className="exp">
          <div>20+ years on the market</div>
        </div>

        <div className="rightsidexp">
          <div id="qe">We guarantee the quality</div>
        </div>
      </div>
      <div className="thirdpage">
        <div className="img1">
          <div className="innerimg1">
            <img
              id="img1"
              src="https://images.unsplash.com/photo-1507292062805-f64f18a39c9c?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>{" "}
        </div>

        <div className="img2">
          <div className="innerimg2">
            <img id="img2" src={img2} />
          </div>
        </div>
      </div>
      <div></div>
      <div className="img3">
        <div className="innerimg3">
          <img src={img3} />
        </div>
      </div>
      <div className="designs">
        <div className="dtitle">
          {" "}
          <h1>Wide range of designs</h1>
          <p>We will help you implement a project of any complexity</p>
          <div className="imgsamplec"></div>
        </div>
      </div>
      <div className="designImgs">
        <div className="leftlast">
          <img className="imgsample8" src={mv6} />
        </div>
        <div className="leftdwnlast">
          <img className="imgsample8" src={mv7} />
        </div>
        <div className="leftone">
          <img className="imgsample8" src={mv3} />
        </div>
        <div className="leftdwnone">
          <img className="imgsample8" src={mv4} />
        </div>
        <div className="middleimg1">
          <img className="imgsample8" src={img7} />
        </div>
        <div className="rightone">
          <img className="imgsample8" src={mv6} />
        </div>
        <div className="rightdwnone">
          <img className="imgsample8" src={mv7} />
        </div>
        <div className="rightlast">
          <img className="imgsample8" src={mv7} />
        </div>
        <div className="rightdwnlast">
          <img className="imgsample8" src={mv3} />
        </div>
      </div>
    </>
  );
}
