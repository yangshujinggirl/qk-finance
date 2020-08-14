import { Link } from 'react-router-dom';

const columnsList =[
        {
        title: '序号',
        dataIndex: 'code',
        },
        {
        title: '融资单号',
        dataIndex: 'name',
        },
        {
        title: '新增时间',
        dataIndex: 'amount',
        },
        {
        title: '融资企业',
        dataIndex: 'amounted',
        },
        {
        title: '融资金额（万元）',
        dataIndex: 'rzje',
        },
        {
        title: '利率（年化）',
        dataIndex: 'lv',
        },
        {
        title: '融资期限',
        dataIndex: 'rzqx',
        },
        {
        title: '是否有逾期',
        dataIndex: 'yq',
        },
        {
        title: '是否提前还款',
        dataIndex: 'hk',
        },
        {
        title: '累计请款金额（万元）',
        dataIndex: 'qk',
        },
        {
        title: '状态',
        dataIndex: 'zt',
        },
        {
        title: '操作',
        dataIndex: 'action',
        fixed: 'right',
        width: 100,
        },
]

export { columnsList };
