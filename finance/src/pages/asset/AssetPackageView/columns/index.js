import { assetStatus, checkStatus } from '../components/options';
import { CommonUtils } from 'utils';
const columns = [
  {
    title: '资产编号',
    dataIndex: 'assetNo',
  },
  {
    title: '资产金额(万元)',
    dataIndex: 'orderAmount',
    render:(text,record,index)=> {
      return <>{CommonUtils.formatAmount(record.orderAmount)}</>

    }
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
      return <>{assetStatus[record.assetStatus]}</>
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
    dataIndex: 'checkStatus',
    render:(tet,record,index)=>{
      return <>{checkStatus[record.checkStatus]}</>
    }
  },
  ];
  export default columns;
