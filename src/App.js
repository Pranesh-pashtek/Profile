import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ToggleColorMode from "./Pages/sample";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample";
import ReactRedux from "./Pages/ReactRedux";
import Advance_react from "./Pages/Advance_react";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/ReactRedux" component={ReactRedux} />
            {/* <Route exact path="/sample" component={ToggleColorMode} /> */}
            <Route exact path="/form-example" component={FormExample} />
            <Route exact path="/Advance_react" component={Advance_react} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
// Advance_react