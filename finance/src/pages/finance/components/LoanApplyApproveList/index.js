import { Statistic, Progress } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import { columnsApply, columnsApprove } from './columns';
import { GetLoanOutStatisticalData, GetLoanList } from 'api/finance/FinanceManagement';
import './index.less'

const data = [
  {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
    address: 'New York No. 1 Lake Park',
  },
  {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
    address: 'London No. 1 Lake Park',
  },
  {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '300',
    amounted: '30',
    amountPocess: '30',
    address: 'Sidney No. 1 Lake Park',
  },
  ];
		
function withSubscription(handleType,Mod) {
  return class FinanceShow extends React.Component {
    state={
      visible:false,
			loanList: [],
			summary: {
				"cumulativeLoan": {
					"totalData": 20,
					"weekYoY": "0",
					"dayChainRation": "0",
					"dayAddition": "0"
				},
				"accumulatedFinancing": {
					"totalData": 77.93,
					"weekYoY": "0",
					"dayChainRation": "0",
					"dayAddition": "0"
				},
				"cumulativeLoanApplication": {
					"totalData": 25,
					"weekYoY": "0",
					"dayChainRation": "0",
					"dayAddition": "0"
				},
				"reviewLoan": {
					"totalData": 888.43,
					"weekYoY": "0",
					"dayChainRation": "0",
					"dayAddition": "0"
				}
			}
    }
		
		componentWillMount(){		
		  // 顶部统计值
			GetLoanOutStatisticalData({})
		  .then((res)=> {
				this.state.summary = res.data
				this.forceUpdate();
		  })
			
			// 放款列表
			GetLoanList({
				"pageNow": 1,
				"pageSize": 15,
				"typeCode": "ALL",
				"enterpriseId": "ALL",
				"loanStatus": "-1"
			})
			.then((res)=> {
				this.state.loanList = res.data.result;
				this.forceUpdate();
			});
		}
    goCreat=()=> {
      this.setState({ visible:true });
    }
    onCancel=()=> {
      this.setState({ visible:false });
    }
    render() {
      // const { visible } =this.state;
			const summary = this.state.summary;
			const loanList = this.state.loanList;
			console.log('loanList==>', loanList);
      let columns = handleType=="1"?columnsApply:columnsApprove;
      return(
        <div className="finance-company-list-wrap">
          <div className="box-flex">
            <ViewCardPane
              label="累计申请融资笔数"
              num={summary.cumulativeLoan.totalData}>
              <div className="box-flex">
                <YtStatistic value={summary.cumulativeLoan.weekYoY} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.cumulativeLoan.dayChainRation} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.cumulativeLoan.dayAddition}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="累计申请放款金额(万元)"
              num={summary.accumulatedFinancing.totalData}>
              <div className="box-flex">
                <YtStatistic value={summary.accumulatedFinancing.weekYoY} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.accumulatedFinancing.dayChainRation} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.accumulatedFinancing.dayAddition}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="已审核放款笔数"
              num={summary.cumulativeLoanApplication.totalData}>
              <div className="box-flex">
                <YtStatistic value={summary.cumulativeLoanApplication.weekYoY} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.cumulativeLoanApplication.dayChainRation} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.cumulativeLoanApplication.dayAddition}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="累计放款金额(万元)"
              num={summary.reviewLoan.totalData}>
              <div className="box-flex">
                <YtStatistic value={summary.reviewLoan.weekYoY} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.reviewLoan.dayChainRation} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.reviewLoan.dayAddition}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
          </div>
          <div className="main-content yt-common-list-pages-wrap">
            <FilterForm />
            <YtTable
              scroll={{ x: 1300 }}
             columns={columns}
             dataSource={loanList}/>
            <YtPagination data={{totalSize:500,pageNow:1,pageSize:15}}/>
          </div>
        </div>
      )
    }
  }
}

export default withSubscription;
