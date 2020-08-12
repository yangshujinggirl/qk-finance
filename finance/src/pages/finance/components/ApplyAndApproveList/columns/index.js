import { Link } from 'react-router-dom';

const columnsList =(handleType)=>{
  return [
          {
          title: '资产编号',
          dataIndex: 'code',
          width: 100,
          fixed: 'left',
          },
          {
          title: '资产金额(万元)',
          className: 'column-money',
          dataIndex: 'name',
          width: 100,
          align: 'right',
          },
          {
          title: '资产账期(天)',
          dataIndex: 'amount',
          width: 100,
          },
          {
          title: '剩余账期(天)',
          dataIndex: 'amounted',
          },
          {
          title: '债务方',
          dataIndex: 'zwf',
          },
          {
          title: '还款方式',
          dataIndex: 'pay',
          },
          {
          title: '资产状态',
          dataIndex: 'status',
          },
          {
          title: '资产包选用',
          dataIndex: 'use',
          },
          {
          title: 'test1',
          dataIndex: 'test1',
          },
          {
          title: 'test2',
          dataIndex: 'test2',
          },
          {
          title: 'test3',
          dataIndex: 'test3',
          },
          {
          title: 'test4',
          dataIndex: 'test4',
          },
          {
          title: 'test5',
          dataIndex: 'test5',
          },
          {
          title: 'test6',
          dataIndex: 'test6',
          },
          {
          title: 'test7',
          dataIndex: 'test7',
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
                  <Link to="/" className="operate-link-btn">项目资料下载</Link>
                </>
                :
                <>
                  <Link to="/account/financeApprove/edit/12" className="operate-link-btn">审核</Link>
                  <Link to="/account/financeApprove/info/12" className="operate-link-btn">详情</Link>
                </>
              }

              </>
            }
          },
  ];
}

export { columnsList };
