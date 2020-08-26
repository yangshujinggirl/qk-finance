import { Tabs, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import RiseChart from './components/RiseChart';
import TotalCount from './components/TotalCount';
import SubCrumb from '../components/SubCrumb';
import {subCrumbOptions} from '../subCrumbOptions';
import { columnsList } from './columns';
import { GetTotalApi, GetListApi } from 'api/asset/AssetHistory';
import './index.less'

const { TabPane } =Tabs;

const Index=({...props})=>{
  const [list,setList] = useState([]);
  const [totalData,setTotalData] = useState({})
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const { id:enterpriseId } = props.match.params;

  const fetchTotal=(values )=>{
    let params = { enterpriseId }
    GetTotalApi(params)
    .then((res)=> {
      let { aseetsStatisticsVO={} } =res.data;
      setTotalData(aseetsStatisticsVO)
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
      result.map((el,index)=>{ index++; el.key = index})
      setDataPag(pagination)
      setList(result)
    })
  }
  const changePage = (pageNow, pageSize) => {
    fetchList({pageNow, pageSize})
  };

  useEffect(() => { fetchTotal(); fetchList(); },[enterpriseId]);
  return(
    <div>
      <YtBreadcrumbName>
        <SubCrumb data={subCrumbOptions(enterpriseId)} active="4"/>
      </YtBreadcrumbName>
      <div className="asset-cash-flow-wrap">
        <TotalCount data={[
          {
            name:'存续期融资金额(万元)',
            num:totalData.financeAmount,
            desc:'良好 无逾期',
            value:''
          },{
            name:'月新增资金额(万元)',
            num:totalData.monthlyAddAmount,
            desc:'今日新增',
            value:'2'
          },{
            name:'总资产规模(万元)',
            num:totalData.assetTotalAmount,
            desc:'今日新增',
            value:'2'
          },{
            name:'总融资金额(万元)',
            num:totalData.financeTotalAmount,
            desc:'',
            value:''
          }]}/>
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
