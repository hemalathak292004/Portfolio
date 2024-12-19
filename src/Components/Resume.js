import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWid(window.innerWidth);

    window.addEventListener("resize", handleResize);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dynamic scaling based on window width
  const scale = wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1;

  return (
    <div className='ResumePage'>
      {/* PDF Viewer */}
      <Document file={pdf} className="resumeview">
        <Page pageNumber={1} scale={scale} />
      </Document>

      {/* Download button */}
      <a href={pdf} target='_blank' download="Hemalatha's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp;Download CV</h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
