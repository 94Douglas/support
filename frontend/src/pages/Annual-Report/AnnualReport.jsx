import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BsTrash } from "react-icons/bs";
import "./AnnualReport.css";
import { useSelector } from "react-redux";
import { storage } from "../../firebase/firebase";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

function AnnualReport() {
  const [fileUrls, setFileUrls] = useState([]);
  const fileListRef = ref(storage, "files/");

  // const fileName = fileUrls;

  const { user } = useSelector((state) => state.auth);

  const DeleteAnnualPost = (url) => {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, url);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        toast.success("Fil borttagen!");
      })
      .catch((error) => {
        toast.error("Något gick snett..");
        console.log(error);
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
                    style={{
                      width: "50%",
                      alignSelf: "center",
                    }}
                    onClick={() => openInNewTab(url)}
                  >
                    Öppna Årsredovisning
                  </button>
                  {user ? (
                    user.isAdmin ? (
                      <button
                        className="btn btn-danger"
                        style={{
                          width: "10%",
                          position: "absolute",
                          top: "0px",
                          right: "0px",

                          // marginTop: "5px",
                          // marginBottom: "5px",
                          // position: "relative",
                        }}
                        key={key}
                        onClick={() => DeleteAnnualPost(url)}
                      >
                        <BsTrash
                          style={{
                            marginLeft: "2px",
                          }}
                        />
                      </button>
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
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
