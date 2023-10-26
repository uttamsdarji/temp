/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttons = ({ type, className, text = "Marked RSVP", textClassName, text1 = "Added to Calendar" }) => {
  return (
    <div className={`buttons ${type} ${className}`}>
      {(type === "banner-button-blue" ||
        type === "banner-button-white" ||
        type === "onboarding-active" ||
        type === "onboarding-inactive" ||
        type === "primary-button" ||
        type === "secondary-button-active" ||
        type === "secondary-button-inactive") && (
        <div className={`text ${textClassName}`}>
          {["onboarding-active", "onboarding-inactive"].includes(type) && <>Let’s Dive Back In</>}

          {["banner-button-blue", "banner-button-white"].includes(type) && <>Join Your Group</>}

          {type === "primary-button" && <>{text}</>}

          {["secondary-button-active", "secondary-button-inactive"].includes(type) && <>{text1}</>}
        </div>
      )}

      {type === "secondary-button-with-icon" && (
        <>
          <img
            className="img"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/frame-37.svg"
          />
          <div className="text-wrapper-3">Sign Out</div>
        </>
      )}
    </div>
  );
};

Buttons.propTypes = {
  type: PropTypes.oneOf([
    "secondary-button-active",
    "primary-button",
    "secondary-button-inactive",
    "banner-button-white",
    "secondary-button-with-icon",
    "onboarding-inactive",
    "onboarding-active",
    "banner-button-blue",
  ]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
