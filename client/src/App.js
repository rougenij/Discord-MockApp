import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Pages/Homepage/Homepage";
import SignIn from "./components/Pages/Sign In/Signin";
import Register from "./components/Pages/Register/Register";
import Chat from "./components/Pages/MainChat/Chat";
import StartNewConvo from "./components/Pages/StartNewConvo/StartNewConvo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={SignIn} />
            <Route path="/register" exact component={Register} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/allusers" exact component={StartNewConvo} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
