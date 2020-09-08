import { Card, Collapse, Progress, Row, Col, Button } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { YtTable } from 'common';
import columns from './columns';
import { Sessions } from 'utils';
import { GetInfoApi } from 'api/asset/AssetSource';
import './index.less';

const { TabPane } = Tabs;

const AssetSource=({...props})=> {
  const [list, setList] = useState([]);
  const [assetInfo,setAssetInfo] =useState({})
  const [blockInfo,setBlockInfo] =useState({})
  const {id: assetNo} = props.match.params;
  const fetchInfo=()=>{
    let companyCode, orderNo;
    let assetData = Sessions.get('assetData');
    if(assetData&&assetData!='undefined') {
      assetData = JSON.parse(assetData);
      companyCode = assetData.companyCode;
      orderNo = assetData.orderNo;
      setAssetInfo(assetData);
    } else {
      Sessions.remove('assetData');
      let { query } =props.location;
      companyCode = query.companyCode;
      orderNo = query.orderNo;
      setAssetInfo(query);
      Sessions.set('assetData',JSON.stringify(query))
    }
    GetInfoApi({ assetNo, companyCode, orderNo })
    .then((res)=> {
      let { traceabilitySourceVO } =res.data;
      let historyUpLinkVOList = traceabilitySourceVO.historyUpLinkVOList?traceabilitySourceVO.historyUpLinkVOList:[];
      historyUpLinkVOList.map((el,index)=>{
        index++;
        el.key = index;
      })
      setBlockInfo(traceabilitySourceVO)
      setList(historyUpLinkVOList)
    })
  }
  useEffect(()=>{ fetchInfo(); return()=>{Sessions.remove('assetData');} },[assetNo])
  return(
    <div className="assetVerify-info-pages">
      <div className="aio-main-part part-same-shadow">
        <div className="box-flex aiom-top">
          <p className="card-hd">资产溯源</p>
          <p className="sub-hd"><span className="label">资产编号</span>{assetNo}</p>
          <p className="sub-hd"><span className="label">所属企业</span>{assetInfo.companyFullName}</p>
          <p className="sub-hd"><span className="label">区块高度</span>{blockInfo.upLinkHight}</p>
        </div>
        <div className="box-flex aiom-bottom">
          <YtTable columns={columns} dataSource={list}/>
        </div>
      </div>
    </div>
  )
}

export default AssetSource;
