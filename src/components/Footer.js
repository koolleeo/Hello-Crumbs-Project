import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com" target="_blank">
          <Instagram />
        </a>
        <a href="https://facebook.com" target="_blank">
          <Facebook />
        </a>
        <a href="mailto:hello-crumbs@gmail.com" target="_blank">
          <AlternateEmailIcon />
        </a>
      </div>
      <p>Copyright 2023</p>
    </div>
  );
}

export default Footer;
