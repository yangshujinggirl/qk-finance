import withSubscription from '../components/ApplyAndApproveEdit';
import ApproveRecord from './components/ApproveRecord';

const  FinanceApplyEdit = withSubscription('2','view',ApproveRecord);//1:融资申请2:审批
export default FinanceApplyEdit;
