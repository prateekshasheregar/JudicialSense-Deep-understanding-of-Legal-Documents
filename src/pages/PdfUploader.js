import React, { useState } from 'react';
import './UploadStyles.css'; // Import CSS for the Upload page

const PdfUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`File named "${file.name}" uploaded successfully!`);
      // Handle file upload logic here (e.g., sending to server or backend)
    } else {
      alert("Please select a PDF file before uploading.");
    }
  };

  return (
    <div className="upload-background"> {/* Apply background class here */}
      <div className="upload-content">
        <h1>Upload Your Legal Document</h1>
        <p>Select a PDF file to upload for review and analysis.</p>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="file-input"
        />
        <button onClick={handleUpload} className="upload-btn">
          Upload PDF
        </button>
      </div>
    </div>
  );
};

export default PdfUploader;
