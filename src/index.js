import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import pic1 from "../src/assets/pic1.jpg";
import pic2 from "../src/assets/pic2.png";
import pic3 from "../src/assets/pic3.jpg";
import pic4 from "../src/assets/pic4.jpg";
import pic12 from "../src/assets/bg6.jpg";

const Index = () => {
  const [prline, setprline] = useState(
    "We will help you implement a project of any complexity"
  );
  const [username, setusername] = useState("");
  const [para, setpara] = useState(
    "Selemen® — is a company for the construction and decoration of premises. We carry out projects on time"
  );
  const [title, setTitle] = useState("Selemen");
  const [exp, setexp] = useState("20+ years on the market");
  const [rightexp, setrightexp] = useState("We guarantee the quality");
  const [designTitle, setdt] = useState("");
  const [d1, setd1] = useState("Design 1");
  const [d2, setd2] = useState("Design 2");
  const [d3, setd3] = useState("Design 3");
  const [d4, setd4] = useState("Design 4");
  const [d5, setd5] = useState("Design 5");
  const [d6, setd6] = useState("Design 6");
  const [email, setemail] = useState("info@selemen");
  const [number, setnumber] = useState("+128148312084");
  const [pic1Source, setpic1Source] = useState([pic1, null]);
  const [pic2Source, setpic2Source] = useState([pic2, null]);
  const [pic3Source, setpic3Source] = useState([pic3, null]);
  const [pic4Source, setpic4Source] = useState([pic4, null]);

  const [pic14Source, setpic14Source] = useState([pic12, null]);
  const [pic15Source, setpic15Source] = useState([pic12, null]);
  const [pic16Source, setpic16Source] = useState([pic12, null]);
  const [pic17Source, setpic17Source] = useState([pic12, null]);
  const [pic18Source, setpic18Source] = useState([pic12, null]);
  const [pic19Source, setpic19Source] = useState([pic12, null]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          para={para}
          setpara={setpara}
          title={title}
          setTitle={setTitle}
          exp={exp}
          setexp={setexp}
          rightexp={rightexp}
          setrightexp={setrightexp}
          pic1Source={pic1Source}
          pic2Source={pic2Source}
          pic3Source={pic3Source}
          pic4Source={pic4Source}
          setpic1Source={setpic1Source}
          setpic2Source={setpic2Source}
          setpic3Source={setpic3Source}
          setpic4Source={setpic4Source}
          number={number}
        />
      ),
    },
    {
      path: "/projects",
      element: (
        <Projects
          prline={prline}
          setprline={setprline}
          pic14Source={pic14Source}
          setpic14Source={setpic14Source}
          pic15Source={pic15Source}
          setpic15Source={setpic15Source}
          pic16Source={pic16Source}
          setpic16Source={setpic16Source}
          pic17Source={pic17Source}
          setpic17Source={setpic17Source}
          pic18Source={pic18Source}
          setpic18Source ={setpic18Source}
          pic19Source={pic19Source}
          setpic19Source ={setpic19Source}
          d1={d1}
          d2={d2}
          d3={d3}
          d4={d4}
          d5 ={d5}
          d6 = {d6}
          setd1={setd1}
          setd2={setd2}
          setd3={setd3}
          setd4={setd4}
          setd5={setd5}
          setd6={setd6}

          number={number}
        />
      ),
    },

    {
      path: "/contact",
      element: (
        <Contacts
          email={email}
          setemail={setemail}
          number={number}
          setnumber={setnumber}
        />
      ),
    },
  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
