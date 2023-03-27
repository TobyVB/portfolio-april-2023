import { useEffect, useState } from "react";
export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const [open, setOpen] = useState(false);

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

  //   function aspectRatio(startW, startH, scale) {
  //      return console.log("new width ="+startW*scale+", new height ="+startH*scale)
  //   }
  function ProjectsArray() {
    return projectData.map((project) => {
      return (
        <>
          <h3>{project.title}</h3>

          <div
            className="project-outer"
            style={{
              width: "392px",
              height: "252px",
              margin: "auto auto 3em auto",
              overflow: "hidden",
              paddingTop: "1em",
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
                width: "364px",
                height: "234px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "auto",
              }}
            ></div>
            <div
              className="project-btn-containers"
              style={{
                margin: "0 auto auto",
                position: "absolute",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "space-between",
                gap: "3em",
              }}
            >
              <div className="project-btn">
                <a onClick={() => window.open(`${project.github}`, "_blank")}>
                  github
                </a>
              </div>
              {/* <div className="project-btn">
                <a onClick={() => setOpen(project.title)}>?</a>
              </div> */}

              {/* <div
                style={{
                  width: "100%",
                  display: `${open !== project.title ? "none" : ""}`,
                }}
              >
                <div
                  style={{
                    position: "fixed",
                    width: "400px",
                    padding: "1em",
                    borderRadius: "3px",
                    left: "0",
                    right: "0",
                    top: "50%",
                    margin: "auto",
                    background: "black",
                  }}
                >
                  {project.info}
                </div>
              </div> */}

              <div className="project-btn">
                <a onClick={() => window.open(`${project.demo}`, "_blank")}>
                  demo
                </a>
              </div>
            </div>
          </div>
        </>
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
      <div className="about-items-container2">
        <ProjectsArray />
      </div>
    </div>
  );
}
