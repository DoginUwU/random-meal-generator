import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Meal from "../pages/Meal";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/meal" component={Meal} />
  </Switch>
);

export { Router };
