import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./draganddrop.css";
const axios = require("axios");

const DragAndDrop = () => {
  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <img
        src={file.preview}
        style={{ width: "200px", margin: "10px 0" }}
        alt="preview"
      ></img>
      <h4>{caption}</h4>
    </div>
  ));

  let uploadFile = async () => {
    console.log(files[0]);
    let data = new FormData();
    data.append("image", files[0], files[0].name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8000/api/model", data, config)
      .then((response) => {
        console.log(response.data);
        setCaption(response.data.data.caption);
      })
      .catch((error) => {});
  };

  return (
    <>
      <div
        {...getRootProps()}
        className="drop-area"
        style={{ width: "50vw", height: "200px" }}
      >
        <input {...getInputProps()} />
        <p>
          Click Here to upload image
          <br />
          OR
          <br />
          Drop files here
        </p>
      </div>
      <button onClick={uploadFile}>Upload</button>

      {images}
    </>
  );
};

export default DragAndDrop;
