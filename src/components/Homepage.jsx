import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  UilGithub,
  UilTwitter,
  UilLinkedin,
  UilFacebook,
} from "@iconscout/react-unicons";
function Percentage() {
  const [percent, setPercent] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      var h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      setPercent(
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>{percent < 20 && <div className="goDown"></div>}</p>
    </div>
  );
}

export default function Homepage() {
  // const color = "255, 255, 255";
  // const color = "255, 69, 0";
  // const color = "7, 190, 184";
  // const color = "255, 255, 255";
  // const color = "205, 242, 82";
  // const color = "139, 245, 115";
  // const color = "49, 176, 255";
  const color = "38,159, 235";

  const scrollBody = useRef();
  const [background, setBackground] = useState("bg-starter");
  const [textClass, setTextClass] = useState("textstarter");
  const [waive, setWaive] = useState("waive-start");
  let added = false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const texts = document.querySelector(".homepage-introduction");
      const textsLoc = texts.getBoundingClientRect().top;
      const scrollLoc = scrollBody.current.scrollTop - 150;
      console.log("scroll " + scrollLoc + " text: " + textsLoc);
      if (textsLoc > scrollLoc + 700) {
        if (added) {
          setTextClass("textLeave");
          setBackground("homepage-bg");
          setWaive("waive-start");
          added = false;
        }
      } else if (textsLoc < scrollLoc + 700 && scrollLoc - textsLoc < 1000) {
        if (!added) {
          setTextClass("textEnter");
          setBackground("homepage-bg-after");
          setWaive("waive");
          added = true;
        }
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);
  // ############################################################
  function Introduction() {
    return (
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            padding: "1em",
          }}
          className={`homepage-introduction ${textClass}`}
        >
          <p>
            In looking for a career that would satisy my desire to create and
            problem solve, I found programming…
          </p>
          <p>
            I started off programming games in GML, to making websites with
            Django (Python), to now creating websites with JavaScript and React
            the past couple years.
          </p>
          <p>
            My interests are in building Web Technologies and Products that
            improve the user's quality of life.
          </p>
          <p>
            Staying informed on developments in the tech industry as whole is
            important to me, as well as making my best effort to learn
            technologies that are relevant to my current practice.
          </p>
        </div>
      </div>
    );
  }
  function TypeText() {
    return (
      <h3>
        <TypeAnimation
          sequence={[
            1000,
            "Developer",
            1000, // Waits 1s
            "Freelancer",
            1000, // Waits 1s
            "Videogame Maker",
            1000, // Waits 1s
            "Enthusiast", //
            1000, // Waits 1s
            "Digital Artist",
            1000, // Waits 1s
            // () => {
            //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
            // },
          ]}
          wrapper="div"
          cursor={false}
          repeat={Infinity}
          className="typeText"
          style={{
            color: `rgb(${color})`,
            fontWeight: "400",
          }}
          speed="10"
        />
      </h3>
    );
  }
  function TobyVanBaast() {
    return (
      <h3>
        <TypeAnimation
          sequence={[
            "Toby Van Baast",
            // () => {
            //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
            // },
          ]}
          wrapper="div"
          cursor={false}
          className="typeText"
          style={{
            color: `rgb(${color})`,
            fontWeight: "400",
            textShadow: " 1px 1px 2px black",
          }}
          speed="50"
        />
      </h3>
    );
  }

  return (
    <div ref={scrollBody}>
      <div
        className={background}
        style={{
          opacity: "30%",
          backgroundPosition: "center",
          backgroundImage: "url(../../background/starrysky.jpg)",
          display: "block",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
        }}
      ></div>

      {/* ######################################################### */}
      <div style={{ padding: "10em 2em 5em 2em" }}>
        <div className="section" style={{ justifyContent: "space-between" }}>
          <div style={{ margin: "0 1em", textAlign: "left" }}>
            <h2
              className="homepage-jumbo-text"
              style={{ color: `rgb(${color})`, marginBottom: "2em" }}
            >
              {/* I'M{" "} */}
              <span style={{ color: `rgb(${color})`, fontWeight: "600" }}>
                <TobyVanBaast />
              </span>
            </h2>
            <TypeText />
          </div>
          <div
            className="homepage-pic2 breathing"
            style={{
              backgroundImage: "url(../../Online-world-amico3.png)",
              backgroundSize: "100%",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "inline-flex",
            position: "fixed",
            bottom: "3em",
            width: "100%",
            left: "0",
            justifyContent: "center",
          }}
        >
          <Percentage />
        </div>
        <h2>
          <span style={{ marginRight: "1em" }} className={waive}>
            👋
          </span>
          Greetings!
        </h2>
        <div className="section2">
          <Introduction />

          <div
            style={{
              marginTop: "3em",
              borderRadius: "100%",
              height: "250px",
              width: "250px",
              background: `rgba(${color},.5)`,
            }}
            className="homepage-pic1"
          >
            <div
              className="portfolioAnim"
              style={{
                borderRadius: "100%",
                height: "250px",
                width: "250px",
                border: `5px dotted ${`rgb(${color})`}`,
                marginLeft: "-5.5px",
                marginTop: "-5px",
              }}
            ></div>
            <div
              style={{
                marginTop: "-250px",
                borderRadius: "100%",
                height: "246px",
                width: "246px",
                backgroundImage: "url(../../Tobyvb1-no-bg.png)",
                backgroundPosition: "center",
                backgroundSize: "100%",
              }}
            ></div>
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: "0" }}>FIND ME ON</h2>
          <p style={{ margin: "0 auto 3em auto" }}>
            Feel free to <span style={{ color: `rgb(${color})` }}>connect</span>{" "}
            with me
          </p>
          <div className="homepage-icons">
            <a
              onClick={() =>
                window.open(`${"https://github.com/TobyVB"}`, "_blank")
              }
            >
              <div className="icon-bg">
                <UilGithub size="30" color={`rgb(${color})`} />
              </div>
            </a>
            <div className="icon-bg">
              <UilTwitter size="30" color={`rgb(${color})`} />
            </div>
            <a
              onClick={() =>
                window.open(
                  `${"https://www.linkedin.com/in/tobyvanbaast/"}`,
                  "_blank"
                )
              }
            >
              <div className="icon-bg">
                <UilLinkedin size="30" color={`rgb(${color})`} />
              </div>
            </a>
            <a
              onClick={() =>
                window.open(`${"https://www.facebook.com/TobyVB"}`, "_blank")
              }
            >
              <div className="icon-bg">
                <UilFacebook size="30" color={`rgb(${color})`} />
              </div>
            </a>
          </div>
        </div>
        {/* ######################################################### */}
      </div>
    </div>
  );
}
