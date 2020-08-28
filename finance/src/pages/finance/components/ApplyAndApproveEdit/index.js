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
<<<<<<< HEAD
      isEdit:this.props.match.params.id?true:false,
    }
    callback=(key)=> {
      // console.log(key);
    }
=======
      activeKey:1,
      isEdit:this.props.match.params.id?true:false
    }
    callback=(key)=> {
      this.setState({ activeKey:key });
    }
>>>>>>> fe59d1d93a445ce3ae8c620e13609b7388cb808f
    render() {
      const { params } = this.props.match;
      const { activeKey } =this.state;
      let currentStatus = params.id?'edit':'add';
      return(
        <div className="finance-apply-wrap yt-common-bg-pages-wrap">
          <Tabs defaultActiveKey={activeKey} onChange={this.callback}>
            <TabPane tab="合同要素" key="1" forceRender={false}>
            {
              activeKey=='1'&&
              <AppLyOne handleType={handleType} loanId={params.id} currentStatus={currentStatus}/>
            }
            </TabPane>
            <TabPane tab="还款预算" key="2" forceRender={false}>
            {
              activeKey=='2'&&
              <AppLyTwo handleType={handleType} loanId={params.id} currentStatus={currentStatus}/>
            }
            </TabPane>
            <TabPane tab="合同预览" key="3" forceRender={false}>
            {
              AppLyThr == '3'&&
              <AppLyThr handleType={handleType} loanId={params.id} currentStatus={currentStatus}/>
            }  
            </TabPane>
              {Mod&&Mod()}
          </Tabs>
        </div>
      )
    }
  }
}


export default withSubscription;
