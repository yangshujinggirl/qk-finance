import { Table, Progress, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import NP from 'number-precision';
import { useState, useEffect } from 'react';
import { YtMessage, YtBreadcrumbName, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import AssetInfoHead from './components/AssetInfoHead';
import SubCrumb from '../components/SubCrumb';
import AssetChangeChart from './components/info/AssetChangeChart';
import AssetPaymentChart from './components/info/AssetPaymentChart';
import AssetStatusChart from './components/info/AssetStatusChart';
import ProcessChart from './components/info/ProcessChart';
import TableList from './components/info/TableList';

import { GetAssetTypeApi, GetConcentrApi, GetInfoApi, GetFilterDataApi } from 'api/asset/AssetPackageInfo';
import './AssetPackageInfo.less';


const AssetPackageInfo=({...props})=>{
  const [totalData,setTotalData] = useState({assetTotal:1,});
  const [processData,setProcessData] = useState([]);
  const [list,setList] = useState([]);
  const [rateTotal,setRateTotal] = useState(0);
  const { id:packetId } = props.match.params;
  const fetchInfo=()=>{
    GetInfoApi({packetId})
    .then((res)=>{
      let { data } = res;
      setTotalData(data.result);
      fetchConcentr(data.result);
    })
  }
  const fetchConcentr=(values)=>{
    GetConcentrApi({packetId})
    .then((res)=>{
      const { data } =res;
      let sum=0;
      data.map((el) => {
        el.amount = NP.round(el.amount,2);
        el.percent = NP.round(NP.divide(el.amount,values.assetTotal),2)
        sum = NP.plus(sum,el.percent);
      })
      setList(data);
      setRateTotal(sum);
    })
  }
  const fetchAssetType=()=>{
    GetAssetTypeApi({ packetId })
    .then((res)=>{
      const { data } =res;
      const { totalCount, noticeCount, normalCount, sencondCount, troubleCount, lossCount } =data;
      const processData=[{
          value:`${NP.round(NP.divide(lossCount,totalCount),2)}%`,
          key:'损失',
        },{
          value:`${NP.round(NP.divide(troubleCount,totalCount),2)}%`,
          key:'可疑',
        },{
          value:`${NP.round(NP.divide(sencondCount,totalCount),2)}%`,
          key:'次级',
        },{
          value:`${NP.round(NP.divide(noticeCount,totalCount),2)}%`,
          key:'关注',
        },{
          value:`${NP.round(NP.divide(normalCount,totalCount),2)}%`,
          key:'正常',
        }]
      setProcessData(processData);
    })
  }
  const goFilter=()=>{
    GetFilterDataApi({packetId})
    .then((res)=>{
      YtMessage.success('操作成功');
      window.location.reload()
    })
  }


  useEffect(()=>{ fetchAssetType(); fetchInfo(); },[packetId]);


  const linkList =[
    {
      url:`/account/asset/packageView/info/${packetId}`,
      key:'1',
      name:'资产包详情'
    },{
      url:`/account/asset/packageView/verifyInfo/${packetId}`,
      key:'2',
      name:'验真详情'
    }]
  return(
    <>
      <YtBreadcrumbName>
        <SubCrumb data={linkList} active="1"/>
      </YtBreadcrumbName>
      <div className="asset-package-info-pages-wrap">
        <AssetInfoHead data={totalData}>
          <YtBtn size="free" onClick={goFilter}>过滤异常数据</YtBtn>
        </AssetInfoHead>
        <div className="three-module-wrap common-column-module-wrap">
          <div className="part-same-shadow module-left-wrap">
            <AssetPaymentChart packetId={packetId}/>
          </div>
          <div className="two-row-mod module-right-wrap">
             <YtCard title="资产状态" className="part-same-shadow">
                <ProcessChart data={processData}/>
             </YtCard>
             <YtCard title="资产集中度" className="part-same-shadow" extra={<span>合计{rateTotal}%</span>}>
                <div className="asset-focus">
                  {
                    list.map((el,index)=>(
                      <div className="process-item" key={index}>
                        {el.order_source_company}
                        <Progress percent={el.percent} />
                      </div>
                    ))
                  }
                </div>
             </YtCard>
          </div>
        </div>
        <TableList info={{...totalData,packetId }}/>
      </div>
    </>
  )
}

export default AssetPackageInfo;
