import "./App.css";
// import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import User from "./components/User/index.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Main />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
