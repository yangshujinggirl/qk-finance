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
  const [data, setData] = useState([]);
  const {id: assetNo} = props.match.params;
  const fetchInfo=()=>{
    let companyCode, orderNo;
    let assetData = Sessions.get('assetData');
    if(assetData&&assetData!='undefined') {
      assetData = JSON.parse(assetData);
      companyCode = assetData.companyCode;
      orderNo = assetData.orderNo;
    } else {
      Sessions.clear('assetData');
      let { query } =props.location;
      companyCode = query.companyCode;
      orderNo = query.orderNo;
      Sessions.set('assetData',JSON.stringify(query))
    }
    GetInfoApi({ assetNo, companyCode, orderNo })
    .then((res)=> {
      console.log(res);
    })
  }
  useEffect(()=>{ fetchInfo(); return()=>{Sessions.clear('assetData');} },[assetNo])
  return(
    <div className="assetVerify-info-pages">
      <div className="aio-main-part part-same-shadow">
        <div className="box-flex aiom-top">
          <p className="card-hd">资产溯源</p>
          <p className="sub-hd"><span className="label">资产编号</span>DD20200520084412</p>
          <p className="sub-hd"><span className="label">所属企业</span>成都众惠农资有限公司</p>
        </div>
        <div className="box-flex aiom-bottom">
          <YtTable columns={columns} dataSource={data}/>
        </div>
      </div>
    </div>
  )
}

export default AssetSource;
