import React from "react";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import assetsURL from "../utils/Assets";

export default function CustomCarousel({ images, displayImageIndex, setDisplayImageIndex }) {
  return (
    <div
      style={{
        height: "10vh",
        width: "75%",
        backgroundColor: "#D3D3D3",
        borderBottomLeftRadius: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "8%",
          backgroundColor: "#6F6E6E",
          borderBottomLeftRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          if (!(displayImageIndex == 0)) {
            setDisplayImageIndex(displayImageIndex - 1);
          }
        }}
      >
        <ArrowLeftIcon sx={{ height: "28px", color: "#FFFFFF" }} />
      </div>
      <div
        style={{
          height: "100%",
          width: "84%",
          backgroundColor: "#999999",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          overflow: "scroll",
        }}
      >
        {images.map((_, index) => (
          <div
            style={
              index == displayImageIndex
                ? {
                    borderColor: "#FFFFFF",
                    borderStyle: "solid",
                    borderWidth: "4px",
                    height: "100%",
                    width: "18%",
                  }
                : {
                    height: "100%",
                    width: "18%",
                  }
            }
            onClick={() => {
              setDisplayImageIndex(index);
            }}
          >
            <img
              src={assetsURL(_)}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          height: "100%",
          width: "8%",
          backgroundColor: "#6F6E6E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          if (!(displayImageIndex == images.length - 1)) {
            setDisplayImageIndex(displayImageIndex + 1);
          }
        }}
      >
        <ArrowRightIcon sx={{ height: "28px", color: "#FFFFFF" }} />
      </div>
    </div>
  );
}
