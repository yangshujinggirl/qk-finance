import { Link } from 'react-router-dom';
import NP from 'number-precision';
import moment from 'moment';
import { CommonUtils } from 'utils';

let applyLoanStatusMap = {
  1:"未占用",
  2:"预占用",
  3:"已占用",
  4:"已请款"
}

const columnsList =[
        {
          title: '序号',
          dataIndex: 'code',
          width: 100,
          render:(text,record,index)=> {
            index++;
            return index;
          }
        },
        {
          title: '资产编号',
          dataIndex: 'assetNo',
        },
        {
          title: '资产金额(万元)',
          dataIndex: 'orderAmount',
          render:(text,record,index)=>{
            return <>{
              CommonUtils.formatAmount(text)
            }</>
          }
        },
        {
        title: '债务方',
        dataIndex: 'orderSourceCompany',
        },
        {
          title: '资产剩余账期',
          dataIndex: 'syzq',
          render:(text,record,index)=>{
            return <>{
              CommonUtils.formatTimeInterval(record.transactionDate, record.expectedDate)
            }</>
          }
        },
        {
          title: '资产状态',
          dataIndex: 'applyLoanStatus',
          render:(text,record,index)=>{
            return <>{applyLoanStatusMap[record.applyLoanStatus]}</>
          }
        },
        {
          title: '融资状态',
          dataIndex: 'rzzt',
          render:(text,record,index)=>{
            let fundStatus;
            switch(record.applyLoanStatus){
              case 1:
              case 2:
                fundStatus = '待融资';
                break;
              case 3:
                fundStatus = '已融资';
                break;
              case 4:
                fundStatus = '融资完结';
                break;
            }
            return <>{fundStatus}</>
          }
        },
        {
          title: '验真结果',
          dataIndex: 'yzjg',
          render:(text,record,index)=>{
            return <>验真通过</>
          }
        },
        {
          title: '操作',
          dataIndex: '操作',
          fixed: 'right',
          width: 100,
          render:(text,record,index)=>{
            return <>
              <Link to={`/account/asset/financeCompany/list/info/${record.assetNo}`} className="operate-link-btn">查看</Link>
            </>
          }
        },
]

export default columnsList;
