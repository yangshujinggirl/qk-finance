import moment from 'moment';

const columnsPlan = [
  {
    title: '还款计划日',
    dataIndex: 'payDate',
    key: 'payDate',
    render:(text,record,index)=> {
      return <>{moment(text).format('YYYY-MM-DD')}</>
    }
  },
  {
    title: '期次',
    dataIndex: 'payPeriodNo',
    key: 'payPeriodNo',
  },
  {
    title: '开始计息日',
    dataIndex: 'startDate',
    key: 'startDate',
    render:(text,record,index)=> {
      return <>{moment(text).format('YYYY-MM-DD')}</>
    }
  },
  {
    title: '结束计息日',
    dataIndex: 'finishDate',
    key: 'finishDate',
    render:(text,record,index)=> {
      return <>{moment(text).format('YYYY-MM-DD')}</>
    }
  },
  {
    title: '还款本金',
    dataIndex: 'payPrincipalAmount',
    key: 'payPrincipalAmount',
  },
  {
    title: '还款利息',
    dataIndex: 'payInterest',
    key: 'payInterest',
  },
  {
    title: '还款总金额',
    dataIndex: 'payTotalAmount',
    key: 'payTotalAmount',
  },
];
const columnsContract = [
  {
    title: '合同名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '合同编号',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '生成方式',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '上传人',
    dataIndex: 'end',
    key: 'address',
  },
  {
    title: '上传时间',
    dataIndex: 'amount',
    key: 'address',
  },
  {
    title: '备注',
    dataIndex: 'lx',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'hkAmount',
    key: 'address',
    render:(text,record,index)=>{
      return <>
        <span className="operate-link-btn">手动上传</span>
      </>
    }
  },
];
const columnsReceivable = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '买方',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '基础交易合同及编号',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '应收账款种类',
    dataIndex: 'end',
    key: 'address',
  },
  {
    title: '应收账款金额',
    dataIndex: 'amount',
    key: 'address',
  },
  {
    title: '应收账款到期日',
    dataIndex: 'lx',
    key: 'address',
  },
  {
    title: '发货单号',
    dataIndex: 'lx',
    key: 'address',
  },
  {
    title: '发货金额',
    dataIndex: 'lx',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'hkAmount',
    key: 'address',
    render:(text,record,index)=>{
      return <>
        <span className="operate-link-btn" onClick={()=>record.onOperateClick('delete')}>移除</span>
      </>
    }
  },
];

export {
  columnsPlan,columnsContract,columnsReceivable
}
