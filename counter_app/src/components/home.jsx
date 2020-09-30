import React, { Component } from "react";

const Home = () => {
  return (
    <div>
      <h1 className="m-5 text-center">About Me</h1>
      <body className="text-center">
        My name is Jack Broncato(Legal name Jacob), and this is my website I am
        using to practice React.js/Node.js.
      </body>
      <body className="text-center">
        I got into Computer Science because I like building things, so this is
        more of a fun project than a professional website.
      </body>
      <h1 className="m-5 text-center">Relevant Links</h1>
      <body className="text-center">
        Github: <a href="https://github.com/jman11111">jman11111</a>
      </body>
      <body className="text-center">
        LinkedIn: <a href="https://github.com/jman11111">Jack Broncato</a>
      </body>
      <h1 className="m-5 text-center">About the Website</h1>
      <body className="text-center">
        The tech stack for this website is React.js frontend, Node.js backend,
        and MongoDB/Mongoose for database functionality. Source code{" "}
        <a href="https://github.com/jman11111/NodeBackend">here</a>
      </body>
    </div>
  );
};

export default Home;
