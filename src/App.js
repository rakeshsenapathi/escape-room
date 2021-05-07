import WelcomePage from "./forms/WelcomePage/WelcomePage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import RulesPage from "./forms/RulesPage/RulesPage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/rules'>
            <RulesPage />
          </Route>
          <Route path='/'>
            <WelcomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
