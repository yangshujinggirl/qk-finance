import { Link } from 'react-router-dom';

const columnsList =[
        {
        title: '序号',
        dataIndex: 'code',
        },
        {
        title: '资产编号',
        dataIndex: 'code',
        render: text => <Link to="/account/asset/info/12">{text}</Link>,
        },
        {
        title: '资产类型',
        dataIndex: 'type',
        },
        {
        title: '资产生成日期',
        dataIndex: 'rq',
        },
        {
        title: '资产金额',
        dataIndex: 'je',
        },
        {
        title: '债务方',
        dataIndex: 'zwf',
        },
        {
        title: '资产账期',
        dataIndex: 'zq',
        },
        {
        title: '资产剩余账期',
        dataIndex: 'syzq',
        },
        {
        title: '回款状态',
        dataIndex: 'hkstatus',
        },
        {
        title: '资产状态',
        dataIndex: 'zcstatus',
        },
        {
        title: '是否转让',
        dataIndex: 'zr',
        },
        {
        title: '验证比例',
        dataIndex: 'yzbl',
        },
        {
        title: '验真结果',
        dataIndex: 'yzjg',
        },
        {
        title: '多方验真源',
        dataIndex: 'yzy',
        },
        {
        title: '区块ID',
        dataIndex: 'qkl',
        },
        {
        title: '上链节点',
        dataIndex: 'jd',
        }
]

export default columnsList;
