import { Provider } from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import createStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const store = createStore();

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
