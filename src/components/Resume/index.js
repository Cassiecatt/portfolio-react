import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Explore my <a href="https://www.linkedin.com/in/cassie-cattabiani-8a529610a/">resume</a>
        </p>
        <h3>Front-end Skills</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
        <h3>Back-end Skills</h3>
        <ul className="skills">
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>NoSQL, MongoDB, Mongoose</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;