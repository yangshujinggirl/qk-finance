import TabsMod from '../../../../components/TabsMod';
import { YtStatistic, YtTable, YtPagination, YtCard } from 'common';
import { useState, useEffect } from 'react';
import { GetPackegChangeApi } from 'api/asset/AssetPackageView';

const ChangeRankMod=({...props})=>{
  const [checkedVal,setCheckedVal] = useState(3);
  const [list,setList] = useState([]);
  const onChange=(e)=>{
    setCheckedVal(e.target.value)
  }
  const plainOptions = [
    {
      title:'今日',
      key:0
    },
    {
      title:'本周',
      key:1
    },
    {
      title:'本月',
      key:2
    },
    {
      title:'本年',
      key:3
    }];
  const fetchData=()=> {
    GetPackegChangeApi()
    .then((res)=> {
      const { data }=res;
      data.map((el,index)=>el.key = ++index)
      setList(data);
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
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
