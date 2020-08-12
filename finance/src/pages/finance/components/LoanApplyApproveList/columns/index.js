import { Link } from 'react-router-dom';

const columnsApply = [
        {
        title: '序列号',
        dataIndex: 'code',
        width: 100,
        fixed: 'left',
        },
        {
        title: '放款编号',
        dataIndex: 'code',
        width: 100,
        fixed: 'left',
        },
        {
        title: '申请放款日期',
        className: 'column-money',
        dataIndex: 'name',
        width: 100,
        align: 'right',
        },
        {
        title: '融资企业',
        dataIndex: 'amount',
        width: 100,
        },
        {
        title: '资产金额（万元）',
        dataIndex: 'amounted',
        },
        {
        title: '资产包编号',
        dataIndex: 'zwf',
        },
        {
        title: '授信金额（万元）',
        dataIndex: 'pay',
        },
        {
        title: '融资利率',
        dataIndex: 'status',
        },
        {
        title: '实际放款时间',
        dataIndex: 'use',
        },
        {
        title: '审核状态',
        dataIndex: 'test1',
        },
        {
        title: '备注',
        dataIndex: 'test2',
        },
        {
        title: '申请人',
        dataIndex: 'test3',
        },
        {
          title: '操作',
          dataIndex: '操作',
          width: 200,
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/loanApply/edit/12" className="operate-link-btn">申请放款</Link>
              <Link to="/" className="operate-link-btn">详情</Link>
            </>
          }
        },
];

const columnsApprove = [
        {
        title: '序列号',
        dataIndex: 'code',
        width: 100,
        fixed: 'left',
        },
        {
        title: '放款编号',
        dataIndex: 'code',
        width: 100,
        fixed: 'left',
        },
        {
        title: '申请放款日期',
        className: 'column-money',
        dataIndex: 'name',
        width: 100,
        align: 'right',
        },
        {
        title: '融资企业',
        dataIndex: 'amount',
        width: 100,
        },
        {
        title: '资产金额（万元）',
        dataIndex: 'amounted',
        },
        {
        title: '资产包编号',
        dataIndex: 'zwf',
        },
        {
        title: '授信金额（万元）',
        dataIndex: 'pay',
        },
        {
        title: '融资利率',
        dataIndex: 'status',
        },
        {
        title: '实际放款时间',
        dataIndex: 'use',
        },
        {
        title: '审核状态',
        dataIndex: 'test1',
        },
        {
        title: '审批意见',
        dataIndex: 'test2',
        },
        {
        title: '审核人',
        dataIndex: 'test3',
        },
        {
          title: '操作',
          dataIndex: '操作',
          width: 200,
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/loanApprove/edit/12" className="operate-link-btn">审核</Link>
              <Link to="/" className="operate-link-btn">详情</Link>
            </>
          }
        },
];

export { columnsApply, columnsApprove };
