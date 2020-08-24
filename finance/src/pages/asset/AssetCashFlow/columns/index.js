import { Link } from 'react-router-dom';
import NP from 'number-precision';

const returnBackMap={
  1:'未回款',
  2:'已回款',
  3:'部分还款'
}
const columnsList =[
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
        title: '已回款项',
        dataIndex: 'moneyBackAmount	',
        },
        {
        title: '待回款项',
        dataIndex: 'remainingAmount',
        },
        {
        title: '回款状态',
        dataIndex: 'isMoneyBack',//1-未回款，2-已回款，3部分还款
        render:(text,record,index)=> {
          return <>{returnBackMap[record.isMoneyBack]}</>
        }
        },{
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

export { columnsList };
