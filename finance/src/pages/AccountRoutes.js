import { Switch, Route, Link } from "react-router-dom";
import OperateWorkbench from './OperateWorkbench';
import FinanceWorkbench from './FinanceWorkbench';


function HomeRoutes() {
  return (
    <Switch>
        <Route exact path="/account/operateWorkbench" component={OperateWorkbench} />
        <Route exact path="/account/financeWorkbench" component={FinanceWorkbench} />
    </Switch>
  );
}

export default HomeRoutes;
