import "./App.css";
//react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
//context
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
