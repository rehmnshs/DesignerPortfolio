import React, { useEffect, useState } from "react";
import "../css/contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    gsap.from(".line1", { width: 0, duration: 2 });
    gsap.from(".linemiddle", { height: 0, duration: 2 });
    gsap.from(".line2", { width: 0, duration: 2});
    gsap.from([".titleContact",".number",".email",".ph",".em"], { y:50,opacity:0, duration: 1});
  }, []);

  function circleColorChange(project) {
    if (showOverlay) {
      gsap.to(".disappearabout", { opacity: 0, duration: 0.3 });
      var menuu = document.getElementById("overla");

      return setTimeout(function () {
        setShowOverlay(!showOverlay);
        if (project === "projects") {
          navigate("/projects");
        }
        if (project === "contact") {
          navigate("/contact");
        }
        if (project === "home") {
          navigate("/");
        }
      }, 500);
    }
    gsap.to(".disappearabout", { opacity: 0, duration: 0.3, delay: 1 });
    setShowOverlay(!showOverlay);
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
                    circleColorChange("home");
                  }}
                >
                  Home
                </div>
                <div className="disappearabout refs" onClick={() => {
                    circleColorChange("projects");
                  }}>Projects</div>
           
                <div className="disappearabout refs">Contact</div>
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
      <div>
        <div className="ContactHero">
          <div className="titcont">
            <h1 className="titleContact">Contacts</h1>
          </div>
          <div className="layerline">
            <div className="linebox1">
              <div className="line1"></div>
              
              <div className="insidedivlb1">
              <div className="ph">phone</div>
              <div className="number" >+128148312084</div>
              <div className="linemiddle"></div>
              </div>
            </div>
            <div className="linebox2">
              <div className="line2"></div>
              <div className="insidedivlb2">
                <div className="em">email</div>
                <div className="email">info@selemen</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="menu"
          id="men"
          onClick={() => {
            setShowOverlay(!showOverlay);
          }}
        >
          Menu
        </div>
      </div>
    </>
  );
}
