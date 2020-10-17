import React from 'react';
import Header from "./components/header/header";
import Home from "./components/pages/home";
import LoadingPage from "./components/pages/loading";
import Footer from "./components/footer/footer";
import ProjectPage from "./components/pages/projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App({ isActive }) {
  // const [ loading, setLoading ] = useState(true);
  // const Home = lazy(() => import('./components/pages/home'));
  // const ProjectPage = lazy(() => import('./components/pages/projects'));
  // function isLoading() {
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   isLoading();
  //   console.log('in', loading);
  // },[loading])

  return (
    <Router>
      <Header />
      <Switch>
        {/* <Suspense fallback={LoadingPage}> */}
        <Route exact path="/">
          <LoadingPage
          // active={isActive}
          />
          <Home />
        </Route>
        <Route path="/:projectName"
        >
          <ProjectPage />
        </Route>
        {/* </Suspense> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;