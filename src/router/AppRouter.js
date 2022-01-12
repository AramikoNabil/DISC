import { Home, Instruction, test, Login, finish, loginAdmin } from "./Route";
import Wrapper from "../component/Wrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" component={Wrapper(Login)} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/test" component={test} />
        <Route path="/finish" component={finish} />
        <Route path="/admin" component={Wrapper(loginAdmin)} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
