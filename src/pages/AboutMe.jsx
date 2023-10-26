import React from 'react';

const AboutMe = () => {
  return (
    <section className='aboutMeWrapper'>
      <h1>About Me</h1>
      <img className='profileImage' src="/pfp.jpg" alt="My Photo" />
      <section>
        <h2>Experience</h2>
        <ul>
          <li>Currently enrolled in a full-stack development program at UPenn</li>
          <li>Did around 6 years of warehouse work and even learned to drive forklifts</li>
        </ul>
      </section>
      <section>
        <h2>Fun Facts</h2>
        <ul>
          <li>Esports Competitor</li>
          <li>Built my own PC</li>
          <li>Love to play video games</li>
        </ul>
      </section>
    </section>
  );
};

export default AboutMe;