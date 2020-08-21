import TabsMod from '../../../../components/TabsMod';
import { YtStatistic, YtTable, YtPagination, YtCard } from 'common';
import { useState, useEffect } from 'react';
import { GetPackegChangeApi } from 'api/asset/AssetPackageView';
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

const ChangeRankMod=({...props})=>{
  const [checkedVal,setCheckedVal] = useState('Year');
  const [list,setList] = useState([]);
  const onChange=(e)=>{
    let value = e.target.value;
    setCheckedVal(e.target.value);
    fetchList({chartTimePeriods:value})
  }
  const fetchList=(values)=> {
    GetPackegChangeApi(values)
    .then((res)=> {
      const { data }=res;
      data.map((el,index)=>el.key = ++index)
      setList(data);
    })
  }
  useEffect(()=>{ fetchList() },[])
  return <YtCard title="资产包变动排行">
            <TabsMod
              onChange={onChange}
              options={plainOptions}
              checkedVal={checkedVal}/>
            <div className="box-flex aspv-rank-list">
              {
                list.map((el,index)=>(
                  <div className="box-flex aspvr-item" key={index}>
                    <p className="aspvr-num top-one">{el.key}</p>
                    <p className="aspvr-name">{el.packet_name}</p>
                    <YtStatistic value={`¥${el.amount}`} type="up"/>
                  </div>
                ))
              }
            </div>
          </YtCard>
}

export default ChangeRankMod;
