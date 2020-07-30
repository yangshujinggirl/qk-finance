import { Table } from 'antd';
import { Link } from 'react-router-dom'
import ViewCardPane from '../../components/ViewCardPane';
import BlockChainNode from '../../components/BlockChainNode';
import LatestCashFlow from '../../components/LatestCashFlow';
import { YtTable, YtCard } from 'common';
import './index.less';

class OperateWorkbench extends React.Component {

  render(){
    const columns = [
    {
    title: '企业编号',
    dataIndex: 'code',
    render: text => <a>{text}</a>,
    },
    {
    title: '企业名称',
    className: 'column-money',
    dataIndex: 'name',
    align: 'right',
    },
    {
    title: '资产总额(万元)',
    dataIndex: 'amount',
    },
    {
    title: '已融资总额(万元)',
    dataIndex: 'amounted',
    },
    {
    title: '已融资产占比(%)',
    dataIndex: 'amountPocess',
    },
    {
    title: '操作',
    dataIndex: 'amountPocess',
    render:(text,record,index)=> {
      return <Link to="/account/operateWorkbench/info">详情</Link>
    }
    },
    ];

    const data = [
    {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '￥300,000.00',
    amounted: '￥300,000.00',
    amountPocess: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
    },
    {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '￥1,256,000.00',
    amounted: '￥1,256,000.00',
    amountPocess: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
    },
    {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '￥120,000.00',
    amounted: '￥120,000.00',
    amountPocess: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
    },
    ];
    return(
      <div className="financeWorkbench-pages-wrap">
        <div className="common-column-module-wrap finance-part-content">
          <div className="module-left-wrap">
            <div className="part-overview-wrap box-flex">
              <ViewCardPane
                label="新增销售订单数"
                num="520">
                <div className='box-flex'>
                  <p className="label-lf">周同比 <span className="high-prercent">12</span></p>
                  <p className="label-rf">本日变动+ <span className="hight-num">200</span></p>
                </div>
              </ViewCardPane>
              <ViewCardPane
                label="新增收货数量(吨)"
                num="520">
                <div className='box-flex'>
                  <p className="label-lf">周同比 <span className="high-prercent">12</span></p>
                  <p className="label-rf">本日变动+ <span className="hight-num">200</span></p>
                </div>
              </ViewCardPane>
              <ViewCardPane
                label="新增收货赊销额(元)"
                num="520">
                <div className='box-flex'>
                  <p className="label-lf">周同比 <span className="high-prercent">12</span></p>
                  <p className="label-rf">本日变动+ <span className="hight-num">200</span></p>
                </div>
              </ViewCardPane>
              <ViewCardPane
                label="新增融资订单数"
                num="520">
                <div className='box-flex'>
                  <p className="label-lf">周同比 <span className="high-prercent">12</span></p>
                  <p className="label-rf">本日变动+ <span className="hight-num">200</span></p>
                </div>
              </ViewCardPane>
            </div>
            <div className="company-list part-same-shadow">
              <YtCard title="融资企业">
                <YtTable
                  columns={columns}
                  dataSource={data}/>
              </YtCard>
            </div>
            <div className="part-same-shadow">
              <LatestCashFlow />
            </div>
          </div>
          <div className="module-right-wrap">
            <div className="part-same-shadow dynamic-state-action">
              <YtCard title="融资动态">
                <div>
                  <div className="box-flex row-dt">
                    <div className="lf">
                      <img src=""/>
                    </div>
                    <div className="rf">
                      <p className="tit">入金 28.0万 ，付款方 迈瑞医疗</p>
                      <p>2020/04/28 08:00</p>
                    </div>
                  </div>
                  <div className="box-flex row-dt">
                    <div className="lf">
                      <img src=""/>
                    </div>
                    <div className="rf">
                      <p className="tit">入金 28.0万 ，付款方 迈瑞医疗</p>
                      <p>2020/04/28 08:00</p>
                    </div>
                  </div>
                  <div className="box-flex row-dt">
                    <div className="lf">
                      <img src=""/>
                    </div>
                    <div className="rf">
                      <p className="tit">入金 28.0万 ，付款方 迈瑞医疗</p>
                      <p>2020/04/28 08:00</p>
                    </div>
                  </div>
                </div>
              </YtCard>
            </div>
            <div className="part-same-shadow">
              <YtCard title="资产动态">
                 资产动态
              </YtCard>
            </div>
            <div className="part-same-shadow">
              <BlockChainNode />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OperateWorkbench;
