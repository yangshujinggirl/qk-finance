import { Link } from 'react-router-dom';
import NP from 'number-precision';

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
          title: '资产金额',
          dataIndex: 'orderAmount',
        },
        {
        title: '债务方',
        dataIndex: 'orderSourceCompany',
        },
        {
          title: '资产剩余账期',
          dataIndex: 'syzq',
          render:(text,record,index)=>{
            let debtExpireDate = record.debtExpireDate?record.debtExpireDate:0;
            let transactionDate = record.transactionDate?record.transactionDate:0;
            return<>{
              NP.minus(debtExpireDate,transactionDate)
            }</>
          }
        },
        {
        title: '资产状态',
        dataIndex: 'assetStatus',
        },
        {
        title: '融资状态',
        dataIndex: 'applyLoanStatus',
        },
        {
          title: '验真状态',
          dataIndex: 'assetStatus',
        },
        {
          title: '验真结果',
          dataIndex: 'assetStatus',
        },
        {
        title: '上链节点',
        dataIndex: 'nodeBlockDate',
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
