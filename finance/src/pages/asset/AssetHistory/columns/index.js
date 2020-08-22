import { Link } from 'react-router-dom';

const columnsList =[
        {
        title: '序号',
        dataIndex: 'key',
        },
        {
        title: '融资编号',
        dataIndex: 'name',
        },
        {
        title: '申请融资日期',
        dataIndex: 'amount',
        },
        {
        title: '融资企业',
        dataIndex: 'amounted',
        },
        {
        title: '资产金额（万元）',
        dataIndex: 'rzje',
        },
        {
        title: '资产包编号',
        dataIndex: 'lv',
        },
        {
        title: '融资金额（万元）',
        dataIndex: 'rzqx',
        },
        {
        title: '年化利率%',
        dataIndex: 'yq',
        },
        {
        title: '还款方式',
        dataIndex: 'hk',
        },
        {
        title: '状态',
        dataIndex: 'qk',
        },
        {
        title: '实际放款时间',
        dataIndex: 'zt',
        },
        {
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
          width: 100,
          render:(text,record,index)=>{
            return <span className="operate-link-btn">审核</span>
          }
        },
]

export { columnsList };
