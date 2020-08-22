import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {getBankStatement} from '../../../api/collectionPayment';

class AccountStatement extends React.Component {

  state={
    pageNow: 1,
    pageSize: 5,
    bankName: '牧融氏家收款账户',
    bankAccount: '1131080913840182348',
    startDate: '2020-08-21',
    endDate: '2020-08-22',
    transactionSerialNumber: 1,
    minAmount: 1,
    maxAmount: 12,
    reciprocalAccountName: 1,
    reciprocalAccountNo: 1,
    totalSize:1,
    list:[]
  }
  componentDidMount(){
    //初始化数据
    this.getBankStatements();
  }
  //回款计划
  getBankStatements=()=>{
    let  {
      pageNow,
      pageSize,
      bankName,
      bankAccount,
      startDate,
      endDate,
      transactionSerialNumber,
      minAmount,
      maxAmount,
      reciprocalAccountName,
      reciprocalAccountNo,
    }=this.state
    getBankStatement({
      pageNow,
      pageSize,
      bankName,
      bankAccount,
      startDate,
      endDate,
      transactionSerialNumber,
      minAmount,
      maxAmount,
      reciprocalAccountName,
      reciprocalAccountNo,
    }).then(res=>{
      let list =res.data.result
      let totalSize= res.data.pagination.totalSize
      let p= {...this.state,list,totalSize }
      this.setState(p)
    })
  }
  //查询
  search=({loanNo,projectName})=>{
    let p= {...this.state,loanNo,projectName }
    this.setState(p)
    this.getBankStatements();
  }
  //分页
  pagination=(pageNow)=>{
    let p = {...this.setState, pageNow };
    this.setState(p)
    this.getBankStatements();
  }
    render() {
      let {totalSize,pageNow,pageSize,list}=this.state

      return(
        <div className="yt-common-list-pages-wrap">
          <FilterForm  onSubmit={this.search}/>
            <YtTable
            scroll={{x:1300}}
             columns={columnsIndex}
             dataSource={list}/>
      <YtPagination data={{totalSize,pageNow,pageSize}} onChange={this.pagination}/>
      </div>
      )
    }
}

export default AccountStatement;
