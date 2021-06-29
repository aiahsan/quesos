import './App.css';
import Home from './pages/home'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
function App() {
  return (
    <>
     <Router basename={process.env.PUBLIC_URL}>
    <Switch>
    <Route exact path="/">
              <Home />
            </Route>
    <Route exact path="/page1">
              <Page2 />
            </Route>
    <Route exact path="/page2">
              <Page3 />
            </Route>
    <Route exact path="/page3">
              <Page4 />
            </Route>
    <Route exact path="/page4">
              <Page5 />
            </Route>
    </Switch>
  </Router>
    </>
  );
}

export default App;
