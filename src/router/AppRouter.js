import { Home, Instruction, test, Login, finishTest } from "./Route";
import Wrapper from "../component/Wrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" exact component={Wrapper(Login)} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/test" component={test} />
        <Route path="/finishTest" component={finishTest} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
