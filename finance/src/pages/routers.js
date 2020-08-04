import { Switch, Route, Link } from "react-router-dom";
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
import FinanceCompanyList from './finance/FinanceCompanyList';//融资企业列表
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
const routes=[
  {
    path:'/account/role',
    name:'融资管理',
    component:RoleManage,
    isExact:true
  },
  {
    path:'/account/user',
    name:'用户管理',
    component:UserManage,
    isExact:true
  },
  {
    path:'/account/organization',
    name:'融资管理',
    component:Organization,
    isExact:true
  },
  {
    path:'/account/paymentPlan',
    name:'paymentPlan',
    component:PaymentPlan,
    isExact:true
  },
  {
    path:'/account/paymentPlan/info/:id',
    name:'paymentPlaninfo',
    component:PaymentPlanInfo,
    isExact:true
  },
  {
    path:'/account/writeOff/info/:id',
    name:'WriteOffInfo',
    component:WriteOffInfo,
    isExact:true
  },
  {
    path:'/account/statement',
    name:'AccountStatement',
    component:AccountStatement,
    isExact:true
  },
  {
    path:'/account/asset/source/:id',
    name:'AssetSource',
    component:AssetSource,
    isExact:true
  },
  {
    path:'/account/assetVerify/info/:id',
    name:'AssetVerifyInfo',
    component:AssetVerifyInfo,
    isExact:true
  },
  {
    path:'/account/creditVerify/:id',
    name:'CreditVerify',
    component:CreditVerify,
    isExact:true
  },
  {
    path:'/account/operateWorkbench',
    name:'OperateWorkbench',
    component:OperateWorkbench,
    isExact:true
  },
  {
    path:'/account/asset/view/:id',
    name:'AssetView',
    component:AssetView,
    isExact:true
  },
  {
    path:'/account/assetList/:id',
    name:'AssetList',
    component:AssetList,
    isExact:true
  },
  {
    path:'/account/asset/info/:id',
    name:'AssetInfo',
    component:AssetInfo,
    isExact:true
  },
  {
    path:'/account/assetPackage/view',
    name:'AssetPackageView',
    component:AssetPackageView,
    isExact:true
  },
    {
      path:'/account/assetPackage/info/:id',
      name:'AssetPackageInfo',
      component:AssetPackageInfo,
      isExact:true
    },
]

export default routes;
