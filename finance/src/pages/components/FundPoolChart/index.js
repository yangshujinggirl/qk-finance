import { Line } from '@antv/g2plot';
import { Donut } from '@antv/g2plot';
import { useState, useEffect } from 'react';
import { YtCard } from 'common';
import './index.less';
import lfImg from './image/lf.png';
import rfImg from './image/rf.png';
import lfLineImg0 from './image/lf_line0.png';
import lfLineImg1 from './image/lf_line1.png';
import rfLineImg0 from './image/rf_line0.png';
import rfLineImg1 from './image/rf_line1.png';
import rfLineImg2 from './image/rf_line2.png';

const IndexChart=({...props})=>{
  const initChartOne=()=>{
      const data = [
        {
          type: '回款流入',
          value: 80,
        },
        {
          type: '融资流入',
          value: 20,
        },
      ];
      const donutPlot = new Donut(document.getElementById('fund-pool-chart1'), {
        forceFit: true,
        radius: 1,
        innerRadius:0.7,
        padding: 'auto',
        data,
        angleField: 'value',
        colorField: 'type',
        color:['#55abe9','#1eb6eb'],
        label: { visible: false },
        statistic:{
          visible:true,
          content: {
            value: '32',
            name: '流入资金',
            offset:30
          },
        },
        legend: { visible: false },
      });
      donutPlot.render();
  }
  const initChartTwo=()=>{
      const data = [
        {
          type: '应收回款额',
          value: 80,
        },
        {
          type: '融资闲置额',
          value: 20,
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
            value: '32',
            name: '监管户资金总额',
          },
        },
        legend: { visible: false },
      });
      donutPlot.render();
  }
  const initChartThr=()=>{
      const data = [
        {
          type: '经营性流出',
          value: 60,
        },
        {
          type: '利润提取流出',
          value: 20,
        },
        {
          type: '还款流出',
          value: 20,
        },
      ];
      const donutPlot = new Donut(document.getElementById('fund-pool-chart3'), {
        forceFit: true,
        radius: 1,
        innerRadius:0.7,
        padding: 'auto',
        data,
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
  useEffect(()=>{ initChartOne();initChartTwo();initChartThr()},[])
  return <YtCard title="监管资金池表现（30日）" className="part-same-shadow mt24">
          <div className="fund-pool-mods">
            <div className="list-wrap">
              <div className="top-list list-one">
                <div className="tl-head tl">
                    <div className="tl-col">回款流入</div>
                    <div className="tl-col">共 21 笔</div>
                    <div className="tl-col">216.6 万元</div>
                </div>
                <div className="tlr-wrap">
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                  <div className="tl-row tl">
                      <div className="tl-col">其余回款</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                </div>
                <img src={lfLineImg0} className='lf-line0 line-img'/>
              </div>
              <div className="top-list list-two">
                <div className="tl-head tl">
                    <div className="tl-col">回款流入</div>
                    <div className="tl-col">共 21 笔</div>
                    <div className="tl-col">216.6 万元</div>
                </div>
                <div className="tlr-wrap">
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                </div>
                <img src={lfLineImg1} className='lf-line1 line-img'/>
              </div>
            </div>
            <div className="chart-list-wrap">
              <div  className="chart-left" id="fund-pool-chart1"></div>
              <div  className="chart-middle" id="fund-pool-chart2"></div>
              <div  className="chart-right" id="fund-pool-chart3"></div>
              <img src={lfImg} className='img-posi lf-img'/>
              <img src={rfImg} className='img-posi rf-img'/>
              <div className="top-total-data">
                <p>保本差额 <span className="high-light">267</span>万元</p>
                <p className="little-data">预计<span className="high-light">267</span>天完成回款</p>
              </div>
              <div className="bottom-total-data">
                <div className="btd-item">
                  <p className='bi-label'>应收回款额(万元)</p>
                  <p><span className="num-data">1,213</span>(98%)</p>
                </div>
                <div className="btd-item">
                  <p className='bi-label'>融资闲置额(万元)</p>
                  <p><span className="num-data">20</span>(2%)</p>
                </div>
              </div>
            </div>
            <div className="list-wrap">
              <div className="top-list list-thr">
                <div className="tl-head tl">
                    <div className="tl-col">经营性流出</div>
                    <div className="tl-col">共 21 笔</div>
                    <div className="tl-col">216.6 万元</div>
                </div>
                <div className="tlr-wrap">
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                  <img src={rfLineImg0} className='rf-line0 line-img'/>
                </div>
              </div>
              <div className="top-list list-four">
                <div className="tl-head tl">
                    <div className="tl-col">利润提取流出</div>
                    <div className="tl-col">共 21 笔</div>
                    <div className="tl-col">216.6 万元</div>
                </div>
                <div className="tlr-wrap">
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                </div>
                <img src={rfLineImg1} className='rf-line1 line-img'/>
              </div>
              <div className="top-list list-five">
                <div className="tl-head tl">
                    <div className="tl-col">还款流出</div>
                    <div className="tl-col">共 21 笔</div>
                    <div className="tl-col">216.6 万元</div>
                </div>
                <div className="tlr-wrap">
                  <div className="tl-row tl">
                      <div className="tl-col">长沙二级经销商01</div>
                      <div className="tl-col">19.1万元</div>
                      <div className="tl-col">2020-07-29</div>
                  </div>
                </div>
                <img src={rfLineImg2} className='rf-line2 line-img'/>
              </div>
            </div>
          </div>
        </YtCard>
}
export default IndexChart;
