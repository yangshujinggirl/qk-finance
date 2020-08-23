
import { Link } from 'react-router-dom';

const columns = [
{
title: '企业名称',
dataIndex: 'enterpriseName',
},
{
title: '放款总额',
dataIndex: 'amount',
},
{
title: '应收回款额',
dataIndex: 'amounted',
},
{
title: '操作',
dataIndex: 'action',
render:(text,record,index)=> {
  return <Link to="/account/asset/financeCompany/view/9">详情</Link>
}
},
];
export default columns;
