import {Tabs} from 'antd';
import {Link} from 'react-router-dom';
import AppLyOne from './AppLyOne.js';
import AppLyTwo from './AppLyTwo.js';
import AppLyThr from './AppLyThr.js';
import { GetTipsProcess } from 'api/finance/ApplyAndApproveEdit';
import './index.less';

const {TabPane} = Tabs;

function withSubscription(handleType, pageType, Mod){
  return class FinanceApplyEdit extends React.Component {
    state = {
      activeKey:'baseInfo',
      isEdit:this.props.match.params.id?true:false,
      tabStatus:'baseInfo'
    }
    componentDidMount(){
      this.fetchProcess()
    }
    fetchProcess=()=>{
      GetTipsProcess({ loanId:this.props.match.params.id })
      .then((res) => {
        const { tabStatus } =res.data;
        this.setState({ tabStatus:tabStatus?tabStatus:'baseInfo' });
      })
    }
    upDateKey=(value)=> {
      this.setState({ activeKey:value });
      this.fetchProcess();
    }
    callback=(key)=> {
      this.setState({ activeKey:key });
    }
    render() {
      const { params } = this.props.match;
      const { activeKey,tabStatus } =this.state;
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
          <Tabs defaultActiveKey={activeKey} onChange={this.callback}>
            <TabPane tab="合同要素" key="baseInfo" forceRender={false}>
            {
              activeKey=='baseInfo'&&
              <AppLyOne upDateKey={this.upDateKey} tabStatus={tabStatus} handleType={handleType} pageType={pageType} loanId={params.id} handleStatus={handleStatus()}/>
            }
            </TabPane>
            <TabPane tab="还款预算" key="payInfo" forceRender={false}>
            {
              activeKey=='payInfo'&&
              <AppLyTwo upDateKey={this.upDateKey} tabStatus={tabStatus} handleType={handleType} pageType={pageType} loanId={params.id} handleStatus={handleStatus()}/>
            }
            </TabPane>
            <TabPane tab="合同预览" key="contract" forceRender={false}>
            {
              activeKey == 'contract'&&
              <AppLyThr upDateKey={this.upDateKey} tabStatus={tabStatus} handleType={handleType} pageType={pageType} loanId={params.id} handleStatus={handleStatus()}/>
            }
            </TabPane>
            {
              Mod&&
              <TabPane tab="审批记录" key="10"  forceRender={false}>
                <Mod {...this.props} loanId={params.id} handleStatus={handleStatus()}/>
              </TabPane>
            }
          </Tabs>
        </div>
      )
    }
  }
}


export default withSubscription;
