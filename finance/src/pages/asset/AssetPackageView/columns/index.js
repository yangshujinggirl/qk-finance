const option = {
  1:"未占用",
  2:"预占用",
  3:"已占用",
  4:"已请款"
}
const columns = [
  {
    title: '资产编号',
    dataIndex: 'assetNo',
  },
  {
    title: '资产金额(万元)',
    dataIndex: 'orderAmount',
  },
  {
    title: '剩余账期(天)',
    dataIndex: 'realDay',
  },
  {
    title: '债务方',
    dataIndex: 'orderSourceCompany',
  },
  {
    title: '还款方式',
    dataIndex: 'rePayMentType',
  },
  {
    title: '资产状态',
    dataIndex: 'assetStatus',
    render:(tet,record,index)=>{
      return <>{option[record.assetStatus]}</>
    }
  },
  {
    title: '资产包选用',
    dataIndex: 'packetCount',
  },
  {
    title: '资金方选用',
    dataIndex: 'enterpriseCount',
  },
  {
    title: '验真状态',
    dataIndex: 'status',
  },
  ];
  export default columns;
