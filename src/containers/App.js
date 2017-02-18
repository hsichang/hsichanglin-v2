import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <Contact />
      </div>
    );
  }
}

class Hero extends Component {

  render() {
    return (
      <header className="hero">
        <div className="screen">
        </div>
        <div className="banner">
          Hsi-Chang Lin
          <div className="sub-banner">
            Front-End Web Developer
          </div>
        </div>
      </header>
    )
  }
}

class About extends Component {
  render() {
    return (
      <section className="about">
        <h1>
          About me
        </h1>
        <div className="divider">
        </div>
        <p>
          I am an NYC based Front End Web Developer.
        </p> 
        <p>
          At NowThis, my work is primarily focused on building cutting edge web applications using Node, Angular.js, React, Flux and HTML5.
        </p>
        <p>
          I am also a course instructor at General Assembly, where I teach the "Programming for Non-Programmers" bootcamps and workshops.
        </p>
      </section>
    )
  }
}

class Contact extends Component {
  render() {
    return (
      <section className="contact">

      </section>
    )
  }
}

export default App;
