import { StackedColumn } from '@antv/g2plot';
import NP from 'number-precision';
import { YtCard } from 'common';
import { useState, useEffect } from 'react';
import TabsMod from '../../../components/TabsMod'
import { GetAmountChangeChartApi } from 'api/asset/AssetPackageView';

import './index.less';

const plainOptions = [
  {
    title:'今日',
    key:'Day'
  },
  {
    title:'本周',
    key:'Week'
  },
  {
    title:'本月',
    key:'Month'
  },
  {
    title:'本年',
    key:'Year'
  }];

const CashChart=({...props})=>{
  const [checkedVal,setCheckedVal] = useState('Year');
  const [plot,setPlot] = useState(null);
  const onChange=(e)=>{
    let value = e.target.value;
    setCheckedVal(e.target.value);
    fetchList({chartTimePeriods:value})
  }
  const fetchList=(values)=> {
    GetAmountChangeChartApi(values)
    .then((res)=> {
      let { data }=res;
      let transformData=[],addArr=[],minxArr=[];
      data = data.map((el)=>{
        let item={};
        if(el.op_type==1) {
          el.type ='新增资产';
        }else {
          el.type ='减少资产';
        }
        return el;
      })
      initCanvas(data)
    })
  }
  const initCanvas=(data)=> {
    if(plot) {
      plot.changeData(data);
      return;
    }
    const stackedColumn = new StackedColumn('cash-change-container',{
      data,
      xField: 'date',
      yField: 'order_amount',
      stackField: 'type',
      color:['#F0EFF5','#1B53BF'],
      legend:{
        position:'top-left',
        marker:{ symbol:'circle' }
      },
      xAxis:{
        title:{ visible:false }
      },
      yAxis:{
        title:{ visible:false },
        label:{
          formatter: (value) => (value/10000) + '万',
        }
      },

    });
    stackedColumn.render();
    setPlot(stackedColumn);
  }

  useEffect(()=>{ fetchList({chartTimePeriods:checkedVal}) },[])

    return <YtCard title="资产金额变动">
              <>
                <TabsMod
                  onChange={onChange}
                  options={plainOptions}
                  checkedVal={checkedVal}/>
                <div className="cash-change" id="cash-change-container"></div>
              </>
           </YtCard>
}
export default CashChart;
