import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/register" />} />
      <Route path="/home" exact component={Home} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
};

export default Routes;
