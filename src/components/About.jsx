import { useEffect, useState, useRef } from "react";
import GitHubCalendar from "react-github-calendar";

function Percentage() {
  const [percent, setPercent] = useState();
  const [pos, setPos] = useState("arrowAnim");

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
      {/* <p style={{ fontSize: "2rem" }}>{Math.ceil(percent)}%</p> */}
      <p>{percent < 20 && <div className="goDown"></div>}</p>
    </div>
  );
}

export default function About() {
  const color = "38,159, 235";

  const scrollBody = useRef();
  const contentRef = useRef();
  const [background, setBackground] = useState("bg-before");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  // skills data
  const [animateClass, setAnimateClass] = useState("");
  let added = false;
  useEffect(() => {
    const interval = setInterval(() => {
      const skills = document.querySelector(".about-items-container");
      const skillsLoc = skills.getBoundingClientRect().top;
      const scrollLoc = scrollBody.current.scrollTop - 150;
      console.log("scroll " + scrollLoc + " text: " + skillsLoc);
      if (skillsLoc > scrollLoc + 700) {
        if (added) {
          added = false;
          setAnimateClass("");
          setBackground("homepage-bg-after");
        }
      } else if (skillsLoc < scrollLoc + 700 && scrollLoc - skillsLoc < 1000) {
        if (!added) {
          added = true;
          setAnimateClass("animateSkill");
          setBackground("homepage-bg");
        }
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  const skillData = [
    {
      name: "url(../../tech-stack-icons/javascript.svg)",
      size: "50%",
      delay: ".15s",
    },
    {
      name: "url(../../tech-stack-icons/nodejs-icon.svg)",
      size: "45%",
      delay: ".30s",
    },
    {
      name: "url(../../tech-stack-icons/react.svg)",
      size: "50%",
      delay: ".45s",
    },
    {
      name: "url(../../tech-stack-icons/mongodb-icon.svg)",
      size: "25%",
      delay: ".6s",
    },
    {
      name: "url(../../tech-stack-icons/nextjs-icon.svg)",
      size: "50%",
      delay: ".75s",
    },
    {
      name: "url(../../tech-stack-icons/git-icon.svg)",
      size: "50%",
      delay: ".9s",
    },
    {
      name: "url(../../tech-stack-icons/firebase.svg)",
      size: "30%",
      delay: "1.05s",
    },
    {
      name: "url(../../tech-stack-icons/jquery.svg)",
      size: "60%",
      delay: "1.2s",
    },
  ];

  const toolData = [
    {
      name: "url(../../tech-stack-icons/visual-studio-code.svg)",
      size: "50%",
      delay: "2.5s",
    },
    {
      name: "url(../../tech-stack-icons/postman-icon.svg)",
      size: "50%",
      delay: "2.65s",
    },
    {
      name: "url(../../tech-stack-icons/heroku-icon.svg)",
      size: "50%",
      delay: "2.8s",
    },
    {
      name: "url(../../tech-stack-icons/vercel.svg)",
      size: "65%",
      delay: "2.95s",
    },
    {
      name: "url(../../tech-stack-icons/vite.svg)",
      size: "50%",
      delay: "3.1s",
    },
  ];

  function Skills() {
    return skillData.map((skill) => {
      return (
        <div className={`about-item-container`}>
          <div
            className={`about-item ${animateClass}`}
            style={{
              borderRadius: "5px",
              backgroundImage: `${skill.name}`,
              backgroundPosition: "center",
              backgroundSize: `${skill.size}`,
              backgroundRepeat: "no-repeat",
              animationDelay: `${skill.delay}`,
            }}
          ></div>
        </div>
      );
    });
  }

  function Tools() {
    return toolData.map((tool) => {
      return (
        <div className="about-item-container">
          <div
            className={`about-item ${animateClass}`}
            style={{
              borderRadius: "5px",
              backgroundImage: `${tool.name}`,
              backgroundPosition: "center",
              backgroundSize: `${tool.size}`,
              backgroundRepeat: "no-repeat",
              animationDelay: `${tool.delay}`,
            }}
          ></div>
        </div>
      );
    });
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
      <div ref={contentRef}>
        <div style={{ padding: "10em 0 5em 0" }}>
          <div className="section">
            <div
              style={{
                maxWidth: "500px",
                fontSize: "1.25rem",
                textAlign: "left",
                margin: "0 auto",
                width: "90%",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Who am I?</h2>
              <p>
                Hi Everyone, I am <span className="clr-1">Toby Van Baast</span>{" "}
                from <span className="clr-1">Austin, Texas</span>.
              </p>
              <p>
                I am a self-taught developer who has spent most of and the
                majority of my days the past several years coding.
              </p>
              <p style={{ paddingTop: "1em" }}>
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li>Learning about new technology</li>
                <li>Learning about performance psychology</li>
                <li>
                  Trying new foods and seeing new venues for entertainment and
                  recreation
                </li>
              </ul>
            </div>
            <div
              className="about-pic"
              style={{
                backgroundImage: "url(../../Innovation-amico.png)",
                backgroundSize: "100%",
                margin: "0 auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
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
          <div style={{ margin: "0 auto" }}>
            <h2 className="item-container-title">
              <span className="clr-1">Skillset</span>
            </h2>
            <div className="about-items-container">
              <Skills />
            </div>
          </div>
          <div>
            <h2 className="item-container-title">
              <span className="clr-1">Tools</span> I use
            </h2>
            <div className="about-items-container">
              <Tools />
            </div>
          </div>
          <div style={{ width: "80%", margin: "0 auto", overflow: "scroll" }}>
            <h2>
              <span style={{ color: `rgb(${color})` }}>Git</span> Activity
            </h2>
            <GitHubCalendar
              username="TobyVB"
              color="rgb(38, 159, 235)"
              // color="rgb(105, 205, 235)"
              className="cheese"
              style={{ margin: "0 auto" }}
              // transformData={selectLastHalfYear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
