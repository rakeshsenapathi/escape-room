import WelcomePage from "./forms/WelcomePage/WelcomePage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import RulesPage from "./forms/RulesPage/RulesPage";
import TeamNameEntryPage from "./forms/TeamNameEntryPage/TeamNameEntryPage";
import IntroductionPage from "./forms/IntroductionPage/IntroductionPage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/rules'>
            <RulesPage />
          </Route>
          <Route path='/teamName'>
            <TeamNameEntryPage />
          </Route>
          <Route path='/introduction'>
            <IntroductionPage />
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
