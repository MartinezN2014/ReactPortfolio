import React from 'react';

const AboutMe = () => {
  return (
    <section className='aboutMeWrapper'>
      <h1>About Me</h1>
      <img className='profileImage' src="/pfp.jpg" alt="My Photo" />
      <section>
        <h2>Experience</h2>

          <p>I recently graduated from UPENN bootcamp program where I worked on multiple projects and homework assignments in a agile environment.</p>
          <p>During my time there I managed to pick up on multiple skills such as HTML, CSS, and JavaScript.</p>
          <p>I also worked with MySql and MongoDB for backend work and even worked with React applications.</p>
       
      </section>
      <section>
        <h2>Fun Facts</h2>
        <p>I am always looking foward to learning new skills and techniques.
          I also love working with others so that I can learn from others as well.
        </p>
        <p>I also am big on video games and even compete in E-sports competitions.</p>
      </section>
    </section>
  );
};

export default AboutMe;