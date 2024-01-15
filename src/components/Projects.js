import React, { useEffect, useState } from "react";
import "../css/project.css";
import img1 from "../assets/bg6.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

export default function Projects({
  prline,
  setprline,
  pic16Source,
  setpic16Source,
  pic15Source,
  setpic15Source,
  pic14Source,
  setpic14Source,
  pic17Source,
  d1,
  d2,
  d3,
  d4,
  setd1,
  setd2,
  setd3,
  number,
}) {
  gsap.registerPlugin(ScrollTrigger);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Call the scrollToTop function when the page loads
  window.addEventListener("load", scrollToTop);
  useEffect(() => {
    scrollToTop();
    gsap.from(".titlep", { duration: 1, opacity: 0, y: 100 });
    gsap.from(".parap", { duration: 1, opacity: 0, y: 100 });

    gsap.from(".layerofproj", { scale: 0, duration: 2 });
    gsap.from(".proj1", {
      scale: 0.5,
      scrollTrigger: { trigger: ".proj1", scrub: false },
      y: 500,
      duration: 1,
    });
    gsap.from(".proj2", {
      scale: 0.5,
      scrollTrigger: { trigger: ".proj2", scrub: false },
      y: 500,
      duration: 1,
    });
    gsap.from(".proj3", {
      scale: 0.5,
      scrollTrigger: { trigger: ".proj3", scrub: false },
      duration: 1,
    });
  }, []);
  function showlay1(projectj) {
    if (showOverlay) {
      gsap.to(".disappearabout", { opacity: 0, duration: 0.3 });
      var menuu = document.getElementById("overla1");

      menuu.classList.toggle("closing-animation");

      let menu = document.getElementById("men");

      menu.classList.remove(showOverlay ? "menu1" : "menu");
      menu.classList.add(showOverlay ? "menu" : "menu1");
      return setTimeout(function () {
        setShowOverlay(false);
        if (projectj === "home") {
          navigate("/");
        }
        if (projectj === "contact") {
          navigate("/contact");
        }
        if (projectj === "projects") {
          navigate("/projects");
        }
      }, 500);
    }
    gsap.to(".disappearabout", { opacity: 0, duration: 0.3, delay: 1 });
    setShowOverlay(!showOverlay);
    let menu = document.getElementById("men");

    menu.classList.remove(showOverlay ? "menu1" : "menu");
    menu.classList.add(showOverlay ? "menu" : "menu1");
  }

  return (
    <>
      {showOverlay && (
        <>
          {" "}
          <div className="overlay1" id="overla1">
            <div className="onepartabout">
              <div className="refsabout">
                <div
                  className="disappearabout refs"
                  onClick={() => {
                    showlay1("home");
                  }}
                >
                  Home
                </div>
                <div
                  className="disappearabout refs"
                  onClick={() => {
                    showlay1("projects");
                  }}
                >
                  Projects
                </div>
                <div
                  className="disappearabout refs"
                  onClick={() => {
                    showlay1("contact");
                  }}
                >
                  Contact
                </div>
              </div>
              <div className="socialmedia">
        
              </div>
            </div>
            <div className="secondpartabout">
              <div className="disappearabout">{number}</div>
            </div>
          </div>
        </>
      )}
      <div className="heroProject">
        <div className="projTitle">
          <h1 className="titlep">Projects</h1>
          <p className="parap">
            We will help you implement a project of any complexity
          </p>
        </div>
        <div className="layerofproj"></div>
      </div>
      <div
        className="menu"
        id="men"
        onClick={() => setShowOverlay(!showOverlay)}
      >
        Menu
      </div>
      <div className="proj1">
        <h1 className="proj1">{d1}</h1>
        <img src={pic14Source[0]} className="img11" />
      </div>
      <div className="proj2">
        <h1 className="proj1">{d2}</h1>

        <img src={pic15Source[0]} />
      </div>
      <div className="proj3">
        <h1 className="proj1">{d3}</h1>

        <img src={pic16Source[0]} />
      </div>
      <div className="proj3" >
        <h1 className="proj1">
          <h1 className="titled" >
            {d4}
          </h1>
        </h1>

        <img src={pic17Source[0]} />
      </div>
    </>
  );
}
