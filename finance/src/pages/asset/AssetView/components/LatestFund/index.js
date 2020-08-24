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
  return <YtCard title="近期融资" className="part-same-shadow">
    <div className="latest-fund-mod">
      <div className="item-fund box-flex"><span className="label">资金方：</span><span className="val">{fundData.fundSide}</span></div>
      <div className="item-fund box-flex"><span className="label">资产包名称：</span><span className="val">{fundData.packetName}</span></div>
      <div className="item-fund box-flex"><span className="label">放款金额：</span><span className="val">{fundData.loanAmountReal}元</span></div>
      <div className="item-fund box-flex"><span className="label">项目名称：</span><span className="val">{fundData.projectName}元</span></div>
      <div className="item-fund box-flex"><span className="label">融资账期：</span><span className="val">{fundData.loanPeriod}天</span></div>
      <div className="item-fund box-flex"><span className="label">资产包金额：</span><span className="val">{fundData.packageAmount}元</span></div>
      <div className="item-fund box-flex"><span className="label">放款时间：</span><span className="val">{fundData.loanDate}</span></div>
      <div className="item-fund box-flex"><span className="label">债务企业：</span><span className="val">{fundData.num}家</span></div>
    </div>
  </YtCard>
}

export  default Index;
