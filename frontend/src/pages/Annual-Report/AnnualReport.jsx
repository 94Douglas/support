import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Muppar sig med API_URL
// import { API_URL } from '../../utils/constants';
import "./AnnualReport.css";
import { useSelector, useDispatch } from "react-redux";
import { storage } from "../../firebase/firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  FullMetadata,
} from "firebase/storage";
import { v4 } from "uuid";

function AnnualReport() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);
  const fileCounter = 1;

  const fileListRef = ref(storage, "files/");

  const fileName = fileUrls;

  const { user } = useSelector((state) => state.auth);

  const uploadFile = () => {
    if (fileUpload == null) return;

    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);

    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [fileCounter]);

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
              class="btn btn-outline-secondary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Se Årsredovisningar
            </a>
          </p>
          {fileUrls.map((url) => {
            return (
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  <button
                    class="btn btn-secondary"
                    onClick={() => openInNewTab(url)}
                  >
                    {/* {fileName} */}
                    Öppna Årsredovisning
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
