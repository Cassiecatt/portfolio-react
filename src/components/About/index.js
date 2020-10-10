import React from "react";
import profilePic from "../../assets/portfolio-pic.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img
            src={profilePic}
            className="my-2"
            style={{ width: "10%" }}
            alt="cover"
          />
        </div>
        <h4>Currently:</h4>
        <p>
          As a digital marketing expert who specializes in local SEO, I strive
          to develop impactful strategies for clients to ensure their business
          goals are met. I enjoy collaborating with various departments,
          learning new skills and being challenged to think outside the box in
          order to achieve. Some of my specialities include: Technical and local
          SEO, link building, IA design and restructures, content development
          strategies, relationship building and data presenting.
        </p>
        <br/>
        <h4>Working towards:</h4>
        <p>
          In an effort to grow my skill sets, I am taking a leap into the
          development world by pursing a certificate of completion through The
          University of Arizona’s Full Stack Development Boot Camp. My goal is
          to then pivot my career path and obtain a more development focused
          role. I am currently learning: HTML5, CSS3, Javascript, JQuery,
          Bootstrap, Express.js, React.js, Node.js, MongoDB, MySQL and more.
        </p>
      </div>
    </section>
  );
}

export default About;
