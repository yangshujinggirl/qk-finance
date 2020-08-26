import { Tabs, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import BlockChainNode from '../../components/BlockChainNode';
import SubCrumb from '../components/SubCrumb';
import DealCountChart from './components/DealCountChart';
import {subCrumbOptions} from '../subCrumbOptions';
import { columnsList } from './columns';
import { GetDealApi, GetTotalApi, GetListApi } from 'api/asset/BlockbChain';

import './index.less'

import iconImg0 from './image/icon0.png';
import iconImg1 from './image/icon1.png';
import iconImg2 from './image/icon2.png';
import iconImg3 from './image/icon3.png';
import iconImg4 from './image/icon4.png';

const { TabPane } =Tabs;

const Index=({...props})=> {
  const [list,setList] = useState([]);
  const [totalData,setTotalData] = useState({})
  const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
  const { id:enterpriseId } = props.match.params;

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
  const fetchTotal=(values )=>{
    GetTotalApi({ enterpriseId })
    .then((res)=> {
      // setTotalData(res);
    })
  }
  const changePage = (pageNow, pageSize) => {
    fetchList({pageNow, pageSize})
  };
  useEffect(() => {
    fetchList();
    fetchTotal();
  },[enterpriseId]);
  return(
    <div>
      <YtBreadcrumbName>
        <SubCrumb data={subCrumbOptions(enterpriseId)} active="5"/>
      </YtBreadcrumbName>
      <div className="block-chain-pages-wrap">
        <div className="common-column-module-wrap mt24">
          <div className="module-left-wrap part-same-shadow">
            <div className="bcp-node-list box-flex">
              <div className="bcpn-item">
                <img src={iconImg0} />
                <div className="node-info">
                  <p className="num">8</p>
                  组织个数
                </div>
              </div>
              <div className="bcpn-item">
                <img src={iconImg2} />
                <div className="node-info">
                  <p className="num">8</p>
                  当前节点数
                </div>
              </div>
              <div className="bcpn-item">
                <img src={iconImg3} />
                <div className="node-info">
                  <p className="num">8</p>
                  区块高度
                </div>
              </div>
              <div className="bcpn-item">
                <img src={iconImg4} />
                <div className="node-info">
                  <p className="num">8</p>
                  总交易数
                </div>
              </div>
            </div>
          </div>
          <div className="module-right-wrap part-same-shadow">
            <div className="bcp-load">业务全闭环数据实时上链中</div>
          </div>
        </div>
        <div className="common-column-module-wrap mt24">
          <div className="module-left-wrap">
            <DealCountChart />
          </div>
          <div className="module-right-wrap">
            <BlockChainNode />
          </div>
        </div>
        <div className="list-action part-same-shadow mt24">
          <YtTable columns={columnsList} dataSource={list}/>
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
