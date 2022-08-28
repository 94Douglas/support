import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footerBottom"
      style={{ position: "fixed", left: 0, bottom: 0, right: 0 }}
    >
      Created By <Link to="/createdBy">Douglas Schoug </Link>{" "}
      <AiOutlineCopyrightCircle />
    </div>
  );
}

export default Footer;
