import React from 'react';
//import { Link, Route } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
//import Employees from "./Employees";
import AboutUs from "./AboutUs";

class App extends React.Component {
  render() { 
    return (
    <div>
      <Header />
      <Body />
      <Footer />
      <Switch>
<Route exact path="/emp" component={AboutUs} />
</Switch>
    </div >
    );
  }
}

export default App;

/* the original code snippet
<Switch>
<Route path="/emp" exact component={AboutUs} />
</Switch>
*/