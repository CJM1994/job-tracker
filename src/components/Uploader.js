import { useState } from "react";

export default function Uploader() {

  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelected = event => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <input type='file' onChange={fileSelected}></input>
      <button>Upload File</button>
    </>
  )

};