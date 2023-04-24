import { useEffect, useState, useRef } from "react";
import { UilFileDownload } from "@iconscout/react-unicons";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  window.open("url(../../resume-4-24-23.pdf", "_blank")
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".3em",
                }}
              >
                <span>
                  <UilFileDownload size="30" color="white" />
                </span>{" "}
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
              src="../../resume-4-24-23.png"
            />
            <div className="resume-btn-container">
              <a
                className="resume-btn"
                onClick={() =>
                  window.open("url(../../resume-4-24-23.pdf", "_blank")
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".3em",
                }}
              >
                <span>
                  <UilFileDownload size="30" color="white" />
                </span>{" "}
                download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
