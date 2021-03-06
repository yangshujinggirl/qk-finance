import { Switch, Route, Link, Redirect } from "react-router-dom";
import OperateWorkbench from './OperateWorkbench';//资产端工作台

import AssetView from './asset/AssetView';//资产总览
import AssetPackageView from './asset/AssetPackageView';//资产包概览
import AssetPackageInfo from './asset/AssetPackageView/AssetPackageInfo';//资产包详情
import AssetPackageVerifyInfo from './asset/AssetPackageView/AssetPackageVerifyInfo';//资产包验真详情
import AssetList from './asset/AssetList';//资产列表
import AssetCashFlow from './asset/AssetCashFlow';//现金流
import AssetHistory from './asset/AssetHistory';//融资历史
import BlockbChain from './asset/BlockbChain';//区块链
import AssetInfo from './asset/AssetInfo';//资产详情
import AssetVerifyInfo from './asset/AssetVerifyInfo';//资产验真详情
import AssetSource from './asset/AssetSource';//资产溯源

import FinanceWorkbench from './finance/FinanceWorkbench';//工作台
import FinanceCompanyView from './finance/FinanceCompanyView';//融资企业
import FinanceApplyList from './finance/FinanceApplyList';//融资申请列表
import FinanceApplyEdit from './finance/FinanceApplyList/FinanceApplyEdit';//融资申请
import FinanceApplyInfo from './finance/FinanceApplyList/FinanceApplyInfo';//融资申请详情
import FinanceApproveList from './finance/FinanceApproveList';//融资审批
import FinanceApproveEdit from './finance/FinanceApproveList/FinanceApproveEdit';//融资审批编辑
import FinanceApproveInfo from './finance/FinanceApproveList/FinanceApproveInfo';//融资审批详情
import LoanApplyList from './finance/LoanApplyList';//放款申请列表
import LoanApplyEdit from './finance/LoanApplyList/LoanApplyEdit';//放款申请
import LoanApproveList from './finance/LoanApproveList';//放款审批列表
import LoanApproveEdit from './finance/LoanApproveList/LoanApproveEdit';//放款审批
import WithdrawManage from './finance/WithdrawManage';//请款管理
import WithdrawEdit from './finance/WithdrawManage/WithdrawEdit';//请款审批
import WithdrawInfo from './finance/WithdrawManage/WithdrawInfo';//请款审批
import WhiteList from './finance/WhiteList';//企业白名单
import WhiteListEdit from './finance/WhiteList/WhiteListEdit';//企业白名单
import WhiteListInfo from './finance/WhiteList/WhiteListInfo';//企业白名单


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
        <Route exact path="/account/role" component={RoleManage} />
        <Route exact path="/account/user" component={UserManage} />
        <Route exact path="/account/organization" component={Organization} />
        <Route exact path="/account/paymentPlan" component={PaymentPlan} />
        <Route exact path="/account/paymentPlan/info/:id" component={PaymentPlanInfo} />
        <Route exact path="/account/writeOff/info/:id" component={WriteOffInfo} />
        <Route exact path="/account/statement" component={AccountStatement} />
        <Route exact path="/account/asset/financeCompany/source/:id" component={AssetSource} />
        <Route exact path="/account/assetVerify/info/:id" component={AssetVerifyInfo} />
        <Route exact path="/account/creditVerify/:id" component={CreditVerify} />
        <Route exact path="/account/operateWorkbench" component={OperateWorkbench} />

        <Route exact path="/account/asset/packageView" component={AssetPackageView} />
        <Route exact path="/account/asset/packageView/info/:id" component={AssetPackageInfo} />
        <Route exact path="/account/asset/packageView/verifyInfo/:id" component={AssetPackageVerifyInfo} />
        <Route exact path="/account/asset/financeCompany" component={FinanceCompanyView} />
        <Route exact path="/account/asset/financeCompany/list/:id" component={AssetList} />
        <Route exact path="/account/asset/financeCompany/list/info/:id" component={AssetInfo} />
        <Route exact path="/account/asset/financeCompany/view/:id" component={AssetView} />
        <Route exact path="/account/asset/financeCompany/cash/:id" component={AssetCashFlow} />
        <Route exact path="/account/asset/financeCompany/history/:id" component={AssetHistory} />
        <Route exact path="/account/asset/financeCompany/blockbChain/:id" component={BlockbChain} />
        <Route exact path="/account/withdraw" component={WithdrawManage} />
        <Route exact path="/account/withdraw/edit/:id" component={WithdrawEdit} />
        <Route exact path="/account/withdraw/info/:id" component={WithdrawInfo} />
        <Route exact path="/account/whiteList" component={WhiteList} />
        <Route exact path="/account/whiteList/edit/:id" component={WhiteListEdit} />
        <Route exact path="/account/whiteList/info/:id" component={WhiteListInfo} />

        <Route exact path="/account/financeApply/info/:id" component={FinanceApplyInfo} />
        <Route exact path="/account/financeApply/edit/:id?" component={FinanceApplyEdit} />
        <Route exact path="/account/financeApplyList" component={FinanceApplyList} />
        <Route exact path="/account/financeApproveList" component={FinanceApproveList} />
        <Route exact path="/account/financeApprove/edit/:id?" component={FinanceApproveEdit} />
        <Route exact path="/account/financeApprove/info/:id" component={FinanceApproveInfo} />
        <Route exact path="/account/loanApproveList" component={LoanApproveList} />
        <Route exact path="/account/loanApprove/edit/:id?" component={LoanApproveEdit} />
        <Route exact path="/account/loanApplyList" component={LoanApplyList} />
        <Route exact path="/account/loanApply/edit/:id?" component={LoanApplyEdit} />

        <Redirect path="/account" to="/account/financeWorkbench" />

    </Switch>
  );
}

export default HomeRoutes;
