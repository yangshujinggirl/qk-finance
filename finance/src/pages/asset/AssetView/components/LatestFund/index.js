import { GetLatestFinApi, } from 'api/asset/AssetView';
import { YtCard } from 'common';
import { useState, useEffect } from 'react';
import './index.less';

const Index=({...props})=> {
  const { enterpriseId } =props;
  const [fundData,setFundData] = useState({})
  const fetchLatest=(values )=>{
    let params = { enterpriseId }
    GetLatestFinApi(params)
    .then((res)=> {
      const { fundLoanInfo } =res.data;
      setFundData(fundLoanInfo)
    })
  }
  useEffect(() => { fetchLatest()},[enterpriseId]);
  return <YtCard title="近期融资">
    <div className="box-flex latest-fund-mod">
        <div className="item-fund">资金方：{fundData.fundSide}</div>
        <div className="item-fund">资产包名称：{fundData.packetName}</div>
        <div className="item-fund">放款金额：{fundData.loanAmountReal}元</div>
        <div className="item-fund">项目名称：{fundData.projectName}元</div>
        <div className="item-fund">融资账期：{fundData.loanPeriod}天</div>
        <div className="item-fund">资产包金额：{fundData.packageAmount}元</div>
        <div className="item-fund">放款时间：{fundData.loanDate}</div>
        <div className="item-fund">债务企业：{fundData.num}家</div>
    </div>
  </YtCard>
}

export  default Index;
