import React from "react";

const Resume = () => {
  return (
    <div className="resumeWrapper">
      <h1>Resume</h1>
      <p className="resumeError">Resume download not available on mobile</p>
      <embed className="resume"
        src="https://docs.google.com/document/d/1-IaFHHlzo36i47LcvP6on3YxFrFZtFxXo6VvKC1pywo/edit?usp=sharing"
        type="application/pdf"
        width="90%"
        height="800px"
      />
    </div>
  );
}

export default Resume;