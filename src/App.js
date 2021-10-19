import './App.css';
import Home from './component/Home';
import Tabledata from './component/Table';
import Formdata from './component/Formdata';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
     <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/formdata">formdata</Link>
            </li>
            <li>
              <Link to="/tabledata">Tabledata</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/tabledata">
              <Tabledata/>
            </Route>
            <Route path="/formdata">
                <Formdata/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
