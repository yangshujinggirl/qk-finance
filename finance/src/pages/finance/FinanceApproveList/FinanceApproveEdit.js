import { Tabs } from 'antd';
import ApproveRecord from './components/ApproveRecord';
import withSubscription from '../components/ApplyAndApproveEdit';

const { TabPane } = Tabs;

const  FinanceApproveEdit = withSubscription('2','edit',ApproveRecord);//1:融资申请2:审批
export default FinanceApproveEdit;
