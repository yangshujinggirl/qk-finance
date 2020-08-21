import { Statistic, Progress } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import { columnsApply, columnsApprove } from './columns';
import { GetLoanOutStatisticalData } from 'api/finance/FinanceManagement';
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
	
	let totalData = {
		financeApplyCount: 550,
		financeApplyWeekRatio: 20,
		financeApplyDayRatio: 12,
		financeApplyDayAdd: 3,
		loanApplyMoney: 320,
		loanApplyMoneyWeekRatio: 12,
		loanApplyMoneyDayRatio: 3,
		loanApplyMoneyDayAdd: 22,
		loanAprovedCount: 3512,
		loanAprovedCountWeekRatio: 12,
		loanAprovedCountDayRatio: 3,
		loanAprovedCountDayAdd: 32,
		loanApprovedMoney: 2342,
		loanApprovedMoneyWeekRatio: 5,
		loanApprovedMoneyDayRatio: 23,
		loanApprovedMoneyDayAdd: 12
	}
	
function withSubscription(handleType,Mod) {
  return class FinanceShow extends React.Component {
    state={
      visible:false
    }
		
		componentWillMount(){
			totalData.financeApplyCount = 999;
		
		  GetLoanOutStatisticalData({})
		  .then((res)=> {
		    console.log(res)
				// setTotalData({
				// 	financeApplyCount: 550,
				// 	financeApplyWeekRatio: 20,
				// 	financeApplyDayRatio: 12,
				// 	financeApplyDayAdd: 3,
				// 	loanApplyMoney: 320,
				// 	loanApplyMoneyWeekRatio: 12,
				// 	loanApplyMoneyDayRatio: 3,
				// 	loanApplyMoneyDayAdd: 22,
				// 	loanAprovedCount: 3512,
				// 	loanAprovedCountWeekRatio: 12,
				// 	loanAprovedCountDayRatio: 3,
				// 	loanAprovedCountDayAdd: 32,
				// 	loanApprovedMoney: 2342,
				// 	loanApprovedMoneyWeekRatio: 5,
				// 	loanApprovedMoneyDayRatio: 23,
				// 	loanApprovedMoneyDayAdd: 12					
				// })
		  })
		}
    goCreat=()=> {
      this.setState({ visible:true });
    }
    onCancel=()=> {
      this.setState({ visible:false });
    }
    render() {
      const { visible } =this.state;
      let columns = handleType=="1"?columnsApply:columnsApprove;
      return(
        <div className="finance-company-list-wrap">
          <div className="box-flex">
            <ViewCardPane
              label="累计申请融资笔数"
              num={totalData.financeApplyCount}>
              <div className="box-flex">
                <YtStatistic value={totalData.financeApplyWeekRatio} type="up">周同比</YtStatistic>
                <YtStatistic value={totalData.financeApplyDayRatio} type="down">日环比</YtStatistic>
                <YtStatistic value={totalData.financeApplyDayAdd}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="累计申请放款金额(万元)"
              num={totalData.loanApplyMoney}>
              <div className="box-flex">
                <YtStatistic value={totalData.loanApplyMoneyWeekRatio} type="up">周同比</YtStatistic>
                <YtStatistic value={totalData.loanApplyMoneyDayRatio} type="down">日环比</YtStatistic>
                <YtStatistic value={totalData.loanApplyMoneyDayAdd}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="已审核放款笔数"
              num={totalData.loanAprovedCount}>
              <div className="box-flex">
                <YtStatistic value={totalData.loanAprovedCountWeekRatio} type="up">周同比</YtStatistic>
                <YtStatistic value={totalData.loanAprovedCountDayRatio} type="down">日环比</YtStatistic>
                <YtStatistic value={totalData.loanAprovedCountDayAdd}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="累计放款金额(万元)"
              num={totalData.loanApprovedMoney}>
              <div className="box-flex">
                <YtStatistic value={totalData.loanApprovedMoneyWeekRatio} type="up">周同比</YtStatistic>
                <YtStatistic value={totalData.loanApprovedMoneyDayRatio} type="down">日环比</YtStatistic>
                <YtStatistic value={totalData.loanApprovedMoneyDayAdd}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
          </div>
          <div className="main-content yt-common-list-pages-wrap">
            <FilterForm />
            <YtTable
              scroll={{ x: 1300 }}
             columns={columns}
             dataSource={data}/>
            <YtPagination data={{totalSize:500,pageNow:0,pageSize:15}}/>
          </div>
        </div>
      )
    }
  }
}

export default withSubscription;
