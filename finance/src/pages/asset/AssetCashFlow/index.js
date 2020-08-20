import { PageHeader, Tabs, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import RiseChart from './components/RiseChart';
import TotalCount from './components/TotalCount';
import SubCrumb from '../components/SubCrumb';
import {subCrumbOptions} from '../subCrumbOptions';
import FutureMod from './FutureMod';
import { columnsList } from './columns';
import './index.less'

const { TabPane } =Tabs;

class FinanceShow extends React.Component {
  state={
    defaultActiveKey:'1',
    visible:false
  }
  callback=(value)=> {
    console.log(value)
    this.setState({ defaultActiveKey:value })
  }
  render() {
    const { visible, defaultActiveKey } =this.state;
    const { params } =this.props.match;
    return(
      <div>
        <YtBreadcrumbName>
          <SubCrumb data={subCrumbOptions(params.id)} active="3"/>
        </YtBreadcrumbName>
        <div className="asset-cash-flow-wrap">
          <Tabs defaultActiveKey={defaultActiveKey} onChange={this.callback}>
            <TabPane tab="预计未来现金流" key="1">
              {defaultActiveKey=="1"&&
                <FutureMod>
                  <TotalCount data={[
                    {
                      name:'未来预计现金流入(万元)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    },{
                      name:'未来预计现金流出(万元)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    },{
                      name:'未来预计现金净值(万元)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    },{
                      name:'现金流对应资产笔数(笔数)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    }]}/>
                </FutureMod>
              }
            </TabPane>
            <TabPane tab="实际现金流" key="2">
              {defaultActiveKey=="2"&&
                <FutureMod>
                  <TotalCount data={[
                    {
                      name:'实际现金流入(万元)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    },{
                      name:'实际现金流出(万元)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    },{
                      name:'实际现金净值(万元)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    },{
                      name:'现金流对应资产笔数(笔数)',
                      num:'616',
                      desc:'今日新增',
                      value:'2'
                    }]}/>
                </FutureMod>
              }
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default FinanceShow;
