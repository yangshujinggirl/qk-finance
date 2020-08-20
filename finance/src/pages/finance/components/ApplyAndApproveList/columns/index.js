import { Link } from 'react-router-dom';

const columnsList =(handleType)=>{
  return [
          {
          title: '序号',
          dataIndex: 'code',
          fixed: 'left',
          },
          {
          title: '融资编号',
          className: 'column-money',
          dataIndex: 'name',
          align: 'right',
          },
          {
          title: '申请日期',
          dataIndex: 'amount',
          },
          {
          title: '融资企业',
          dataIndex: 'amounted',
          },
          {
          title: '行业',
          dataIndex: 'zwf',
          },
          {
          title: '资产包编号',
          dataIndex: 'pay',
          },
          {
          title: '资产包金额（万元）',
          dataIndex: 'status',
          },
          {
          title: '融资金额（万元）',
          dataIndex: 'use',
          },
          {
          title: '年利率',
          dataIndex: 'test1',
          },
          {
          title: '还款方式',
          dataIndex: 'test2',
          },
          {
          title: '审核状态',
          dataIndex: 'test3',
          },
          {
          title: '实际放款时间',
          dataIndex: 'test4',
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
                  <Link to="/" className="operate-link-btn">取消</Link>
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
