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
      <div>{percent < 20 && <p className="goDown"></p>}</div>
    </div>
  );
}

export default function Homepage() {
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
      const scrollLoc = scrollBody.current.scrollTop;
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
          }}
          className={`homepage-introduction ${textClass}`}
        >
          <p>
            In looking for a career that would satisfy my itch to problem solve,
            I found programming…
          </p>
          <p>
            I began programming by making games in Game Maker Language, and
            websites using Django. For the past 2 years I've built several
            full-stack applications utilizing vanilla JavaScript and React.
          </p>
          <p>
            My interests are in building applications and products that improve
            the user's quality of life.
          </p>
          <p>
            Today, the thought of working with a dedicated team who share my
            passion for coding motivate me to to do everything I can to make
            that a reality.
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
            "Designer",
            1000, // Waits 1s
            "Videogame Maker",
            1000, // Waits 1s

            // () => {
            //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
            // },
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="typeText2"
          style={{
            color: `rgba(${color},.85)`,
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
            "TOBY VAN BAAST",
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
          opacity: "50%",
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
      <div className="page-body">
        <div className="section" style={{ justifyContent: "space-between" }}>
          <div style={{ margin: "0 1em", textAlign: "left" }}>
            <h2 className="homepage-jumbo-text" style={{ marginBottom: "2em" }}>
              {/* I am{" "} */}
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
        <div className="greetings">
          <h2>
            <span style={{ marginRight: "1em" }} className={waive}>
              👋
            </span>
            Greetings!
          </h2>
        </div>

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
                height: "240px",
                width: "240px",
                border: `5px solid ${`rgba(${color},.5)`}`,
                borderBottom: `5px solid ${`rgba(${color},0`}`,
                borderTop: `5px solid ${`rgba(${color},0`}`,
              }}
            ></div>
            <div
              style={{
                marginTop: "-245px",
                marginLeft: "5px",
                borderRadius: "100%",
                height: "240px",
                width: "240px",
                backgroundImage: "url(../../Tobyvb1-no-bg.png)",
                backgroundPosition: "center",
                backgroundSize: "100%",
              }}
            ></div>
          </div>
        </div>
        <div className="homepage-icons-container">
          <h2 style={{ marginBottom: "0" }}>FIND ME ON</h2>
          <p style={{ margin: "0 auto 2em auto" }}>
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
