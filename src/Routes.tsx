import { Route,Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";


const Routes = (): JSX.Element => {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        {/* <Route path='*' component={NotFound} /> */}
      </Switch>
  );
};

export default Routes;
