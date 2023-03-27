import { useEffect, useState, useRef } from "react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        style={{
          opacity: "35%",
          backgroundPosition: "center",
          backgroundImage: "url(../../background/starrysky.jpg)",
          display: "block",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
          backgroundSize: "100%",
        }}
      ></div>
      <div>
        <div style={{ padding: "5em 0 5em 0" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   margin: "auto",
            }}
          >
            {/* <div className="resume-btn-container">
              <button onClick className="resume-btn">download</button>
            </div> */}
            <div className="resume-btn-container">
              <a
                className="resume-btn"
                onClick={() =>
                  window.open("url(../../resume-march-2023.pdf", "_blank")
                }
              >
                download
              </a>
            </div>
            <img
              style={{
                border: "1px solid rgb(38, 159, 235)",
                margin: "auto",
                backgroundPosition: "center",
                maxHeight: "150vh",
                maxWidth: "80vw",
                objectFit: "contain",
              }}
              src="../../resume-march-2023.jpg"
            />
            <div className="resume-btn-container">
              <a
                className="resume-btn"
                onClick={() =>
                  window.open("url(../../resume-march-2023.pdf", "_blank")
                }
              >
                download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
