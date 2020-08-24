import { Donut } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import NP from 'number-precision';
import { YtCard } from 'common';
import { GetFundPoolApi } from 'api/finance/FinanceWorkbench';
import './index.less';
import lfImg from './image/lf.png';
import rfImg from './image/rf.png';
import lfLineImg0 from './image/lf_line0.png';
import lfLineImg1 from './image/lf_line1.png';
import rfLineImg0 from './image/rf_line0.png';
import rfLineImg1 from './image/rf_line1.png';
import rfLineImg2 from './image/rf_line2.png';

import arrowImg0 from './image/arrow0.png';
import arrowImg1 from './image/arrow1.png';
import arrowImg2 from './image/arrow2.png';

const IndexChart=({...props})=>{
  const [totalData,setTotalData] =useState({});
  const [cashInData,setCashInData] =useState({cashInOutSummaryList:[]});
  const [cashOutData,setCashOutData] =useState({cashInOutSummaryList:[]});
  const initChartOne=(values)=>{
    const { cashAmount, cashInOutSummaryList } =values;
      const donutPlot = new Donut(document.getElementById('fund-pool-chart1'), {
        forceFit: true,
        radius: 1,
        innerRadius:0.7,
        padding: 'auto',
        data:cashInOutSummaryList,
        angleField: 'value',
        colorField: 'type',
        color:['#55abe9','#1eb6eb'],
        label: { visible: false },
        statistic:{
          visible:true,
          content: {
            value: `${cashAmount}`,
            name: '流入资金',
            offset:30
          },
        },
        legend: { visible: false },
      });
      donutPlot.render();
  }
  const initChartTwo=(values)=>{
      let { receivable, idleAmount } =values;
      const data = [
        {
          type: '应收回款额',
          value: receivable,
        },
        {
          type: '融资闲置额',
          value: idleAmount,
        },
      ];
      const donutPlot = new Donut(document.getElementById('fund-pool-chart2'), {
        forceFit: true,
        radius: 1,
        innerRadius:0.7,
        padding: 'auto',
        data,
        angleField: 'value',
        colorField: 'type',
        color:['#3169de','#a9c6de'],
        label: { visible: false },
        statistic:{
          visible:true,
          content: {
            value: `${values.cashAmount}`,
            name: '监管户资金总额',
          },
        },
        legend: { visible: false },
      });
      donutPlot.render();
  }
  const initChartThr=(values)=>{
      const { cashAmount, cashInOutSummaryList } =values;
      const donutPlot = new Donut(document.getElementById('fund-pool-chart3'), {
        forceFit: true,
        radius: 1,
        innerRadius:0.7,
        padding: 'auto',
        data:cashInOutSummaryList,
        angleField: 'value',
        colorField: 'type',
        color:['#62cbfc','#7f98ea','#7db6e3'],
        label: { visible: false },
        statistic:{
          visible:true,
          content: {
            value: '32',
            name: '流出资金',
          },
        },
        legend: { visible: false },
      });
      donutPlot.render();
  }
  const fetchInfo=()=> {
    GetFundPoolApi()
    .then((res)=> {
      const { cashInFlow, cashOutFlow, supervisorAccountFlow } =res.data;
      cashInFlow.cashInOutSummaryList.map((el)=> {
        el.type = el.cashTypeName;
        el.value = el.cashTotalAmount;
      })
      cashOutFlow.cashInOutSummaryList.map((el)=> {
        el.type = el.cashTypeName;
        el.value = el.cashTotalAmount;
      })
      setTotalData(supervisorAccountFlow);
      setCashInData(cashInFlow);
      setCashOutData(cashOutFlow);
      initChartOne(cashInFlow);
      initChartTwo(supervisorAccountFlow);
      initChartThr(cashOutFlow);
    })
  }
  useEffect(()=>{ fetchInfo();},[])
  console.log(cashInData.cashInOutSummaryList)
  return <YtCard title="监管资金池表现（30日）" className="part-same-shadow mt24">
          <div className="fund-pool-mods">
            <div className="list-wrap">
              {
                cashInData.cashInOutSummaryList&&cashInData.cashInOutSummaryList.map((el,index)=> (
                  <div className={`top-list cashIn-list${index}`} key={index}>
                    <div className="tl-head tl">
                      <div className="tl-col">{el.cashTypeName}</div>
                      <div className="tl-col">共{el.cashTotalCount}笔</div>
                      <div className="tl-col">{el.cashTotalAmount}万元</div>
                    </div>
                    <div className="tlr-wrap">
                      {
                        el.cashDetailList.map((item,idx) =>(
                          <div className="tl-row tl" key={idx}>
                            <div className="tl-col">{item.cashName}</div>
                            <div className="tl-col">{item.cashAmount}万元</div>
                            <div className="tl-col">{item.cashDate}</div>
                          </div>
                        ))
                      }
                    </div>
                    {
                      index<1?
                      <img src={arrowImg0} className={`lf-line${index} line-img`}/>
                      :
                      <img src={arrowImg1} className={`lf-line${index} line-img`}/>
                    }

                  </div>
                ))
              }
            </div>
            <div className="chart-list-wrap">
              <div  className="chart-left" id="fund-pool-chart1"></div>
              <div  className="chart-middle" id="fund-pool-chart2"></div>
              <div  className="chart-right" id="fund-pool-chart3"></div>
              <img src={lfImg} className='img-posi lf-img'/>
              <img src={rfImg} className='img-posi rf-img'/>
              <div className="top-total-data">
                <p>保本差额 <span className="high-light">{totalData.differenceAmount}</span>万元</p>
                <p className="little-data">预计<span className="high-light">{totalData.accountPeriod}</span>天完成回款</p>
              </div>
              <div className="bottom-total-data">
                <div className="btd-item">
                  <p className='bi-label'>应收回款额(万元)</p>
                  <p>
                    <span className="num-data">{totalData.receivable}</span>
                    ({totalData.receivableRatio})
                  </p>
                </div>
                <div className="btd-item">
                  <p className='bi-label'>融资闲置额(万元)</p>
                  <p><span className="num-data">{totalData.idleAmount}</span>({totalData.idleAmountRatio})</p>
                </div>
              </div>
            </div>
            <div className="list-wrap">
              {
                cashOutData.cashInOutSummaryList.map((el,index)=> (
                  <div className={`top-list cashOut-list${index}`} key={index}>
                    <div className="tl-head tl">
                      <div className="tl-col">{el.cashTypeName}</div>
                      <div className="tl-col">共{el.cashTotalCount}笔</div>
                      <div className="tl-col">{el.cashTotalAmount}万元</div>
                    </div>
                    <div className="tlr-wrap">
                      {
                        el.cashDetailList.map((item,idx) =>(
                          <div className="tl-row tl" key={idx}>
                            <div className="tl-col">{item.cashName}</div>
                            <div className="tl-col">{item.cashAmount}万元</div>
                            <div className="tl-col">{item.cashDate}</div>
                          </div>
                        ))
                      }
                    </div>
                    {
                      index<1?
                      <img src={arrowImg1} className={`rf-line${index} line-img`}/>
                      :
                      (
                        index<2?
                        <img src={arrowImg0} className={`rf-line${index} line-img`}/>
                        :
                        <img src={arrowImg2} className={`rf-line${index} line-img`}/>
                      )
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </YtCard>
}
export default IndexChart;
