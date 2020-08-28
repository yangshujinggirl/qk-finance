import { Tabs } from 'antd';
import ApproveRecord from '../components/ApproveRecord';
import withSubscription from '../components/ApplyAndApproveEdit';

const { TabPane } = Tabs;

class Approve extends React.Component {
  render(){
    return <ApproveRecord  pageType="fince"/>
  }
}
const  FinanceApproveEdit = withSubscription('2','edit',Approve);//1:融资申请2:审批
export default FinanceApproveEdit;
