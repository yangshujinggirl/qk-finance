import { Link } from 'react-router-dom';

const authStatus={
  1:'待审核',
  2:'审核未通过',
  3:'待确认融资金额',
  4:'待放款',
  5:'已放款存续期',
  6:'已完结',
}
const columnsList =[
        {
        title: '序号',
        dataIndex: 'key',
        },
        {
        title: '融资编号',
        dataIndex: 'loanNo',
        },
        {
        title: '申请融资日期',
        dataIndex: 'amount',
        },
        {
        title: '融资企业',
        dataIndex: 'enterpriseName',
        },
        {
        title: '资产金额（万元）',
        dataIndex: 'rzje',
        },
        {
        title: '资产包编号',
        dataIndex: 'lv',
        },
        {
        title: '融资金额（万元）',
        dataIndex: 'loanAmount',
        },
        {
        title: '年化利率%',
        dataIndex: 'loanRate',
        },
        {
          title: '还款方式',
          dataIndex: 'repayMethod',
          render:(text,record,index)=> {
            return <>{record.repayMethod==1?'先息后本':'等额本金'}</>
          }
        },
        {
          title: '状态',
          dataIndex: 'qk',
          render:(text,record,index)=> {
            return <>{authStatus[record.loanStatus]}</>
          }
        },
        {
        title: '实际放款时间',
        dataIndex: 'loanDate',
        },
        {
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
          width: 100,
          render:(text,record,index)=>{
            return <span className="operate-link-btn">审核</span>
          }
        },
]

export { columnsList };
