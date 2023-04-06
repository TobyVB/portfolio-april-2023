import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);
  const projectData = useLoaderData();

  function ProjectsArray() {
    return projectData.map((project, index) => {
      return (
        <div key={index}>
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
                  marginTop: "-1em",
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
        className="bg-starter"
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
      <div style={{ padding: "10em 0 1em 0" }}>
        <h2 style={{ color: "rgba(38, 159, 235, 1)", lineHeight: "0" }}>
          My Projects
        </h2>
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
