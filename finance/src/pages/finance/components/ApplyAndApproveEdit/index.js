import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import AppLyOne from './AppLyOne.js';
import AppLyTwo from './AppLyTwo.js';
import AppLyThr from './AppLyThr.js';
import { GetFinanceDetail } from 'api/finance/FinanceManagement';
import './index.less';

const { TabPane } = Tabs;

function withSubscription(handleType, Mod){
  return class FinanceApplyEdit extends React.Component {
    state = {
      isEdit:this.props.match.params.id?true:false
    }
    callback=(key)=> {
      // console.log(key);
    }
    render() {
      const { params } = this.props.match;
      let currentStatus = params.id?'edit':'add';
      return(
        <div className="finance-apply-wrap yt-common-bg-pages-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="合同要素" key="1">
              <AppLyOne handleType={handleType} loanId={params.id} currentStatus={currentStatus}/>
            </TabPane>
            <TabPane tab="还款预算" key="2">
              <AppLyTwo handleType={handleType} loanId={params.id} currentStatus={currentStatus}/>
            </TabPane>
            <TabPane tab="合同预览" key="3">
              <AppLyThr handleType={handleType} loanId={params.id} currentStatus={currentStatus}/>
            </TabPane>
            {Mod&&Mod()}
          </Tabs>
        </div>
      )
    }
  }
}


export default withSubscription;
