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

  function handleEditName(e) {
    setTitle(e.target.value);
  }
  function handleEditpara(e) {
    setpara(e.target.value);
  }
  function handleEditexp(e) {
    setexp(e.target.value);
  }
  function handleEditrexp(e) {
    setrightexp(e.target.value);
  }
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
      gsap.to(".socialmedia", { opacity: 0, duration: 0.00 });

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
    gsap.to(".socialmedia", { opacity: 0, duration: 0.01, delay: 1 });

    setShowOverlay(!showOverlay);
    let circle = document.getElementById("circle");
    let menu = document.getElementById("men");

    circle.style.backgroundColor = showOverlay ? "blueviolet" : "white";

    menu.classList.remove(showOverlay ? "menu1" : "menu");
    menu.classList.add(showOverlay ? "menu" : "menu1");
  }
  function addInput(setImageSource) {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/";
    fileInput.id = "dynamicFileInput";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function (e) {
      handleImageChange(e, setImageSource);
      document.body.removeChild(fileInput);
    });

    fileInput.click();
  }
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage([URL.createObjectURL(file), file]);
    }
  };
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
              <div className="socialmedia">Host it</div>
            </div>
            <div className="secondpartabout">
              <div className="disappearabout">{number}</div>
            </div>
          </div>
        </>
      )}
      <textarea id="title2" onChange={handleEditName}>
        {title}
      </textarea>
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
        <img src={pic1Source[0]} onClick={() => addInput(setpic1Source)} />
      </div>
      <div className="paraContainer">
        <textarea className="para" onChange={handleEditpara}>
          {para}
        </textarea>
      </div>
      <div className="layer"></div>
      <div className="twoside">
        <div className="exp">
          <textarea onChange={handleEditexp}>{exp}</textarea>
        </div>

        <div className="rightsidexp">
          <textarea id="qe" onChange={handleEditrexp}>
            {rightexp}
          </textarea>
        </div>
      </div>
      <div className="thirdpage">
        <div className="img1">
          <div className="innerimg1">
            <img
              id="img1"
              src={pic2Source[0]}
              onClick={() => {
                addInput(setpic2Source);
              }}
            />
          </div>{" "}
        </div>

        <div className="img2">
          <div className="innerimg2">
            <img
              id="img2"
              src={pic3Source[0]}
              onClick={() => {
                addInput(setpic3Source);
              }}
            />
          </div>
        </div>
      </div>
      <div></div>
      <div className="img3">
        <div className="innerimg3">
          <img
            src={pic4Source[0]}
            onClick={() => {
              addInput(setpic4Source);
            }}
          />
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
          <img
            className="imgsample8"
            src={pic5Source[0]}
            onClick={() => addInput(setpic5Source)}
          />
        </div>
        <div className="leftdwnlast">
          <img
            className="imgsample8"
            src={pic8Source[0]}
            onClick={() => addInput(setpic8Source)}
          />
        </div>
        <div className="leftone">
          <img
            className="imgsample8"
            src={pic10Source[0]}
            onClick={() => addInput(setpic10Source)}
          />
        </div>
        <div className="leftdwnone">
          <img
            className="imgsample8"
            src={pic7Source[0]}
            onClick={() => addInput(setpic7Source)}
          />
        </div>
        <div className="middleimg1">
          <img
            className="imgsample8"
            src={pic6Source[0]}
            onClick={() => addInput(setpic6Source)}
          />
        </div>
        <div className="rightone">
          <img
            className="imgsample8"
            src={pic9Source[0]}
            onClick={() => addInput(setpic9Source)}
          />
        </div>
        <div className="rightdwnone">
          <img
            className="imgsample8"
            src={pic13Source[0]}
            onClick={() => addInput(setpic13Source)}
          />
        </div>
        <div className="rightlast">
          <img
            className="imgsample8"
            src={pic11Source[0]}
            onClick={() => addInput(setpic11Source)}
          />
        </div>
        <div className="rightdwnlast">
          <img
            className="imgsample8"
            src={pic12Source[0]}
            onClick={() => addInput(setpic12Source)}
          />
        </div>
      </div>
    </>
  );
}
