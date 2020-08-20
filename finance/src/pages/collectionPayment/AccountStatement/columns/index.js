import { Link } from 'react-router-dom';

const columnsIndex = [
        {
          title: '序列号',
          dataIndex: 'code',
          width: 80,
        },
        {
          title: '交易流水号',
          dataIndex: 'code',
          width: 120,
        },
        {
          title: '交易时间',
          dataIndex: 'time0',
          width: 200,
        },
        {
          title: '导入时间',
          dataIndex: 'time1',
          width:200,
        },
        {
          title: '交易金额',
          dataIndex: 'amounted',
          width: 120,
        },
        {
          title: '对方银行',
          dataIndex: 'zwf',
          width: 100,
        },
        {
          title: '对方账户名称',
          dataIndex: 'pay',
          width: 200,
        },
        {
          title: '对方账户号',
          dataIndex: 'paycode',
          width: 200,
        },
        {
          title: '业务摘要',
          dataIndex: 'use',
          width: 100,
        },
        {
          title: '备注',
          dataIndex: 'test1',
          width: 100,
        },
        {
          title: '数据来源',
          dataIndex: 'test2',
          width: 100,
        },
        {
          title: '操作人',
          dataIndex: 'test3',
          width: 100,
        },
        {
          title: '操作',
          dataIndex: '操作',
          width: 100,
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/writeOff/info/12" className="operate-link-btn">核销详情</Link>
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
