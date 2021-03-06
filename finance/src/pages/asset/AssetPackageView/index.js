import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YtBtn, YtMessage, YtStatistic, YtTable, YtPagination, YtCard } from 'common';
import ViewCardPane from '../../components/ViewCardPane';
import AssetDistributeChart from '../components/AssetDistributeChart';
import AssetChart from './components/AssetChart';
import CashChart from './components/CashChart';
import FilterForm from './components/FilterForm';
import ChangeRankMod from './components/ChangeRankMod';
import {statusOption} from './components/options';
import { CommonUtils } from 'utils';
import { GetDeleteApi, GetPayMentApi, GetListApi, GetTotalApi, GetAmountChangeChartApi } from 'api/asset/AssetPackageView';
import './index.less';

const OperateWorkbench=({...props})=>{
    const [totalData,setTotalData] = useState({});
    const [dataPag,setDataPag] =useState({pageSize:5,pageNow:1,totalSize:0});
    const [payMentList,setPayMentList] = useState([]);
    const [list,setList] = useState([]);
    const [inputValues,setInputValues] = useState({});
    const fetchTotal=()=>{
      GetTotalApi()
      .then((res)=>{
        setTotalData(res.data)
      })
    }
    const fetchPayMent=()=>{
      GetPayMentApi()
      .then((res)=>{
        const { data } =res;
        let arr=[
          {
            item:'一年以上',
            percent:data.yearMoreCount,
          },{
            item:'180-365天',
            percent:data.yearCount,
          },{
            item:'90-180天',
            percent:data.halfYearCount,
          },{
            item:'30-90天',
            percent:data.ninetyCount,
          },{
            item:'30天以内',
            percent:data.thirtyCount,
          }]
          setPayMentList(arr);
      })
    }
    const fetchList=(values)=>{
      let params = {
            pageSize:dataPag.pageSize,
            pageNow:dataPag.pageNow,
            ...inputValues,
            ...values,
          }
      GetListApi(params)
      .then((res)=>{
        let { result, pagination } =res.data;
        let { pageSize, pageNow, totalSize } = pagination;
        result = result?result:[];
        setDataPag({pageSize, pageNow, totalSize})
        setList(result)
      })
    }
    const changePage = (pageNow, pageSize) => {
      fetchList({pageNow, pageSize})
    };
    const goInfo=(e,value)=>{
      e.stopPropagation();
      props.history.push(`/account/asset/packageView/info/${value}`);
    }
    const goRemove=(e,value)=>{
      e.stopPropagation()
      GetDeleteApi(value)
      .then((res)=> {
        YtMessage.success('移除成功');
        fetchList()
      })
    }
    const onSubmit = params => {
      setInputValues(params);
      setDataPag({...dataPag, pageNow: 1})
      fetchList({...params,pageNow: 1})
    };

    useEffect(()=>{ fetchTotal(); fetchList(); fetchPayMent() },[])

    return(
      <div className="asset-package-view-pages-wrap">
        <div className="box-flex">
          <ViewCardPane
            className="apvp-diy-card"
            label="资产包总金额(万元)"
            num={CommonUtils.formatAmount(totalData.assetAmount)}/>
          <ViewCardPane
            className="apvp-diy-card"
            label="资产包数量(个)"
            num={totalData.packetCount}/>
          <ViewCardPane
            className="apvp-diy-card"
            label="融资企业(家)"
            num={totalData.enterpriceCount}/>
          <ViewCardPane
            className="apvp-diy-card"
            label="融资笔数(笔)"
            num={totalData.assetNoCount}/>
          <ViewCardPane
            className="apvp-diy-card"
            label="债务企业(家)"
            num={totalData.orderSourceCompanyCount}/>
          <ViewCardPane
            className="apvp-diy-card"
            label="实际平均账期(天)"
            num={totalData.avgRealDate}/>
        </div>
        <div className="common-column-module-wrap aspv-part-one">
          <div className="module-left-wrap">
            <div className="box-flex chart-list part-same-shadow">
              <CashChart />
              <ChangeRankMod />
            </div>
          </div>
          <div className="module-right-wrap">
            <div className="part-same-shadow">
              <AssetDistributeChart className="big-chart" data={payMentList}/>
            </div>
          </div>
        </div>
        <div className="company-content-wrap">
          <FilterForm onSubmit={onSubmit}/>
          <div className="finance-list">
          {
            list.map((el,index)=> (
              <div className="fin-item box-flex" onClick={(e)=>goInfo(e,el.packetId)}  key={el.packetId}>
                <div className="data-lf">
                  <div className="company-info box-flex">
                    <p className="cmy-name">债权方:{el.companyFullName}</p>
                    <p className="status">
                      {
                        statusOption.map((item,idx)=>(
                          <span key={idx}>{item.key==el.packetStatus?item.value:''}</span>
                        ))
                      }
                    </p>
                    <p className="pkg-info">资产包名称：<span className="val-sty">{el.packetName}</span></p>
                    <p className="pkg-info">资产包编号：<span className="val-sty">{el.packetId}</span></p>
                    {
                      el.packetStatus=='0'&&
                      <Button className="remove-btn" onClick={(e)=>goRemove(e,el.packetId)}>移除</Button>
                    }

                  </div>
                  <div className="box-flex data-info">
                    <div className="info-im">
                      <p className="label-value">{CommonUtils.formatAmount(el.assetAmount)}万</p>
                      <p className="label-name">资产包金额</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">{el.assetCount}笔</p>
                      <p className="label-name">资产笔数</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">{el.maxRealDate}</p>
                      <p className="label-name">最长账期</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">{CommonUtils.formatAmount(el.maxAssetAmount)}万</p>
                      <p className="label-name">最大资产金额</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">{el.enterpricesCount}</p>
                      <p className="label-name">债务企业</p>
                    </div>
                    <div className="info-im">
                      <p className="label-value">{el.minRealDate}</p>
                      <p className="label-name">最短账期</p>
                    </div>
                  </div>
                </div>
                <div className="chart-rf">
                  <AssetChart index={index}/>
                </div>
              </div>
            ))
          }
          </div>
          {
            list.length>0&&
            <YtPagination data={dataPag} onChange={changePage}/>
          }
        </div>
      </div>
    )
}

export default OperateWorkbench;
