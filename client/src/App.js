import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage";
import SignIn from "./components/Pages/Sign In/Signin";
import Register from "./components/Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={SignIn} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
