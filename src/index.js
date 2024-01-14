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
import pic5 from "../src/assets/pic5.jpg";
import pic6 from "../src/assets/pic6.jpg";
import pic7 from "../src/assets/pic7.jpg";
import pic8 from "../src/assets/pic8.jpg";
import pic9 from "../src/assets/pic9.jpg";
import pic10 from "../src/assets/pic7.jpg";
import pic11 from "../src/assets/pic5.jpg";
import pic12 from "../src/assets/bg6.jpg";

const Index = () => {
  const [prline, setprline] = useState(
    "We will help you implement a project of any complexity"
  );
  const [username, setusername] = useState("");
  const [para, setpara] = useState(
    "Selemen® — is a company for the construction and decoration of premises. We carry out projects on time, within budget"
  );
  const [title, setTitle] = useState("Selemen");
  const [exp, setexp] = useState("20+ years on the market");
  const [rightexp, setrightexp] = useState("We guarantee the quality");
  const [designTitle, setdt] = useState("");

  const [pic1Source, setpic1Source] = useState([pic1, null]);
  const [pic2Source, setpic2Source] = useState([pic2, null]);
  const [pic3Source, setpic3Source] = useState([pic3, null]);
  const [pic4Source, setpic4Source] = useState([pic4, null]);
  const [pic5Source, setpic5Source] = useState([pic5, null]);
  const [pic6Source, setpic6Source] = useState([pic6, null]);
  const [pic7Source, setpic7Source] = useState([pic7, null]);
  const [pic8Source, setpic8Source] = useState([pic8, null]);
  const [pic9Source, setpic9Source] = useState([pic9, null]);
  const [pic10Source, setpic10Source] = useState([pic10, null]);
  const [pic11Source, setpic11Source] = useState([pic11, null]);
  const [pic12Source, setpic12Source] = useState([pic8, null]);
  const [pic13Source, setpic13Source] = useState([pic6, null]);
  const [pic14Source, setpic14Source] = useState([pic12, null]);
  const [pic15Source, setpic15Source] = useState([pic12, null]);
  const [pic16Source, setpic16Source] = useState([pic12, null]);

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
          pic5Source={pic5Source}
          pic6Source={pic6Source}
          pic7Source={pic7Source}
          pic8Source={pic8Source}
          pic9Source={pic9Source}
          pic10Source={pic10Source}
          pic11Source={pic11Source}
          pic12Source={pic12Source}
          pic13Source={pic12Source}
          setpic1Source={setpic1Source}
          setpic2Source={setpic2Source}
          setpic3Source={setpic3Source}
          setpic4Source={setpic4Source}
          setpic5Source={setpic5Source}
          setpic6Source={setpic6Source}
          setpic7Source={setpic7Source}
          setpic8Source={setpic8Source}
          setpic9Source={setpic9Source}
          setpic10Source={setpic10Source}
          setpic11Source={setpic11Source}
          setpic12Source={setpic12Source}
          setpic13Source={setpic13Source}
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
        />
      ),
    },

    {
      path: "/contact",
      element: <Contacts />,
    },
  ]);

  const el = document.getElementById("root");
  const root = ReactDOM.createRoot(el);

  return <RouterProvider router={router} />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
