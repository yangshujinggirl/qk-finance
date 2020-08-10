
import { Link } from 'react-router-dom';

const columns = [
{
title: '企业编号',
dataIndex: 'code',
render: text => <a>{text}</a>,
},
{
title: '企业名称',
className: 'column-money',
dataIndex: 'name',
align: 'right',
},
{
title: '资产总额(万元)',
dataIndex: 'amount',
},
{
title: '已融资总额(万元)',
dataIndex: 'amounted',
},
{
title: '已融资产占比(%)',
dataIndex: 'amountPocess',
},
{
title: '操作',
dataIndex: 'amountPocess',
render:(text,record,index)=> {
  return <Link to="/account/asset/financeCompany/view/9">详情</Link>
}
},
];
export default columns;