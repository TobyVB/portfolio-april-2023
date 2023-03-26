import { useEffect, useState } from "react";
export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);

  const projectData = [
    {
      path: "https://user-images.githubusercontent.com/98196156/221370173-e6f67b4e-ae06-41b4-8b98-82f5f365e61e.png",
      size: "100%",
      title: "The TalkSpace",
      info: "This is an ongoing project I am working on. It is a social media site inspired by Reddit, Facebook, Myspace, Quora and Github",
      github: "https://github.com/TobyVB/Talkspace",
      demo: "https://fir-practice-cace4.web.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/221128205-2bbbedc7-b11a-4072-9a97-baa6f2c300cc.jpg",
      size: "40%",
      title: "SuperChat",
      info: "SuperChat is a chatroom web app that utilizes google authentication. I completed this project as a code-along by Fireship",
      github: "https://github.com/TobyVB/SuperChat",
      demo: "https://superchat-aa35f.web.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/221082488-c0eec32b-a125-489c-9857-64e5014e9118.jpg",
      size: "40%",
      title: "Quiz App",
      info: "This Quiz web app uses an API provided from the Open Trivia website. Users can filter questions by count, type, category, and difficulty. Users are then scored by number of correct selected answers.",
      github: "https://github.com/TobyVB/Quiz-App",
      demo: "https://quiz-app-29f85.web.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/226163163-48309ea3-a83e-45c9-983d-8087bc28e2b0.png",
      size: "100%",
      title: "Movie DB App",
      info: "This movie database web app uses an API provided from the The Movie Database website.",
      github: "https://github.com/TobyVB/movieDB",
      demo: "https://tobyvb-movie-db.vercel.app/",
    },
    {
      path: "https://user-images.githubusercontent.com/98196156/226164053-2a55833c-6c09-42c9-9514-e9d665980a7f.png",
      size: "100%",
      title: "Blog App",
      info: "This Blog web app was made by following the NextJS documentation",
      github: "https://github.com/TobyVB/Blog",
      demo: "https://tobyvbsblog.vercel.app/",
    },
  ];

  function ProjectsArray() {
    return projectData.map((project, index) => {
      return (
        <div key={index}>
          {/* INFO */}
          {/* <div
            style={{
              width: "100%",
              display: `${open !== project.title ? "none" : ""}`,
            }}
          >
            <div
              onClick={() => setOpen(false)}
              style={{
                // position: "fixed",
                width: "350px",
                padding: "1em",
                borderRadius: "3px",
                left: "0",
                right: "0",
                top: "50%",
                margin: "auto",
                background: "black",
                zIndex: "1",
                background: "rgba(0,0,0,.2)",
                color: "white",
                border: "1px solid white",
              }}
            >
              {project.info}
            </div>
          </div> */}
          {/* END-INFO */}

          <h3>{project.title}</h3>

          <div
            className="project-outer"
            style={{
              margin: "auto auto 3em auto",
              overflow: "hidden",
            }}
          >
            <div
              className={
                project.size === "40%"
                  ? "project-mobile-inner"
                  : "project-inner"
              }
              style={{
                borderRadius: "5px",
                backgroundImage: `url(${project.path})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "auto",
              }}
            >
              {" "}
              <div
                style={{
                  width: "100%",
                  display: `${open !== project.title ? "none" : ""}`,
                }}
              >
                <div
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "1em",
                    background: "rgba(0,0,0,0.85)",
                    zIndex: "1",
                    color: "white",
                    height: "50vw",
                    textAlign: "left",
                  }}
                >
                  {project.info}
                </div>
              </div>
            </div>
            {open !== project.title && (
              <div
                className="project-btn-containers"
                style={{
                  margin: "0 auto auto",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div
                  className="project-btn"
                  onClick={() => window.open(`${project.github}`, "_blank")}
                >
                  <a>github</a>
                </div>
                <div
                  onClick={() => setOpen(project.title)}
                  className="project-btn circle"
                >
                  <a>?</a>
                </div>

                <div
                  className="project-btn"
                  onClick={() => window.open(`${project.demo}`, "_blank")}
                >
                  <a>demo</a>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div
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
      <div style={{ padding: "10em 0 1em 0" }}>
        <h2 style={{ lineHeight: "0" }}>My Projects</h2>
        <p>Some projects I made</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3em",
          margin: "5em 0",
        }}
      >
        <ProjectsArray />
      </div>
    </div>
  );
}
