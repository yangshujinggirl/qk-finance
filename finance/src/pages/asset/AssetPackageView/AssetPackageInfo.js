import { Table, Progress, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YtBreadcrumbName, YtTable, YtBtn, YtPagination, YtCard } from 'common';
import AssetInfoHead from '../components/AssetInfoHead';
import SubCrumb from '../components/SubCrumb';
import AssetChangeChart from './components/info/AssetChangeChart';
import AssetPaymentChart from './components/info/AssetPaymentChart';
import AssetStatusChart from './components/info/AssetStatusChart';
import ProcessChart from './components/info/ProcessChart';
import TableList from './components/info/TableList';

import { GetInfoApi } from 'api/asset/AssetPackageInfo';
import './AssetPackageInfo.less';


const AssetPackageInfo=({...props})=>{
  const [totalData,setTotalData] = useState({});
  const [dataPag,setDataPag] =useState({pageSize:5,pageNow:0,totalSize:0});
  const { id:packetId } = props.match.params;
  const fetchInfo=()=>{
    GetInfoApi({packetId})
    .then((res)=>{
      setTotalData(res.data.result);
    })
  }
  const processData=[
    {
      value:'8%',
      key:'损失',
    },
    {
      value:'12%',
      key:'可疑',
    },
    {
      value:'20%',
      key:'次级',
    },
    {
      value:'25%',
      key:'关注',
    },
    {
      value:'35%',
      key:'正常',
    }]

  useEffect(()=>{ fetchInfo() },[packetId]);


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
          <YtBtn size="free">过滤异常数据</YtBtn>
        </AssetInfoHead>
        <div className="three-module-wrap common-column-module-wrap">
          <div className="part-same-shadow module-equal-thr-wrap">
            <AssetChangeChart />
          </div>
          <div className="part-same-shadow module-equal-thr-wrap">
            <AssetPaymentChart />
          </div>
          <div className="two-row-mod module-equal-thr-wrap">
             <YtCard title="资产状态" className="part-same-shadow">
                <ProcessChart data={processData}/>
             </YtCard>
             <YtCard title="资产集中度" className="part-same-shadow" extra={<span>合计90%</span>}>
                <div className="asset-focus">
                  <div className="process-item">
                    滑县鑫农农资有限公司
                    <Progress percent={30} />
                  </div>
                  <div className="process-item">
                    滑县鑫农农资有限公司
                    <Progress percent={30} />
                  </div>
                  <div className="process-item">
                    滑县鑫农农资有限公司
                    <Progress percent={30} />
                  </div>
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
