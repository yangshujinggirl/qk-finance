import { Tabs, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import BlockChainNode from '../../components/BlockChainNode';
import SubCrumb from '../components/SubCrumb';
import DealCountChart from './components/DealCountChart';
import {subCrumbOptions} from '../subCrumbOptions';
import { columnsList } from './columns';
import './index.less'

import iconImg0 from './image/icon0.png';
import iconImg1 from './image/icon1.png';
import iconImg2 from './image/icon2.png';
import iconImg3 from './image/icon3.png';
import iconImg4 from './image/icon4.png';

const { TabPane } =Tabs;

class FinanceShow extends React.Component {
  render() {
    const data=[
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:1
      },
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:2
      },
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:3
      }
    ]
    const { params } =this.props.match;
    return(
      <div>
        <YtBreadcrumbName>
          <SubCrumb data={subCrumbOptions(params.id)} active="5"/>
        </YtBreadcrumbName>
        <div className="block-chain-pages-wrap">
          <div className="common-column-module-wrap mt24">
            <div className="module-left-wrap part-same-shadow">
              <div className="bcp-node-list box-flex">
                <div className="bcpn-item">
                  <img src={iconImg0} />
                  <p className="node-info">
                    <p className="num">8</p>
                    组织个数
                  </p>
                </div>
                <div className="bcpn-item">
                  <img src={iconImg2} />
                  <p className="node-info">
                    <p className="num">8</p>
                    当前节点数
                  </p>
                </div>
                <div className="bcpn-item">
                  <img src={iconImg3} />
                  <p className="node-info">
                    <p className="num">8</p>
                    区块高度
                  </p>
                </div>
                <div className="bcpn-item">
                  <img src={iconImg4} />
                  <p className="node-info">
                    <p className="num">8</p>
                    总交易数
                  </p>
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
            <YtTable columns={columnsList} dataSource={data}/>
            <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default FinanceShow;
