import { Switch, Route, Link, Redirect } from "react-router-dom";
import OperateWorkbench from './OperateWorkbench';//资产端工作台

import AssetView from './asset/AssetView';//资产总览
import AssetPackageView from './asset/AssetPackageView';//资产包概览
import AssetPackageInfo from './asset/AssetPackageInfo';//资产包详情
import AssetPackageVerifyInfo from './asset/AssetPackageVerifyInfo';//资产包验真详情
import AssetList from './asset/AssetList';//资产列表
import AssetInfo from './asset/AssetInfo';//资产详情
import AssetVerifyInfo from './asset/AssetVerifyInfo';//资产验真详情
import AssetSource from './asset/AssetSource';//资产溯源

import FinanceWorkbench from './finance/FinanceWorkbench';//工作台
import FinanceCompanyView from './finance/FinanceCompanyView';//融资企业
import FinanceApplyList from './finance/FinanceApplyList';//融资申请列表
import FinanceApplyEdit from './finance/FinanceApplyEdit';//融资申请
import FinanceApproveList from './finance/FinanceApproveList';//融资审批
import FinanceApproveEdit from './finance/FinanceApproveEdit';//融资审批
import LoanApplyList from './finance/LoanApplyList';//放款申请列表
import LoanApplyEdit from './finance/LoanApplyEdit';//放款申请
import LoanApproveList from './finance/LoanApproveList';//放款审批列表
import LoanApproveEdit from './finance/LoanApproveEdit';//放款审批


// 回款管理
import AccountStatement from './collectionPayment/AccountStatement';//银行流水
import WriteOffInfo from './collectionPayment/AccountStatement/WriteOffInfo';//银行流水
import PaymentPlan from './collectionPayment/PaymentPlan';//银行流水
import PaymentPlanInfo from './collectionPayment/PaymentPlan/PaymentPlanInfo';//银行流水

//
import Organization from './platformManage/Organization';
import RoleManage from './platformManage/RoleManage';
import UserManage from './platformManage/UserManage';

import CreditVerify from './CreditVerify';//主体信用验证



function HomeRoutes() {
  return (
    <Switch>
        <Route exact path="/account/financeWorkbench" component={FinanceWorkbench} />
        <Route path="/account/role" component={RoleManage} />
        <Route path="/account/user" component={UserManage} />
        <Route path="/account/organization" component={Organization} />
        <Route path="/account/paymentPlan" component={PaymentPlan} />
        <Route path="/account/paymentPlan/info/:id" component={PaymentPlanInfo} />
        <Route path="/account/writeOff/info/:id" component={WriteOffInfo} />
        <Route path="/account/statement" component={AccountStatement} />
        <Route path="/account/asset/source/:id" component={AssetSource} />
        <Route path="/account/assetVerify/info/:id" component={AssetVerifyInfo} />
        <Route path="/account/creditVerify/:id" component={CreditVerify} />
        <Route path="/account/operateWorkbench" component={OperateWorkbench} />

        <Route path="/account/asset/packageView" component={AssetPackageView} />
        <Route path="/account/asset/packageView/info/:id" component={AssetPackageInfo} />
        <Route path="/account/asset/packageView/verifyInfo/:id" component={AssetPackageVerifyInfo} />
        <Route path="/account/asset/financeCompany" component={FinanceCompanyView} />
        <Route path="/account/asset/financeCompany/list/:id" component={AssetList} />
        <Route path="/account/asset/financeCompany/list/info/:id" component={AssetInfo} />
        <Route path="/account/asset/financeCompany/view/:id" component={AssetView} />

        <Route path="/account/financeApply/edit/:id?" component={FinanceApplyEdit} />
        <Route path="/account/financeApplyList" component={FinanceApplyList} />
        <Route path="/account/financeApproveList" component={FinanceApproveList} />
        <Route path="/account/financeApprove/edit/:id?" component={FinanceApproveEdit} />
        <Route path="/account/loanApproveList" component={LoanApproveList} />
        <Route path="/account/loanApprove/edit/:id?" component={LoanApproveEdit} />
        <Route path="/account/loanApplyList" component={LoanApplyList} />
        <Route path="/account/loanApply/edit/:id?" component={LoanApplyEdit} />

        <Redirect path="/account" to="/account/financeWorkbench" />

    </Switch>
  );
}

export default HomeRoutes;
