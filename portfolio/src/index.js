import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Copyright from './Copyright';
import Projects from './Projects';
import Contact from './Contact'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const copyright = ReactDOM.createRoot(document.getElementById('copyright'));
copyright.render(
  <React.StrictMode>
    <Copyright />
  </React.StrictMode>
);

const contact = ReactDOM.createRoot(document.getElementById('contacts'));
contact.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

const projects = ReactDOM.createRoot(document.getElementById('printProjects'));
projects.render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
