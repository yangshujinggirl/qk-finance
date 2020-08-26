import { Statistic, Progress } from 'antd';
import moment from 'moment';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import { columnsList } from './columns';
import './index.less'
import { GetProFileList, GetStatisticalData, GetFinanceList } from 'api/finance/FinanceManagement';
import { useState, useEffect } from 'react';

function withSubscription(handleType,Mod) {

  return class FinanceShow extends React.Component {
    state={
      visible:false,
      inputValues:{},
      currentItem:{},
      fileList:[],
			data: [],
			pagination: {
				totalSize: 0,
				pageSize: 15,
				pageNow: 1,
			},
			summary: {}
    }

    componentDidMount(){
			this.fetchFinanceList();
      this.fetchTotal();
    }
    fetchFinanceList=(values)=> {
      const { pagination, inputValues } =this.state;
      const param={
        pageSize: pagination.pageSize,
        pageNow: pagination.pageNow,
        ...inputValues,
        ...values
      }
      GetFinanceList(param)
      .then((res)=> {
        const { result, pagination } =res.data;
        result.map((el,index)=>{ index++; el.key = el.id});
        this.setState({ data: result, pagination: pagination })
      })
    }
    fetchTotal=()=> {
      GetStatisticalData()
      .then((res)=> {
				const { data } = res;
				let values = {
          total1:data[0].total,
  				total2:data[0].countNum,
  				total3:data[1].total,
  				total4:data[1].countNum,
  				w1:data[0].numWeekRatio,
  				w2:data[0].amountWeekRatio,
  				w3:data[1].numWeekRatio,
  				w4:data[1].amountWeekRatio,
  				d1:data[0].numDayRatio,
  				d2:data[0].amountDayRatio,
  				d3:data[1].numDayRatio,
  				d4:data[1].amountDayRatio,
  				a1:data[0].numTodayRatio,
  				a2:data[0].amountTodayRatio,
  				a3:data[1].numTodayRatio,
  				a4:data[1].amountTodayRatio
        }
        this.setState({ summary: values})
      })
    }
    onOk=()=> {
      this.setState({ visible:false });
    }
    onCancel=()=> {
      this.setState({ visible:false });
    }
		onChange=(pageNow,pageSize)=> {
			this.fetchFinanceList({ pageNow,pageSize });
		}
    onOperateClick=({item,type})=> {
      GetProFileList({ loanNo: item.loanNo })
      .then((res) => {
        this.setState({ fileList:res.data,currentItem:item, visible:true });
      })
    }
		onSubmit = values => {
      let { applyTime, ...params } = values;
      if(applyTime){
        params.startDate = moment(applyTime[0]).format('YYYY-MM-DD');
        params.endDate = moment(applyTime[1]).format('YYYY-MM-DD');
      }
      this.setState({ inputValues:params });
			this.fetchFinanceList(params);
		};
    render() {
      const { currentItem, fileList, data, visible, pagination, summary } =this.state;
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
            <YtTable
              onOperateClick={this.onOperateClick}
              scroll={{ x: 1300 }}
              columns={columns}
              dataSource={data}/>
            <YtPagination data={pagination} onChange={this.onChange}/>
            <CreatModal
              paramsVal={currentItem} 
              visible={visible}
              onOk={this.onOk}
              onCancel={this.onCancel}
              data={fileList}/>
          </div>
        </div>
      )
    }
  }
}


export default withSubscription;
