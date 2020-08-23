import { Link } from 'react-router-dom';
import moment from 'moment';

const columnsIndex = [
        {
          title: '序列号',
          dataIndex: 'id',
          width: 80,
            render:(text,record,index)=>{
                return  index+1
            }
        },
        {
          title: '交易流水号',
          dataIndex: 'transactionSerialNumber',
          width: 120,
        },
        {
          title: '交易时间',
          dataIndex: 'tradingDate',
          width: 200,
            render:(text,record,index)=>{
                return  moment(text).format('YYYY-MM-DD hh:mm:ss')
            }
        },
        {
          title: '导入时间',
          dataIndex: 'dateOfCreate',
          width:200,
            render:(text,record,index)=>{
                return  moment(text).format('YYYY-MM-DD hh:mm:ss')
            }
        },
        // {
        //   title: '交易金额',
        //   dataIndex: 'amounted',
        //   width: 120,
        // },
        {
          title: '对方银行',
          dataIndex: 'oppositeCompanyName',
          width: 100,
        },
        {
          title: '对方账户名称',
          dataIndex: 'accountName',
          width: 200,
        },
        {
          title: '对方账户号',
          dataIndex: 'accountNumber',
          width: 200,
        },
        {
          title: '业务摘要',
          dataIndex: 'businessAbstract',
          width: 100,
        },
        // {
        //   title: '备注',
        //   dataIndex: 'test1',
        //   width: 100,
        // },
        {
          title: '数据来源',
          dataIndex: 'dataFrom',
          width: 100,
        },
        {
          title: '操作人',
          dataIndex: 'creator',
          width: 100,
        },
        {
          title: '操作',
          dataIndex: '操作',
          width: 100,
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to={`/account/writeOff/info/${record.planId}`} className="operate-link-btn">核销详情</Link>
            </>
          }
        },
];
const columnsInfo= [
        {
          title: '序列号',
          dataIndex: 'code',
        },
        {
          title: '核销时间',
          dataIndex: 'code',
        },
        {
          title: '融资编号',
          dataIndex: 'time0',
        },
        {
          title: '项目名称',
          dataIndex: 'time1',
        },
        {
          title: '融资企业',
          dataIndex: 'amounted',
        },
        {
          title: '期次',
          dataIndex: 'zwf',
        },
        {
          title: '核销本金',
          dataIndex: 'pay',
        },
        {
          title: '核销利息',
          dataIndex: 'paycode',
        },
        {
          title: '核销金额',
          dataIndex: 'use',
        },
];

export {
  columnsIndex, columnsInfo
}
