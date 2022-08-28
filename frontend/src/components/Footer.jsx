import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footerBottom"
      style={{ position: "fixed", left: 0, bottom: 0, right: 0 }}
    >
      Copyright <AiOutlineCopyrightCircle /> 2022 -  By <Link to="/createdBy"> Douglas Schoug </Link>
      
    </div>
  );
}

export default Footer;
