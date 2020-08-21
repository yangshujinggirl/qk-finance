import { Link } from 'react-router-dom';

const columnsList =(handleType)=>{
  return [
          {
          title: '序号',
          dataIndex: 'id',
          fixed: 'left',
          },
          {
          title: '融资编号',
          className: 'column-money',
          dataIndex: 'loanNo',
          align: 'right',
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
          dataIndex: 'packageId',
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
                  <Link to="/account/financeApply/edit/12" className="operate-link-btn">编辑</Link>
                  <span className="operate-link-btn" onClick={()=>record.onOperateClick('download')}>项目资料下载</span>
                </>
                :
                <>
                  <Link to="/account/financeApprove/edit/12" className="operate-link-btn">审核</Link>
                  <Link to="/account/financeApprove/info/12" className="operate-link-btn">查看</Link>
                </>
              }

              </>
            }
          },
  ];
}

export { columnsList };
