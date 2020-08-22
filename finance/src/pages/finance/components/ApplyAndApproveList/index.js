import { Statistic, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import { columnsList } from './columns';
import './index.less'
import { GetStatisticalData, GetFinanceList } from 'api/finance/FinanceManagement';
import { useState, useEffect } from 'react';

function withSubscription(handleType,Mod) {

  return class FinanceShow extends React.Component {
    state={
      visible:false,
			data: [],
			pagination: {
				totalSize: 0, 
				totalPage: 0, 
				pageSize: 15, 
				pageNow: 1,
			},
			searchParam: {
				loanStatus:-1
			},
			summary: {
				total1: 0,
				total2: 0,
				total3: 0,
				total4: 0,
				w1: 0,
				w2: 0,
				w3: 0,
				w4: 0,
				d1: 0,
				d2: 0,
				d3: 0,
				d4: 0,
				a1: 0,
				a2: 0,
				a3: 0,
				a4: 0
			}
    }
		fetchFinanceList=()=> {
			const param={
				pageSize: this.state.pagination.pageSize,
				pageNow: this.state.pagination.pageNow,
				typeCode: "ALL",
				enterpriseId: "ALL",
				loanStatus: this.state.loanStatus,
				startDate: this.state.searchParam.startDate,
				endDate: this.state.searchParam.endDate
			}
			GetFinanceList(param)
			.then((res)=> {
			  this.setState({ 
					data: res.data.result,
					pagination: res.data.pagination,
				})
				
				this.forceUpdate()
			})
		}
    componentDidMount(){
			this.fetchFinanceList()
			
      GetStatisticalData({})
      .then((res)=> {
        console.log(res)
				var d = res.data;
				this.state.summary.total1=d[0].total
				this.state.summary.total2=d[0].countNum
				this.state.summary.total3=d[1].total
				this.state.summary.total4=d[1].countNum
				this.state.summary.w1=d[0].numWeekRatio
				this.state.summary.w2=d[0].amountWeekRatio
				this.state.summary.w3=d[1].numWeekRatio
				this.state.summary.w4=d[1].amountWeekRatio
				this.state.summary.d1=d[0].numDayRatio
				this.state.summary.d2=d[0].amountDayRatio
				this.state.summary.d3=d[1].numDayRatio
				this.state.summary.d4=d[1].amountDayRatio
				this.state.summary.a1=d[0].numTodayRatio
				this.state.summary.a2=d[0].amountTodayRatio
				this.state.summary.a3=d[1].numTodayRatio
				this.state.summary.a4=d[1].amountTodayRatio
      })
    }
    onOk=()=> {
      this.setState({ visible:false });
    }
    onCancel=()=> {
      this.setState({ visible:false });
    }
		onChange=(currentPage,limit)=> {
			console.log(currentPage, limit)
			this.state.pagination.pageNow=currentPage
			this.state.pagination.pageSize=limit
			this.fetchFinanceList();
		}
    onOperateClick=(item,type)=> {
      this.setState({ visible:true });
    }
		onSubmit = values => {
			console.log('onSubmit', values);
			this.state.searchParam.loanStatus = values.financeStatus;
			this.state.searchParam.startDate = values.applyTime && values.applyTime[0];
			this.state.searchParam.endDate = values.applyTime && values.applyTime[1];
			
			this.fetchFinanceList();
		};
    render() {
      const { visible } =this.state;
			const summary = this.state.summary;
      let columns = columnsList(handleType, this.state.pagination);
      return(
        <div className="finance-company-list-wrap">
          <div className="box-flex">
            <ViewCardPane
              label="累计申请融资笔数"
              num={summary.total1}>
              <div className="box-flex">
                <YtStatistic value={summary.w1} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.d1} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.a1}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="累计申请融资金额(万元)"
              num={summary.total2}>
              <div className="box-flex">
                <YtStatistic value={summary.w2} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.d2} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.a2}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="已审核融资笔数"
              num={summary.total3}>
              <div className="box-flex">
                <YtStatistic value={summary.w3} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.d3} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.a3}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
            <ViewCardPane
              label="已审核融资金额(万元)"
              num={summary.total4}>
              <div className="box-flex">
                <YtStatistic value={summary.w4} type="up">周同比</YtStatistic>
                <YtStatistic value={summary.d4} type="down">日环比</YtStatistic>
                <YtStatistic value={summary.a4}>本日新增</YtStatistic>
              </div>
            </ViewCardPane>
          </div>
          <div className="main-content yt-common-list-pages-wrap">
            <FilterForm onSubmit={this.onSubmit}/>
            {Mod&&<Mod />}
            <YtTable onOperateClick={this.onOperateClick} scroll={{ x: 1300 }} pagination={this.state.pagination} columns={columns} dataSource={this.state.data}/>
            <YtPagination data={this.state.pagination} onChange={this.onChange}/>
            <CreatModal visible={visible} onOk={this.onOk} onCancel={this.onCancel}/>
          </div>
        </div>
      )
    }
  }
}


export default withSubscription;
