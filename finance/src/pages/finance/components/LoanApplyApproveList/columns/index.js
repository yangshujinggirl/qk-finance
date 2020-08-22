import { Link } from 'react-router-dom';

const columnsApply = [
        {
        title: '序列号',
        dataIndex: 'id',
        width: 100,
        fixed: 'left',
        },
        {
        title: '放款编号',
        dataIndex: 'loanNo',
        width: 100,
        fixed: 'left',
        },
        {
        title: '申请放款日期',
        className: 'column-money',
        dataIndex: 'applyLoanDate',
        width: 100,
        align: 'right',
        },
        {
        title: '融资企业',
        dataIndex: 'enterpriseName',
        width: 100,
        },
        {
        title: '资产金额（万元）',
        dataIndex: 'assetAmount',
        },
        {
        title: '资产包编号',
        dataIndex: 'packageId',
        },
        {
        title: '授信金额（万元）',
        dataIndex: 'creditAmount',
        },
        {
        title: '融资利率',
        dataIndex: 'loanRate',
        },
        {
        title: '实际放款时间',
        dataIndex: 'loanDate',
        },
        {
        title: '审核状态',
        dataIndex: 'loanStatus',
        },
        {
        title: '备注',
        dataIndex: 'remark',
        },
        {
        title: '申请人',
        dataIndex: 'legalPerson',
        },
        {
          title: '操作',
          dataIndex: '操作',
          width: 200,
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/loanApply/edit/12" className="operate-link-btn">申请放款</Link>
              <Link to="/" className="operate-link-btn">查看</Link>
            </>
          }
        },
];

const columnsApprove = [
        {
        title: '序列号',
        dataIndex: 'id',
        width: 100,
        fixed: 'left',
        },
        {
        title: '放款编号',
        dataIndex: 'loanNo',
        width: 100,
        fixed: 'left',
        },
        {
        title: '申请放款日期',
        className: 'column-money',
        dataIndex: 'applyLoanDate',
        width: 100,
        align: 'right',
        },
        {
        title: '融资企业',
        dataIndex: 'enterpriseName',
        width: 100,
        },
        {
        title: '资产金额（万元）',
        dataIndex: 'assetAmount',
        },
        {
        title: '资产包编号',
        dataIndex: 'packageId',
        },
        {
        title: '授信金额（万元）',
        dataIndex: 'creditAmount',
        },
        {
        title: '融资利率',
        dataIndex: 'loanRate',
        },
        {
        title: '实际放款时间',
        dataIndex: 'loanDate',
        },
        {
        title: '审核状态',
        dataIndex: 'loanStatus',
        },
        {
        title: '审批意见',
        dataIndex: 'remark',
        },
        {
        title: '审核人',
        dataIndex: 'fundLegalPerson',
        },
        {
          title: '操作',
          dataIndex: '操作',
          width: 200,
          fixed: 'right',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/loanApprove/edit/12" className="operate-link-btn">审核</Link>
              <Link to="/" className="operate-link-btn">查看</Link>
            </>
          }
        },
];

export { columnsApply, columnsApprove };
