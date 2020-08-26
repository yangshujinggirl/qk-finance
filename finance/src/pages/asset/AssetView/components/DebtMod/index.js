import { GetBebtApi, } from 'api/asset/AssetView';
import { Progress } from 'antd';
import { YtCard } from 'common';
import { useState, useEffect } from 'react';

const Index=({...props})=> {
  const { enterpriseId } =props;
  const [ratioList,setRatioList] = useState([]);
  const fetchRatio=(values )=>{
    let params = { enterpriseId }
    GetBebtApi(params)
    .then((res)=> {
      const { addOrderAmountList } =res.data;
      setRatioList(addOrderAmountList);
    })
  }
  useEffect(() => { fetchRatio()},[enterpriseId]);
  return   <YtCard title="债务占比TOP 3">
      <>
      {
        ratioList.map((el,index)=>(
          <div className="process-wrap" key={index}>
            <p className="prw-title">{el.orderSourceCompany}</p>
            <Progress percent={(el.debtRatio)} />
          </div>
        ))
      }
      </>
    </YtCard>
}

export  default Index;
