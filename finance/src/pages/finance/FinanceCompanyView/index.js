import { PageHeader, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import NP from 'number-precision';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { YtStatistic, YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import ViewCardPane from '../../components/ViewCardPane';
import RiseChart from '../../components/RiseChart';
// import AssetNumCharts from './components/AssetNumCharts';
import AssetScaleCharts from './components/AssetScaleCharts';
import AssetVerifyCharts from './components/AssetVerifyCharts';
import TableList from './components/TableList';
import { GetTotalApi,GetAssetScaleApi,GetAssetRiseApi } from 'api/finance/FinanceCompanyView';
import './index.less'

const FinanceShow=({...props})=> {
  const [visible, setVisible] = useState(false);
  const [riseList,setRiseList] = useState([]);
  const [scaleList,setScaleList] = useState([]);
  const [rate,setRate] = useState(0);
  const [totalData,setTotalData] = useState({assetsLoanTotal:0,assetTotalCount:1})
  const industryTypeCode = 'AGNPK';

  const fetchTotal=(values )=>{
    GetTotalApi({industryTypeCode})
    .then((res)=> {
      const { aseetsStatisticsVO } =res.data;
      aseetsStatisticsVO.assetsLoanTotal = aseetsStatisticsVO.assetsLoanTotal?aseetsStatisticsVO.assetsLoanTotal:0;
      aseetsStatisticsVO.assetTotalCount = aseetsStatisticsVO.assetTotalCount?aseetsStatisticsVO.assetTotalCount:1;
      setTotalData(aseetsStatisticsVO);
    })
  }
  const fetchRise=()=>{
    GetAssetRiseApi()
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
  const fetchScale=()=>{
    GetAssetScaleApi()
    .then((res)=> {
      const { assetSizeMap, assetAcceptanceRate } =res.data;
      let arr=[
        {
          type:'50万以下',
          value:assetSizeMap.fiveTen,
        },{
          type:'50万-100万',
          value:assetSizeMap.fiveTen,
        },{
          type:'100万-300万',
          value:assetSizeMap.tenThirty,
        },{
          type:'300万以上',
          value:assetSizeMap.thirty,
        }]
      setScaleList(arr);
      setRate(assetAcceptanceRate);
    })
  }
  useEffect(() => { fetchTotal();fetchRise(); fetchScale()},[]);

  return(
    <div>
      <div className="finance-company-list-wrap">
        <div className="box-flex">
          <ViewCardPane
            label="融资企业累计（家）"
            num={totalData.enterpriseCount}>
            <YtStatistic value="2家">本日新增</YtStatistic>
          </ViewCardPane>
          <ViewCardPane
            label="累计资产金额（万元）"
            num={totalData.assetTotalCount}>
            <YtStatistic value="2家">本日新增</YtStatistic>
          </ViewCardPane>
          <ViewCardPane
            label="累计融资金额（万元）"
            num={totalData.assetsLoanTotal}>
            <YtStatistic value="¥ 12,423">本日新增</YtStatistic>
          </ViewCardPane>
          <ViewCardPane
            label="融资占比"
            num={`${NP.round(NP.divide(totalData.assetsLoanTotal,totalData.assetTotalCount),2)}%`}>
            <YtStatistic value="2笔">本日新增融资笔数</YtStatistic>
          </ViewCardPane>
        </div>
        <div className="common-column-module-wrap">
          <div className="module-equal-two-wrap">
            <RiseChart data={riseList}/>
          </div>
          <div className="module-equal-two-wrap common-column-module-wrap">
            <div className="module-equal-two-wrap">
              <YtCard title="企业资产规模" className="part-same-shadow mt24">
                <AssetScaleCharts data={scaleList}/>
              </YtCard>
            </div>
            <div className="module-equal-two-wrap">
              <YtCard title="资产验真" className="part-same-shadow mt24">
                <AssetVerifyCharts data={rate}/>
              </YtCard>
            </div>
          </div>
        </div>
         <TableList />
      </div>
    </div>
  )
}

export default FinanceShow;
