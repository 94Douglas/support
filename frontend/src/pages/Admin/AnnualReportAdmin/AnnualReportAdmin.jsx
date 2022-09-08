import React, { useState } from "react";
import { storage } from "../../../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";

function AnnualReportAdmin() {
  const [fileList, setFileList] = useState([]);

  const [fileUpload, setFileUpload] = useState(null);

  const fileListRef = ref(storage, "files/");

  const uploadFile = () => {
    if (fileUpload == null) return;

    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    toast.success("Filen är upplagd.");

    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
  };
  return (
    <div>
      <section>Ladda Upp Årsredovisning Admin Panel</section>
      <div className="container">
        <p>
          <input
            type="file"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadFile}>Upload File</button>
        </p>
        {/* {fileUrls.map((url) => {
            return <button onClick={() => openInNewTab(url)}>Öppna</button>;
            // return <button onClick={url}>Öppna</button>;
            // return <img src={url} />;
          })} */}
      </div>
    </div>
  );
}

export default AnnualReportAdmin;
