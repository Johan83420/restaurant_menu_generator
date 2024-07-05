import React from 'react';

function PDFDownloadButton() {
  const handleDownload = () => {
    // Implement PDF download functionality here
    alert('PDF download functionality to be implemented');
  };

  return (
    <button onClick={handleDownload} className="pdf-download-button">
      Download Menu as PDF
    </button>
  );
}

export default PDFDownloadButton;