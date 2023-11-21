import React from "react";

const Resume = () => {
  return (
    <div className="resumeWrapper">
      <h1>Resume</h1>
      <p className="resumeError">Resume download not available on mobile</p>
      <embed className="resume"
        src="https://docs.google.com/document/d/1tHxIiEnLKqhVJs3hMmLTCU1sQCWF2Cl-If6FzLO_e3g/edit"
        type="application/pdf"
        width="90%"
        height="800px"
      />
    </div>
  );
}

export default Resume;