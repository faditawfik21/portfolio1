import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>This is a paragraph about me and my background.</p>
        </section>
        <section>
          <h2>My Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>Description of Project 1.</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Description of Project 2.</p>
            </li>
          </ul>
        </section>
        <div className="contact-form">
              <h2>Contact Me</h2>
              <form action="http://localhost:5000/contact" method="post">
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Message:
                  <textarea name="message" required></textarea>
                </label>
                <input type="submit" value="Submit" />
              </form>
        </div>
        {/* <section>
          <h2>Contact Me</h2>
          <p>You can reach me at myemail@example.com</p>
        </section> */}

      </main>
    </div>
  );
}

export default App;