import React from 'react';
import Header from "./components/header/header";
import Home from "./components/pages/home";
import Footer from "./components/footer/footer";
import ProjectPage from "./components/pages/projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"
        >
        <Home />
        </Route>
        <Route path="/:projectName"
        >
        <ProjectPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;