import { Switch, Route, Link } from "react-router-dom";
import OperateWorkbench from './OperateWorkbench';//资产端工作台
import AssetView from './AssetView';//资产总览
import FinanceCompanyView from './FinanceCompanyView';//融资企业
import FinanceCompanyList from './FinanceCompanyList';//融资企业列表
import AssetPackageView from './AssetPackageView';//资产包概览
import AssetPackageInfo from './AssetPackageInfo';//资产包详情
import AssetPackageVerifyInfo from './AssetPackageVerifyInfo';//资产包验真详情
import AssetList from './AssetList';//资产
import FinanceApplyList from './FinanceApplyList';//融资申请列表
import FinanceApplyEdit from './FinanceApplyEdit';//融资申请
import FinanceApproveList from './FinanceApproveList';//融资审批
import FinanceApproveEdit from './FinanceApproveEdit';//融资审批
import LoanApplyList from './LoanApplyList';//放款申请列表
import LoanApplyEdit from './LoanApplyEdit';//放款申请
import LoanApproveList from './LoanApproveList';//放款审批列表
import LoanApproveEdit from './LoanApproveEdit';//放款审批
import CreditVerify from './CreditVerify';//主体信用验证
import FinanceWorkbench from './FinanceWorkbench';//工作台


function HomeRoutes() {
  return (
    <Switch>
        <Route exact path="/account/creditVerify" component={CreditVerify} />
        <Route exact path="/account/operateWorkbench" component={OperateWorkbench} />
        <Route exact path="/account/asset/view/:id" component={AssetView} />
        <Route exact path="/account/assetList/:id" component={AssetList} />
        <Route exact path="/account/assetPackage/view" component={AssetPackageView} />
        <Route exact path="/account/financeApply/edit/:id?" component={FinanceApplyEdit} />
        <Route exact path="/account/financeApplyList" component={FinanceApplyList} />
        <Route exact path="/account/financeApproveList" component={FinanceApproveList} />
        <Route exact path="/account/financeApprove/edit/:id?" component={FinanceApproveEdit} />
        <Route exact path="/account/loanApproveList" component={LoanApproveList} />
        <Route exact path="/account/loanApprove/edit/:id?" component={LoanApproveEdit} />
        <Route exact path="/account/loanApplyList" component={LoanApplyList} />
        <Route exact path="/account/loanApply/edit/:id?" component={LoanApplyEdit} />
        <Route exact path="/account/assetPackage/info/:id" component={AssetPackageInfo} />
        <Route exact path="/account/assetPackageVerifyInfo" component={AssetPackageVerifyInfo} />
        <Route exact path="/account/financeCompanyView" component={FinanceCompanyView} />
        <Route exact path="/account/financeCompanyList" component={FinanceCompanyList} />
        <Route exact path="/account/financeWorkbench" component={FinanceWorkbench} />
    </Switch>
  );
}

export default HomeRoutes;
