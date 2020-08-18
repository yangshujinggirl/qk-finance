import { Statistic } from 'antd';
import ViewCardPane from '../../components/ViewCardPane';
import BlockChainNode from '../../components/BlockChainNode';
import LatestCashFlow from '../../components/LatestCashFlow';
import { YtStatistic, YtTable, YtCard } from 'common';
import TinyAearChart from './components/TinyAearChart';
import AssetDynamicChart from './components/AssetDynamicChart';
import columns from './columns';
import { GetListApi } from 'api/finance/FinanceWorkbench';
import './index.less';
import stateIcon0 from './image/icon_state0.png';
import stateIcon1 from './image/icon_state1.png';

class OperateWorkbench extends React.Component {
  componentDidMount(){
    GetListApi()
    .then((res)=> {
      console.log(res)
    })
  }
  fetchList(){

  }

  render(){

    const data = [
    {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '￥300',
    amounted: '￥300',
    amountPocess: '￥300',
    address: 'New York No. 1 Lake Park',
    },
    {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '￥1,256',
    amounted: '￥1,256',
    amountPocess: '￥1,256',
    address: 'London No. 1 Lake Park',
    },
    {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '￥120',
    amounted: '￥120',
    amountPocess: '￥120',
    address: 'Sidney No. 1 Lake Park',
    },
    {
    code: '4',
    key: '4',
    name: 'Joe Black',
    amount: '￥120',
    amounted: '￥120',
    amountPocess: '￥120',
    address: 'Sidney No. 1 Lake Park',
    },

    ];
    return(
      <div className="financeWorkbench-pages-wrap">
        <div className="common-column-module-wrap finance-part-content">
          <div className="module-left-wrap">
            <div className="box-flex">
              <ViewCardPane
                label="新增销售订单数"
                num="520">
                <div className='box-flex'>
                  <YtStatistic value={12} type="up">周同比</YtStatistic>
                  <YtStatistic value="+2">今日变动</YtStatistic>
                </div>
              </ViewCardPane>
              <ViewCardPane
                label="新增收货数量(吨)"
                num="520">
                <div className='box-flex'>
                  <YtStatistic value={12} type="up">周同比</YtStatistic>
                  <YtStatistic value="+2">本日变动</YtStatistic>
                </div>
              </ViewCardPane>
              <ViewCardPane
                label="新增收货赊销额(元)"
                num="520">
                <div className='box-flex'>
                  <YtStatistic value={12} type="up">周同比</YtStatistic>
                  <YtStatistic value="+2">今日变动</YtStatistic>
                </div>
              </ViewCardPane>
              <ViewCardPane
                label="新增融资订单数"
                num="520">
                <div className='box-flex'>
                  <YtStatistic value={12} type="down">周同比</YtStatistic>
                  <YtStatistic value={35}>资产验真</YtStatistic>
                </div>
              </ViewCardPane>
            </div>
            <div className="company-list part-same-shadow mt24">
              <YtCard title="融资企业">
                <YtTable
                  columns={columns}
                  dataSource={data}
                  scroll={{ y: 200 }}/>
              </YtCard>
            </div>
          </div>
          <div className="module-right-wrap">
            <div className="part-same-shadow dynamic-state-action mt24">
              <YtCard title="融资动态">
                <div>
                  <div className="box-flex row-dt">
                    <div className="lf">
                      <img src={stateIcon0}/>
                    </div>
                    <div className="rf">
                      <p className="tit">入金 28.0万 ，付款方 迈瑞医疗</p>
                      <p>2020/04/28 08:00</p>
                    </div>
                  </div>
                  <div className="box-flex row-dt">
                    <div className="lf">
                      <img src={stateIcon1}/>
                    </div>
                    <div className="rf">
                      <p className="tit">入金 28.0万 ，付款方 迈瑞医疗</p>
                      <p>2020/04/28 08:00</p>
                    </div>
                  </div>
                  <div className="box-flex row-dt">
                    <div className="lf">
                      <img src={stateIcon0}/>
                    </div>
                    <div className="rf">
                      <p className="tit">入金 28.0万 ，付款方 迈瑞医疗</p>
                      <p>2020/04/28 08:00</p>
                    </div>
                  </div>
                </div>
              </YtCard>
            </div>
            <div className="part-same-shadow mt24">
              <YtCard title="资产动态">
                <div className="box-flex asset-dynamic-chart-wrap">
                  <div className="chart-lf">
                    <TinyAearChart />
                  </div>
                  <div className="info-rf">
                    <p className="cht-title">资产平均价值(应付)</p>
                    <div>
                      <Statistic value="¥154" suffix="万" />
                      <YtStatistic value="1.5%" type="up" className="percent">周同比</YtStatistic>
                    </div>
                  </div>
                </div>
                <div className="box-flex asset-dynamic-chart-wrap">
                  <div className="chart-lf">
                    <AssetDynamicChart />
                  </div>
                  <div className="info-rf">
                    <p className="cht-title">资产平均周期(账期)</p>
                    <div>
                      <Statistic value="89" suffix="天" />
                      <YtStatistic value="0.5天" type="up" className="percent">周同比</YtStatistic>
                    </div>
                  </div>
                </div>
              </YtCard>
            </div>
          </div>
        </div>
        <div className="common-column-module-wrap">
          <div className="module-left-wrap">
            <div className="part-same-shadow">
              <LatestCashFlow />
            </div>
          </div>
          <div className="module-right-wrap">
            <BlockChainNode />
          </div>
        </div>
      </div>
    )
  }
}

export default OperateWorkbench;
