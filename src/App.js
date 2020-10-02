import React from 'react';
import Header from "./components/header/header";
import Home from "./components/pages/home";
import Footer from "./components/footer/footer";
import ProjectPage from "./components/pages/projects";
import { Route, Router, Switch } from "wouter";


function App() {
  
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/:name" component={ProjectPage}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
