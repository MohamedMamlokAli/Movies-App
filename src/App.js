import './App.css';
import Nav from "./components/NavB"
import Home from "./components/Home"
import {BrowserRouter,Switch,Route} from "react-router-dom"
function App() {
  return (
    <div>
        <BrowserRouter> 
           <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
