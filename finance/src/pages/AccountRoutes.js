import { Switch, Route, Link } from "react-router-dom";
import OperateWorkbench from './OperateWorkbench';//工作台
import AssetView from './AssetView';//资产总览
import FinanceCompanyList from './FinanceCompanyList';//融资企业列表
import AssetPackageView from './AssetPackageView';//融资企业列表
import AssetPackageInfo from './AssetPackageInfo';//融资企业列表
import FinanceWorkbench from './FinanceWorkbench';


function HomeRoutes() {
  return (
    <Switch>
        <Route exact path="/account/operateWorkbench" component={OperateWorkbench} />
        <Route exact path="/account/assetView" component={AssetView} />
        <Route exact path="/account/assetPackageView" component={AssetPackageView} />
        <Route exact path="/account/assetPackageInfo" component={AssetPackageInfo} />
        <Route exact path="/account/financeCompany" component={FinanceCompanyList} />
        <Route exact path="/account/financeWorkbench" component={FinanceWorkbench} />
    </Switch>
  );
}

export default HomeRoutes;
