import React from "react";
import { TourList } from "./Tours/index";

function Tours() {
  return (
    <div className="tours-page">
      <h1
        style={{
          padding: "3.2rem 0 ",
          backgroundColor: "#ff7601",
          color: "#fff",
          marginBottom: "4.8rem",
          fontSize: "3.2rem",
        }}
      >
        Our Tours
      </h1>
      <TourList />
    </div>
  );
}

export default Tours;
