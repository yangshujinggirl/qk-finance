import { PageHeader, Tabs, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import TotalCount from './components/TotalCount';
import FundPoolChart from '../../components/FundPoolChart';
import SubCrumb from '../components/SubCrumb';
import {subCrumbOptions} from '../subCrumbOptions';
import { columnsList } from './columns';
import { GetTotalApi } from 'api/asset/AssetCashFlow';
import { GetListApi } from 'api/asset/AssetList';
import './index.less'

const { TabPane } =Tabs;

const Index =({...props})=>{
  const [list,setList] = useState([]);
  const [totalData,setTotalData] = useState({
    '60DayCash':{},
    'assetData':{},
    'before30DayCashOut':{},
    'next30DayCashIn':{},
  })
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const { id:enterpriseId } = props.match.params;

  const fetchTotal=(values )=>{
    let params = { enterpriseId }
    GetTotalApi(params)
    .then((res)=> {
      setTotalData(res.data)
    })
  }
  const fetchList=(values )=>{
    let params = {
      pageSize:dataPag.pageSize,
      pageNow:dataPag.pageNow,
      ...values,
      enterpriseId
    }
    GetListApi(params)
    .then((res)=> {
      const { pagination, result } =res.data;
      setDataPag(pagination)
      setList(result)
    })
  }
  const changePage = (pageNow, pageSize) => {
    fetchList({pageNow, pageSize})
  };
  useEffect(() => { fetchList(); fetchTotal() },[enterpriseId]);
  return(
    <div>
      <YtBreadcrumbName>
        <SubCrumb data={subCrumbOptions(enterpriseId)} active="3"/>
      </YtBreadcrumbName>
      <div className="asset-cash-flow-wrap">
          <TotalCount data={[
            {
              name:'后30日预计流入(万元)',
              num:totalData.next30DayCashIn.dayData,
              desc:'今日新增',
              value:totalData.next30DayCashIn.totalAmount
            },{
              name:'前30日实际流出(万元)',
              num:totalData.before30DayCashOut.dayData,
              desc:'今日新增',
              value:totalData.before30DayCashOut.totalAmount
            },{
              name:'60日现金净值预计(万元)',
              num:totalData['60DayCash'].dayData,
              desc:'今日新增',
              value:totalData['60DayCash'].dayData,
            },{
              name:'对应资产笔数(笔)',
              num:totalData.assetData.dayData,
              desc:'今日新增',
              value:totalData.assetData.totalData,
            }]}/>
          <FundPoolChart />
          <div className="list-action part-same-shadow mt24">
            <YtTable columns={columnsList} dataSource={list} scroll={{ x: 1300 }}/>
            {
             list.length>0&&
             <YtPagination data={dataPag} onChange={changePage}/>
            }
          </div>
      </div>
    </div>
  )
}

export default Index;
