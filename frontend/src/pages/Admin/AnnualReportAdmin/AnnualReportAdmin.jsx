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
      <div className="input-group-center mb-3" style={{}}>
        <p>
          <input
          className="form-control mt-3"
            type="file"
            onChange={(event) => {
              setFileUpload(event.target.files[0]);
            }}
          />
          <button className="btn btn-outline-success mt-3" onClick={uploadFile}>Ladda Upp Fil</button>
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
