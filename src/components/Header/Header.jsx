/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({
  type,
  className,
  soulsideLogoT = "https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/soulside-logo-2-t.svg",
  formkitHelp = "https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/formkit-help.svg",
  frameClassName,
}) => {
  return (
    <div className={`header ${className}`}>
      <img
        className="soulside-logo-t"
        alt="Soulside logo t"
        src={
          type === "tabs"
            ? soulsideLogoT
            : "https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/soulside-logo-2-t-1.svg"
        }
      />
      <div className="content">
        <img
          className="formkit-help"
          alt="Formkit help"
          src={
            type === "no-tabs"
              ? "https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/formkit-help.svg"
              : formkitHelp
          }
        />
        <div className="dropdown">
          <div className={`frame ${type === "tabs" ? frameClassName : undefined}`} />
        </div>
      </div>
      {type === "tabs" && (
        <div className="group">
          <div className="text-wrapper">Gems</div>
          <div className="div">
            <div className="text-wrapper-2">Dashboard</div>
            <img
              className="line"
              alt="Line"
              src="https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/line-2.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.oneOf(["no-tabs", "tabs"]),
  soulsideLogoT: PropTypes.string,
  formkitHelp: PropTypes.string,
};
