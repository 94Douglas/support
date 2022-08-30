import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import axios from "axios";
// Muppar sig med API_URL
// import { API_URL } from '../../utils/constants';
import "./AnnualReport.css";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";

function AnnualReport(props) {

  return (
    <>
      <section className="heading">
        <h1>Årsredovisning</h1>
        <p><UnderConstruction /></p>

        {/* https://www.youtube.com/watch?v=Y-VgaRwWS3o */}
      </section>
   </>   
  );
}

export default AnnualReport;
