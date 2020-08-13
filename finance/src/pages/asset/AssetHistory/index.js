import { Tabs, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import RiseChart from './components/RiseChart';
import TotalCount from './components/TotalCount';
import SubCrumb from '../components/SubCrumb';
import {subCrumbOptions} from '../subCrumbOptions';
import { columnsList } from './columns';
import './index.less'

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
          <SubCrumb data={subCrumbOptions(params.id)} active="4"/>
        </YtBreadcrumbName>
        <div className="asset-cash-flow-wrap">
          <TotalCount data={[
            {
              name:'存续期融资金额(万元)',
              num:'616',
              desc:'良好 无逾期',
              value:''
            },{
              name:'月新增资金额(万元)',
              num:'616',
              desc:'今日新增',
              value:'2'
            },{
              name:'总资产规模(万元)',
              num:'616',
              desc:'今日新增',
              value:'2'
            },{
              name:'总融资金额(万元)',
              num:'616',
              desc:'',
              value:''
            }]}/>
            <RiseChart />
            <div className="list-action part-same-shadow mt24">
              <YtTable columns={columnsList} dataSource={data} scroll={{ x: 1300 }}/>
              <YtPagination data={{total:500,currentPage:0,limit:15}}/>
            </div>
        </div>
      </div>
    )
  }
}

export default FinanceShow;
