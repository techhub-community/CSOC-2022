import React from 'react';
import ReactDOM from 'react-dom';
import NAV from "./components/navbar/App.jsx";
import LOADER from './components/Loading/loading.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from 'components/Main-page/HomePage.jsx';
import RegistrationForm from 'components/Form/RegistrationForm';


const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");

export default function AppRouting() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<><NAV /><HomePage /></>} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router >
  );
}


ReactDOM.render(
  <div>
    <AppRouting />
  </div>,
  rootElement
);

ReactDOM.render(
  <React.Fragment>
    <LOADER />
  </React.Fragment>,
  footer
);
