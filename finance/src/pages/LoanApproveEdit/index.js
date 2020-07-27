import { Tabs } from 'antd';
import ApproveRecord from '../components/ApproveRecord';
import withSubscription from '../components/LoanApplyApproveEdit';

const { TabPane } = Tabs;

const Approve=({...props})=> {
  return <TabPane tab="审批记录" key="4">
          <ApproveRecord />
         </TabPane>
}
const  FinanceApproveEdit = withSubscription('2',Approve);//1:融资申请2:审批
export default FinanceApproveEdit;
