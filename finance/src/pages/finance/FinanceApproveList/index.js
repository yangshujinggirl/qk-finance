import { Link } from 'react-router-dom';
import { YtBtn } from 'common';
import withSubscription from '../components/ApplyAndApproveList';

const Add=({...props})=> {
  return <div className="handle-common-action">
            <YtBtn size="free">
              <Link to="/account/financeApprove/edit/12">新增融资审批</Link>
            </YtBtn>
          </div>
}
const FinancApproveList = withSubscription('2',Add)//1:融资申请2:审批
export default FinancApproveList;
