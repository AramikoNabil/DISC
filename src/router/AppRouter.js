import { Home, Instruction, test } from "./Route";
import Wrapper from "../component/Wrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Wrapper(Home)} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/test" component={test} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
