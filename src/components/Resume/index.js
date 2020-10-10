import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <h3>Front-end</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
        <h3>Back-end</h3>
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