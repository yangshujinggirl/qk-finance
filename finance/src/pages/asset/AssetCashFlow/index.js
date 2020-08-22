import { PageHeader, Tabs, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import TotalCount from './components/TotalCount';
import SubCrumb from '../components/SubCrumb';
import {subCrumbOptions} from '../subCrumbOptions';
import { columnsList } from './columns';
import { GetTotalApi, GetListApi } from 'api/asset/AssetCashFlow';
import './index.less'

const { TabPane } =Tabs;

const Index =({...props})=>{
  const [list,setList] = useState([])
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const { id:enterpriseId } = props.match.params;

  const fetchTotal=(values )=>{
    // let params = { industryTypeCode:'AGNPK', enterpriseId }
    // GetTotalApi(params)
    // .then((res)=> {
    //   const { aseetsStatisticsVO } =res.data;
    //   setTotalData({
    //     assetTotalCount:aseetsStatisticsVO.assetTotalCount,
    //     assetsRatio:aseetsStatisticsVO.assetsRatio,
    //     assetsTotal:aseetsStatisticsVO.assetsTotal,
    //     averageAccountingPeriod:aseetsStatisticsVO.averageAccountingPeriod,
    //   })
    // })
  }
  const fetchList=(values )=>{
    // let params = {
    //   pageSize:dataPag.pageSize,
    //   pageNow:dataPag.pageNow,
    //   ...values,
    //   enterpriseId
    // }
    // GetListApi(params)
    // .then((res)=> {
    //   const { pagination, result } =res.data;
    //   setDataPag(pagination)
    //   setList(result)
    // })
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
              num:'616',
              desc:'今日新增',
              value:'2'
            },{
              name:'前30日实际流出(万元)',
              num:'616',
              desc:'今日新增',
              value:'2'
            },{
              name:'60日现金净值预计(万元)',
              num:'616',
              desc:'今日新增',
              value:'2'
            },{
              name:'对应资产笔数(笔)',
              num:'616',
              desc:'今日新增',
              value:'2'
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
