import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import { Switch } from "react-router"
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/home" render = {(routerprops) => <Home/>}/>
            <Route path="/plants"/>
            <Route path="plants/new"/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
