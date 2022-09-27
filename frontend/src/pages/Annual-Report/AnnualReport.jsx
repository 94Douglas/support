import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "./AnnualReport.css";
import { useSelector, useDispatch } from "react-redux";
import { storage } from "../../firebase/firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import { v4 } from "uuid";

function AnnualReport() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);
const counter = 0;
  const fileListRef = ref(storage, "files/");

  const fileName = fileUrls;

  const { user } = useSelector((state) => state.auth);

  const DeleteAnnualPost = (url) => {

    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, url);

    // Delete the file
    deleteObject(desertRef).then(() => {
      toast.success("Fil borttagen!");
    }).catch((error) => {
      toast.error("Något gick snett..");
      console.log(error);
    });
  }

  const getName = (url) => {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, url);

    return desertRef;
  }

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="heading">
        <h1>Årsredovisning - Olovs Hage Samfällighet</h1>

        <div>
          <p>
            <a
              className="btn btn-outline-secondary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Se Årsredovisningar
            </a>
          </p>
          {fileUrls.map((url, key) => {
            return (
              <div className="collapse" id="collapseExample" key={key}>
                <div className="card card-body">
                
                  <button
                    className="btn btn-secondary"
                    onClick={() => openInNewTab(url)}
                  >
                    Öppna Årsredovisning
                  </button>
                  <button
                    className="btn btn-secondary" key={key}
                    onClick={() => DeleteAnnualPost(url)}
                  >
                    Raddera
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* https://www.youtube.com/watch?v=Y-VgaRwWS3o 
        https://www.youtube.com/watch?v=EVOFt8Its6I
        https://www.youtube.com/watch?v=JwGcP5RcgQg
      */}
      </section>
    </>
  );
}

export default AnnualReport;
