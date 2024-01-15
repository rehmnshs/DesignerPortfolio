import React, { useEffect, useState } from "react";
import "../css/project.css";
import img1 from "../assets/bg6.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { parsePath, useNavigate } from "react-router-dom";

export default function Projects({
  prline,
  setprline,
  pic17Source,
  setpic17Source,
  pic16Source,
  setpic16Source,
  pic15Source,
  setpic15Source,
  pic14Source,
  setpic14Source,
  d1,
  d2,
  d3,
  d4,
  setd1,
  setd2,
  setd3,
  number,
}) {
  function onchangeparap(e) {
    setprline(e.target.value);
  }
  function onchanged1(e) {
    setd1(e.target.value);
  }
  function onchanged2(e) {
    setd2(e.target.value);
  }
  function onchanged3(e) {
    setd3(e.target.value);
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
      gsap.to( ".socialmedia", { opacity: 0, duration: 0 });

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
    gsap.to( ".socialmedia", { opacity: 0, duration: 0.01,delay:1 });

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
              <div className="socialmedia">Host it</div>
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
          <textarea className="parap" onChange={onchangeparap}>
            {prline}
          </textarea>
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
      <div className="proj1" onClick={() => addInput(setpic14Source)}>
        <h1 className="proj1">
          <textarea className="titled" onChange={onchanged1}>
            {d1}
          </textarea>
        </h1>
        <img src={pic14Source[0]} className="img11" />
      </div>
      <div className="proj2" onClick={() => addInput(setpic15Source)}>
        <h1 className="proj1">
          <textarea className="titled" onChange={onchanged2}>
            {d2}
          </textarea>
        </h1>

        <img src={pic15Source[0]} />
      </div>
      <div className="proj3" onClick={() => addInput(setpic16Source)}>
        <h1 className="proj1">
          <textarea className="titled" onChange={onchanged3}>
            {d3}
          </textarea>
        </h1>

        <img src={pic16Source[0]} />
      </div>
      <div className="proj3" onClick={() => addInput(setpic17Source)}>
        <h1 className="proj1">
          <textarea className="titled" onChange={onchanged3}>
            {d4}
          </textarea>
        </h1>

        <img src={pic17Source[0]} />
      </div>
    </>
  );
}
