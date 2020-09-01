import {Tabs} from 'antd';
import {Link} from 'react-router-dom';
import AppLyOne from './AppLyOne.js';
import AppLyTwo from './AppLyTwo.js';
import AppLyThr from './AppLyThr.js';
import { GetTipsProcess } from 'api/finance/ApplyAndApproveEdit';
import './index.less';

const {TabPane} = Tabs;
const tabStatusMap={
  "baseInfo":1,
  "payInfo":2,
  "contract":3,
}
function withSubscription(handleType, pageType, Mod){
  return class FinanceApplyEdit extends React.Component {
    state = {
      activeKey:'baseInfo',
      isEdit:this.props.match.params.id?true:false,
      tabStatus:'baseInfo',
      loanId:null
    }
    componentDidMount(){
      this.fetchProcess()
    }
    fetchProcess=()=>{
      GetTipsProcess({ loanId:this.props.match.params.id })
      .then((res) => {
        const { tabStatus } =res.data;
        this.setState({ tabStatus:tabStatus });
      })
    }
    upDateLoanId=(loanId)=> {
      this.setState({ loanId });
    }
    upDateKey=(value)=> {
      this.setState({ activeKey:value });
      this.fetchProcess();
    }
    callback=(key)=> {
      this.setState({ activeKey:key });
    }
    render() {
      let { params } = this.props.match;
      let { activeKey, tabStatus, loanId } =this.state;
      loanId = params.id?params.id:loanId;
      let handleStatus =()=> {
         if(params.id) {
           if(pageType == 'view') {
             return 'view'
           } else {
             return 'edit'
           }
         } else {
           return 'add'
         }
      };

      return(
        <div className="finance-apply-wrap yt-common-bg-pages-wrap">
          <Tabs activeKey={activeKey} onChange={this.callback}>
            <TabPane tab="合同要素" key="baseInfo" >
            {
              activeKey=='baseInfo'&&
              <AppLyOne
                upDateLoanId={this.upDateLoanId}
                upDateKey={this.upDateKey}
                tabStatus={tabStatus}
                handleType={handleType}
                pageType={pageType}
                loanId={loanId} handleStatus={handleStatus()}/>
            }
            </TabPane>
            <TabPane tab="还款预算" key="payInfo"  disabled={tabStatusMap[tabStatus]<1}>
            {
              activeKey=='payInfo'&&
              <AppLyTwo
                upDateKey={this.upDateKey}
                tabStatus={tabStatus}
                handleType={handleType}
                pageType={pageType}
                loanId={loanId} handleStatus={handleStatus()}/>
            }
            </TabPane>
            <TabPane tab="合同预览" key="contract"  disabled={tabStatusMap[tabStatus] < 2}>
            {
              activeKey == 'contract'&&
              <AppLyThr
                upDateKey={this.upDateKey}
                tabStatus={tabStatus}
                handleType={handleType}
                pageType={pageType}
                loanId={loanId}
                handleStatus={handleStatus()}/>
            }
            </TabPane>
            {
              Mod&&
              <TabPane tab="审批记录" key="10">
                <Mod {...this.props} loanId={loanId} handleStatus={handleStatus()}/>
              </TabPane>
            }
          </Tabs>
        </div>
      )
    }
  }
}


export default withSubscription;
