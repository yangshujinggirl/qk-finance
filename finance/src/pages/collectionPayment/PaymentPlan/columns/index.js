import { Link } from 'react-router-dom';

const columnsIndex = [

        {
          title: '序号',
          dataIndex: 'code',
        },
        {
          title: '项目名称',
          dataIndex: 'code',
        },
        {
          title: '款项类别',
          dataIndex: 'lb',
        },
        {
          title: '期次',
          dataIndex: 'time1',
        },
        {
          title: '款项金额',
          dataIndex: 'amounted',
          width: 120,
        },
        {
          title: '回款状态',
          dataIndex: 'zwf',
        },
        {
          title: '融资编号',
          dataIndex: 'pay',
        },
        {
          title: '还款日期',
          dataIndex: 'time0',
        },
        {
          title: '本金',
          dataIndex: 'use',
        },
        {
          title: '操作',
          dataIndex: '操作',
          render:(text,record,index)=>{
            return <>
              <Link to="/account/paymentPlan/info/12" className="operate-link-btn">详情</Link>
            </>
          }
        },
];
const columnsInfo= [
        {
          title: '序号',
          dataIndex: 'code',
        },
        {
          title: '回款日期',
          dataIndex: 'time0',
        },
        {
          title: '回款金额',
          dataIndex: 'time0',
        },
        {
          title: '本金回款',
          dataIndex: 'time1',
        },
        {
          title: '利息回款',
          dataIndex: 'amounted',
        },
        {
          title: '关联流水',
          dataIndex: 'zwf',
        },
];

export {
  columnsIndex, columnsInfo
}
