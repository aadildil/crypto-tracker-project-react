import React from "react";
import "./style.css";
import Button from "../Button";
import TemporaryDrawer from "./drawer.js";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <h1 className="logo">
          CoinWaves <span style={{ color: "var(--blue)" }}>.</span>{" "}
        </h1>
        <div className="links">
          <a className="link" href="/">
            Home
          </a>
          <a className="link" href="/">
            Compare
          </a>
          <a className="link" href="/">
            WatchList
          </a>
          <Button
            text={"DashBoard"}
            clickFunction={() => {
              console.log("clicked");
            }}
            outlined={false}
          />
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </div>
    </div>
  );
};
export default Header;
