import { Link } from 'react-router-dom';
import { YtBtn } from 'common';
import withSubscription from '../components/ApplyAndApproveList';

const Add=({...props})=> {
  return <div className="handle-common-action">
            <YtBtn size="free">
              <Link to="/account/financeApply/edit/12">新增融资申请</Link>
            </YtBtn>
          </div>
}

const FinancApplyList = withSubscription('1',Add)//1:融资申请

export default FinancApplyList;
