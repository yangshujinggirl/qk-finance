import { Button, Statistic, Progress } from 'antd';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { YtMessage, YtBreadcrumbName, YtPagination, YtStatistic, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../components/ViewCardPane';
import SubCrumb from '../components/SubCrumb';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import columnsList from './columns';
import {subCrumbOptions} from '../subCrumbOptions';
import { GetTotalApi, GetListApi, GetAddApi } from 'api/asset/AssetList';
import './index.less'

const FinanceShow=({...props})=> {
  const [visible, setVisible] = useState(false);
  const [list,setList] = useState([])
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const [inputValues,setInputValues] = useState({});
  const [totalData,setTotalData] = useState({})
  const { id:enterpriseId } = props.match.params;
  const goCreat=()=> {
    setVisible(true)
  }
  const onCancel=()=> {
    setVisible(false)
  }
  const onOk=(values,callback)=> {
    props.history.push('/account/asset/packageView')
  }
  const fetchTotal=(values )=>{
    let params = { industryTypeCode:'AGNPK', enterpriseId }
    GetTotalApi(params)
    .then((res)=> {
      const { aseetsStatisticsVO } =res.data;
      setTotalData(aseetsStatisticsVO)
    })
  }
  const fetchList=(values )=>{
    let params = {
      pageSize:dataPag.pageSize,
      pageNow:dataPag.pageNow,
      ...inputValues,
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
  const onSubmit = params => {
    let { time, ...values } =params;
    if(time) {
      values.assetDateMin = moment(time[0]).format('YYYY-MM-DD');
      values.assetDateMax = moment(time[1]).format('YYYY-MM-DD');
    }
    setInputValues(params);
    fetchList(values)
  };
  useEffect(() => {
    fetchList();
    fetchTotal()
  },[enterpriseId]);
  return(
    <div>
      <YtBreadcrumbName>
        <SubCrumb data={subCrumbOptions(enterpriseId)} active="2"/>
      </YtBreadcrumbName>
      <div className="finance-company-list-wrap">
        <div className="box-flex">
          <ViewCardPane label="累计资产总笔数" num={totalData.assetTotalCount}>
            <div className="box-flex">
              {/* <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic> */}
              <YtStatistic value={`${totalData.assetTotalCountToday}笔`}>本日新增</YtStatistic>
            </div>
          </ViewCardPane>
          <ViewCardPane label="累计资产总额(万元)" num={totalData.assetsTotal}>
            <div className="box-flex">
              {/* <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic> */}
              <YtStatistic value={`${totalData.assetsTotalToday}万`}>本日新增</YtStatistic>
            </div>
          </ViewCardPane>
          <ViewCardPane label="资产平均账期(天)" num={totalData.averageAccountingPeriod}>
            <div className="box-flex">
              {/* <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic> */}
              <YtStatistic value={`${totalData.realDate}天`}>账期</YtStatistic>
            </div>
          </ViewCardPane>
          <ViewCardPane label="资产验真比率" num={totalData.assetsRatio}>
            {/* <div className="box-flex">
              <YtStatistic value="12%" type="up">周同比</YtStatistic>
              <YtStatistic value="12%" type="up">日环比</YtStatistic>
            </div> */}
          </ViewCardPane>
        </div>
        <div className="yt-common-list-pages-wrap">
          <FilterForm  onSubmit={onSubmit}/>
          <div className="handle-common-action">
            <YtBtn onClick={goCreat} size="free">+资产包创建</YtBtn>
          </div>
          <YtTable
           scroll={{ x: 1300 }}
           columns={columnsList}
           dataSource={list}/>
         {
          list.length>0&&
          <YtPagination data={dataPag} onChange={changePage}/>
         }
        <CreatModal
          visible={visible}
          onCancel={onCancel}
          onOk={onOk}
          enterpriseId={enterpriseId}/>
        </div>
      </div>
    </div>
  )
}

export default FinanceShow;
