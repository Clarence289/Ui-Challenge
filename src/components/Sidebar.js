// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const handleDownloadCV = () => {
    // Add the path to your CV file in the href attribute
    const cvFilePath = '/path-to-your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.target = '_blank';
    link.download = 'your-cv.pdf'; // Specify the filename for download
    link.click();
  };

  return (
    <aside className="sidebar">
      <div className="upside-down-text" onClick={handleDownloadCV}>Download&nbsp;CV</div>
      <div className="upside-down-text">Client&nbsp;Review</div>
      <div className="upside-down-text">My&nbsp;Process</div>
    </aside>
  );
}

export default Sidebar;
