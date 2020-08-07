import { PageHeader, Button, Progress, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { YtStatistic, YtBreadcrumbName, YtPagination, YtTable, YtBtn, YtCard } from 'common';
import ViewCardPane from '../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import RiseChart from './components/RiseChart';
import AssetNumCharts from './components/AssetNumCharts';
import AssetScaleCharts from './components/AssetScaleCharts';
import AssetVerifyCharts from './components/AssetVerifyCharts';
// import CompanyTypeCharts from './components/CompanyTypeCharts';
import CompanyList from './components/CompanyList';
// import { columnsList } from './columns';
import './index.less'

class FinanceShow extends React.Component {
  state={
    visible:false
  }
  render() {
    const { visible } =this.state;
    const data=[
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:0
      },
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
      },
    ]
    return(
      <div>
        <div className="finance-company-list-wrap">
          <div className="box-flex">
            <ViewCardPane
              label="融资企业累计（家）"
              num="520">
              <YtStatistic value="2家">本日新增</YtStatistic>
            </ViewCardPane>
            <ViewCardPane
              label="累计资产金额（万元）"
              num="520">
              <YtStatistic value="2家">本日新增</YtStatistic>
            </ViewCardPane>
            <ViewCardPane
              label="累计融资金额（万元）"
              num="520">
              <YtStatistic value="¥ 12,423">本日新增</YtStatistic>
            </ViewCardPane>
            <ViewCardPane
              label="融资比"
              num="520">
              <YtStatistic value="2笔">本日新增融资笔数</YtStatistic>
            </ViewCardPane>
          </div>
          <YtCard title="资产增长趋势" className="part-same-shadow">
            <div><RiseChart /></div>
          </YtCard>
          <Row justify="space-between" align="top" gutter={24}>
             <Col span={8}>
               <YtCard title="企业资产笔数" className="part-same-shadow">
                 <AssetNumCharts />
               </YtCard>
             </Col>
             <Col span={8}>
               <YtCard title="企业资产规模" className="part-same-shadow">
                 <AssetScaleCharts />
               </YtCard>
             </Col>
             <Col span={8}>
               <YtCard title="资产验真" className="part-same-shadow">
                 <AssetVerifyCharts />
               </YtCard>
             </Col>
          </Row>
          {/*<Row justify="space-between" align="top" gutter={24} className="fcl-tow-prart">
             <Col span={12}>
               <YtCard
                 title="融资企业"
                 className="part-same-shadow"
                 extra={<Link to="/account/financeCompanyList">更多</Link>}>
                 <YtTable columns={columnsList} dataSource={data}/>
               </YtCard>
             </Col>
             <Col span={12}>
               <YtCard title="企业分类" className="part-same-shadow">
                 <CompanyTypeCharts />
               </YtCard>
             </Col>
           </Row>*/}
           <CompanyList />
        </div>
      </div>
    )
  }
}

export default FinanceShow;
