import WelcomePage from "./forms/WelcomePage/WelcomePage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import RulesPage from "./forms/RulesPage/RulesPage";
import TeamNameEntryPage from "./forms/TeamNameEntryPage/TeamNameEntryPage";
import IntroductionPage from "./forms/IntroductionPage/IntroductionPage";
import {
  CoffeeShopBackStoryPage,
  CoffeeShopBackStoryPage1,
  CoffeeShopBackStoryPage2,
  CoffeeShopBackStoryPage3
} from "./forms/CoffeeShopBackStoryPage";
import {
  CafePage,
  CafePage1,
  CafePage2,
  CafePage3,
  CafePage4,
  CafePageWifi
} from "./forms/CafePage";
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
          <Route path='/coffeeShopStory'>
            <CoffeeShopBackStoryPage />
          </Route>
          <Route path='/coffeeShopStory1'>
            <CoffeeShopBackStoryPage1 />
          </Route>
          <Route path='/coffeeShopStory2'>
            <CoffeeShopBackStoryPage2 />
          </Route>
          <Route path='/coffeeShopStory3'>
            <CoffeeShopBackStoryPage3 />
          </Route>
          <Route path='/cafe'>
            <CafePage />
          </Route>
          <Route path='/cafe1'>
            <CafePage1 />
          </Route>
          <Route path='/cafe2'>
            <CafePage2 />
          </Route>
          <Route path='/cafe3'>
            <CafePage3 />
          </Route>
          <Route path='/cafe4'>
            <CafePage4 />
          </Route>
          <Route path='/cafeWifi'>
            <CafePageWifi />
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
