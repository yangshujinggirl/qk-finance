import { Link } from 'react-router-dom';

const columnsList =(handleType, pagination)=>{
  return [
          {
						title: '序号',
						fixed: 'left',
            dataIndex: 'key',
          },
          {
          title: '融资编号',
          className: 'column-money',
          dataIndex: 'loanNo',
          },
          {
          title: '申请日期',
          dataIndex: 'applyLoanDate',
          },
          {
          title: '融资企业',
          dataIndex: 'enterpriseName',
          },
          {
          title: '项目名称',
          dataIndex: 'projectName',
          },
          {
          title: '资产包金额（万元）',
          dataIndex: 'packageAmount',
          },
          {
          title: '融资金额（万元）',
          dataIndex: 'creditAmount',
          },
          {
						title: '年利率',
						dataIndex: 'loanRate',
						render:(text,record,index)=>{
							return <> {
								<span>{text}%</span>
							}
							</>
						}
          },
          {
          title: '审核状态',
          dataIndex: 'loanStatus',
          },
          {
            title: '操作',
            dataIndex: '操作',
            width: 200,
            fixed: 'right',
            render:(text,record,index)=>{
              return <>
              {
                handleType=="1"?
                <>
                  <Link to={'/account/financeApply/info/'+record.loanId} className="operate-link-btn">查看</Link>
                  <Link to={'/account/financeApply/edit/'+record.loanId} className="operate-link-btn">编辑</Link>
                  <span className="operate-link-btn" onClick={()=>record.onOperateClick('download')}>项目资料下载</span>
                </>
                :
                <>
                  <Link to={`/account/financeApprove/edit/${record.loanId}`} className="operate-link-btn">审核</Link>
                  <Link to={`/account/financeApprove/info/${record.loanId}`} className="operate-link-btn">查看</Link>
                </>
              }
              </>
            }
          },
  ];
}

export { columnsList };
