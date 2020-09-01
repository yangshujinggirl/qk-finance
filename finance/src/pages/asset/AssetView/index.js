import NP from 'number-precision';
import moment from 'moment';
import { useState, useEffect } from 'react';
import ViewCardPane from '../../components/ViewCardPane';
import AssetDistributeChart from '../components/AssetDistributeChart';
import RiseChart from '../../components/RiseChart';
import SubCrumb from '../components/SubCrumb';
import LatestFund from './components/LatestFund';
import DebtMod from './components/DebtMod';
import FundPoolChart from '../../components/FundPoolChart';
import AssetScaleCharts from './components/AssetScaleCharts';
import { YtBreadcrumbName, YtTable, YtCard } from 'common';
import {subCrumbOptions} from '../subCrumbOptions';
import { CommonUtils } from 'utils';
import { GetTotalApi,  GetPaymentApi } from 'api/asset/AssetView';
import { GetAssetRiseApi } from 'api/finance/FinanceCompanyView';


import './index.less';
import iconImg1 from './image/icon1.png';
import iconImg2 from './image/icon2.png';
import iconImg3 from './image/icon3.png';
import iconImg4 from './image/icon4.png';
import iconImg5 from './image/icon5.png';
import iconImg6 from './image/icon6.png';
import iconImg7 from './image/icon7.png';
import iconImg8 from './image/icon8.png';

const verifyOption=[
  {
    url:iconImg1,
    name:'融资企业',
  },
  {
    url:iconImg2,
    name:'国税局',
  },
  {
    url:iconImg3,
    name:'云 图',
  },
  {
    url:iconImg4,
    name:'经销商',
  },
  {
    url:iconImg5,
    name:'物 流',
  },
  {
    url:iconImg6,
    name:'银 行',
  },
  {
    url:iconImg7,
    name:'企查查',
  },
  {
    url:iconImg8,
    name:'农 户',
  },
]

const Index=({...props})=>{
  const [totalData,setTotalData] = useState({assetsLoanTotal:0,assetsTotal:1});
  const [payMentList,setPayMentList] = useState([]);
  const [riseList,setRiseList] = useState([]);
  const { id:enterpriseId } = props.match.params;

  const fetchTotal=(values )=>{
    let params = { industryTypeCode:'AGNPK', enterpriseId }
    GetTotalApi(params)
    .then((res)=> {
      const { assetsCountSumVO } =res.data;
      assetsCountSumVO.assetsLoanTotal = assetsCountSumVO.assetsLoanTotal?assetsCountSumVO.assetsLoanTotal:0
      assetsCountSumVO.assetsTotal = assetsCountSumVO.assetsTotal?assetsCountSumVO.assetsTotal:1;
      setTotalData(assetsCountSumVO)
    })
  }
  const fetchRise=()=>{
    GetAssetRiseApi({enterpriseId})
    .then((res)=> {
      let { addOrderAmountList, allOrderAmountList } =res.data;
      addOrderAmountList = addOrderAmountList.map((el)=> {
        el.dateNode = moment(el.dateNode).format('YYYY-MM-DD');
        el.type = "新增资产";
        el.value = el.addOrderAmount;
        return el;
      })
      allOrderAmountList = allOrderAmountList.map((el)=> {
        el.dateNode = moment(el.dateNode).format('YYYY-MM-DD');
        el.value = el.allOrderAmount;
        el.type = "总资产";
        return el;
      })
      let arr = [...addOrderAmountList,...allOrderAmountList];
      setRiseList(arr)
    })
  }
  const fetchPayment=(values )=>{
    let params = { enterpriseId }
    GetPaymentApi(params)
    .then((res)=> {
      const { loanPeriodMap } =res.data;
      let arr=[
        {
          item:'30天内',
          percent:loanPeriodMap.zeroThirty,
        },{
          item:'30-60天',
          percent:loanPeriodMap.thirtySixty,
        },{
          item:'60-90天',
          percent:loanPeriodMap.sixtyNinety,
        },{
          item:'90-180天',
          percent:loanPeriodMap.ninetyOneHundredAndEighty,
        },{
          item:'180天以上',
          percent:loanPeriodMap.oneHundredAndEighty,
        },
      ]
      setPayMentList(arr);
    })
  }

  useEffect(() => { fetchTotal();fetchPayment();fetchRise() },[enterpriseId]);
  return(
    <>
      <YtBreadcrumbName>
        <SubCrumb data={subCrumbOptions(enterpriseId)} active="1"/>
      </YtBreadcrumbName>
      <div className="assetView-pages-wrap">
        <div className="part-overview-wrap box-flex">
          <ViewCardPane
            className="view-diy"
            label="累计资产总额(万元)"
            num={CommonUtils.formatAmount(totalData.assetsTotal)}/>
          <ViewCardPane
            className="view-diy"
            label="累计融资总数(笔)"
            num={totalData.assetTotalCount}/>
          <ViewCardPane
            className="view-diy"
            label="当前融资总额(万元)"
            num={CommonUtils.formatAmount(totalData.assetsLoanTotal)}/>
          <ViewCardPane
            className="view-diy"
            label="整体融资比(%)"
            num={NP.round(NP.divide(totalData.assetsLoanTotal,totalData.assetsTotal),2)}/>
        </div>
        <FundPoolChart enterpriseId={enterpriseId}/>
        <div className="common-column-module-wrap">
          <div className="module-equal-two-wrap">
            <RiseChart data={riseList} className="asset-view-rise-chart"/>
          </div>
          <div className="module-equal-two-wrap company-list part-same-shadow mt24">
            <LatestFund enterpriseId={enterpriseId}/>
          </div>
        </div>
        <div className="asset-module-wrap box-flex common-column-module-wrap">
          <div className="part-same-shadow  module-equal-thr-wrap">
            <AssetDistributeChart data={payMentList}/>
          </div>
          <div className="part-same-shadow  module-equal-thr-wrap">
            <AssetScaleCharts enterpriseId={enterpriseId}/>
          </div>
          <div className="part-same-shadow  module-equal-thr-wrap">
            <DebtMod enterpriseId={enterpriseId}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index;
