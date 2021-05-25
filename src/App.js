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
  CafePageMenu,
  CafePageWifi,
  CafePagePostCoffee
} from "./forms/CafePage";
import {
  OfficeInsidePage,
  OfficeInsidePage1,
  OfficeInsidePage2,
  OfficeInsidePage3,
  OfficePage,
  OfficePage1,
  OfficePage2,
  OfficePage3,
  OfficesLocation,
  OfficesLocation1,
  OfficesLocation2,
  OfficesLocation3,
  OfficesLocation4
} from "./forms/OfficePage";
import {
  QRLeadsPage, QRLeadsPage1, QRLeadsPageInsta
} from "./forms/QRLeadsPage";
import {
  PhishingEmailCompose,
  PhishingEmailPage,
  PhishingEmailInvitation,
  PhishingEmailInvitation1,
  PhishingEmailInvitation2
} from "./forms/PhishingEmailPage";
import {
  FakeInvitation, FakeInvitation1, FakeInvitationRiddlePuzzle, FakeInvitationSafe, FakeInvitationSafe1, FakeInvitationSafe2
} from "./forms/FakeInvitationPage";
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
          <Route path='/cafeMenu'>
            <CafePageMenu />
          </Route>
          <Route path='/cafePostCoffee'>
            <CafePagePostCoffee />
          </Route>
          <Route path="/office-outside">
            <OfficePage />
          </Route>
          <Route path="/office-outside-1">
            <OfficePage1 />
          </Route>
          <Route path="/office-outside-2">
            <OfficePage2 />
          </Route>
          <Route path="/office-outside-3">
            <OfficePage3 />
          </Route>
          <Route path="/office-inside">
            <OfficeInsidePage />
          </Route>
          <Route path="/office-inside-1">
            <OfficeInsidePage1 />
          </Route>
          <Route path="/office-inside-2">
            <OfficeInsidePage2 />
          </Route>
          <Route path="/office-inside-3">
            <OfficeInsidePage3 />
          </Route>
          <Route path="/office-location">
            <OfficesLocation />
          </Route>
          <Route path="/office-location-1">
            <OfficesLocation1 />
          </Route>
          <Route path="/office-location-2">
            <OfficesLocation2 />
          </Route>
          <Route path="/office-location-3">
            <OfficesLocation3 />
          </Route>
          <Route path="/office-location-4">
            <OfficesLocation4 />
          </Route>
          <Route path="/qrleads">
            <QRLeadsPage />
          </Route>
          <Route path="/qrleads-1">
            <QRLeadsPage1 />
          </Route>
          <Route path="/qrleads-insta">
            <QRLeadsPageInsta />
          </Route>
          <Route path="/phishing-email">
            <PhishingEmailPage />
          </Route>
          <Route path="/phishing-email-compose">
            <PhishingEmailCompose />
          </Route>
          <Route path="/phishing-email-invitation">
            <PhishingEmailInvitation />
          </Route>
          <Route path="/phishing-email-invitation-1">
            <PhishingEmailInvitation1 />
          </Route>
          <Route path="/phishing-email-invitation-2">
            <PhishingEmailInvitation2 />
          </Route>
          <Route path="/fake-invitation">
            <FakeInvitation />
          </Route>
          <Route path="/fake-invitation-1">
            <FakeInvitation1 />
          </Route>
          <Route path="/fake-invitation-safe">
            <FakeInvitationSafe />
          </Route>
          <Route path="/fake-invitation-safe-1">
            <FakeInvitationSafe1 />
          </Route>
          <Route path="/riddle-puzzle">
            <FakeInvitationRiddlePuzzle />
          </Route>
          <Route path="/fake-invitation-bossroom">
            <FakeInvitationSafe2 />
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
