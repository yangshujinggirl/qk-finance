import { Link } from 'react-router-dom';

const columnsIndex = [
        {
          title: '序列号',
          dataIndex: 'code',
          width: 80,
        },
        {
          title: '请款单号',
          dataIndex: 'code',
          width: 120,
        },
        {
          title: '请款时间',
          dataIndex: 'time0',
          width: 200,
        },
        {
          title: '融资编号',
          dataIndex: 'time1',
          width:200,
        },
        {
          title: '融资企业',
          dataIndex: 'amounted',
          width: 120,
        },
        {
          title: '融资金额（万元）',
          dataIndex: 'zwf',
          width: 100,
        },
        {
          title: '年化利率%',
          dataIndex: 'pay',
          width: 200,
        },
        {
          title: '用途类型',
          dataIndex: 'paycode',
          width: 200,
        },
        {
          title: '请款金额（万元）',
          dataIndex: 'use',
          width: 100,
        },
        {
          title: '收款方',
          dataIndex: 'test1',
          width: 100,
        },
        {
          title: '审批状态',
          dataIndex: 'test2',
          width: 100,
        },
        {
          title: '实际放款时间',
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
              <Link to="/account/withdraw/info/12" className="operate-link-btn">查看</Link>
              <Link to="/account/withdraw/edit/12" className="operate-link-btn">审批</Link>
            </>
          }
        },
];
const columnsVoucher = [
   {
      title: '序号',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '编号',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '凭证类型',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '名称',
      dataIndex: 'end',
      key: 'address',
    },
    {
      title: '金额（万元)',
      dataIndex: 'amount',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: '操作',
      width: 100,
      fixed: 'right',
      render:(text,record,index)=>{
        return <>
          <span className="operate-link-btn">预览</span>
        </>
      }
    },
]
const columnsRecord = [
    {
      title: '序号',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '请款编号',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '请款时间',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '请款类型',
      dataIndex: 'end',
      key: 'address',
    },
    {
      title: '关联文件',
      dataIndex: 'amount',
      key: 'address',
    },
    {
      title: '本次请款金额',
      dataIndex: 'lx',
      key: 'address',
    },
    {
      title: '收款方',
      dataIndex: 'lx',
      key: 'address',
    },
    {
      title: '本次请款金额',
      dataIndex: 'lx',
      key: 'address',
    },
    {
      title: '收款方银行',
      dataIndex: 'lx',
      key: 'address',
    },
    {
      title: '收款方银行账户名',
      dataIndex: 'lx',
      key: 'address',
    },
    {
      title: '收款方银行账号',
      dataIndex: 'lx',
      key: 'address',
    },
    {
      title: '审核状态',
      dataIndex: 'lx',
      key: 'address',
    },
    {
      title: '审核意见',
      dataIndex: 'lx',
      key: 'address',
    },
]
export {
  columnsIndex,columnsVoucher,columnsRecord
}
