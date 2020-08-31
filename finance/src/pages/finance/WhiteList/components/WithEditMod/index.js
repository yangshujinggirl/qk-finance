import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import ApproveRecord from '../ApproveRecord';
import AppLyOne from '../AppLyOne';

const { TabPane } = Tabs;

function withSubscription(handleType){
  return class FinanceApplyEdit extends React.Component {
    state = {
      activeKey:1,
      isEdit:this.props.match.params.id?true:false,
    }
    callback=(key)=> {
      this.setState({ activeKey:key })
    }
    render() {
      let { id } = this.props.match.params;
      let { activeKey } =this.state;
      return(
        <div className="yt-common-bg-pages-wrap">
          <Tabs defaultActiveKey={activeKey} onChange={this.callback}>
            <TabPane tab="白名单企业" key="1">
              { activeKey==1&&<AppLyOne  accountId={id}/> }
            </TabPane>
            <TabPane tab="审批记录" key="2">
              { activeKey==2&&<ApproveRecord accountId={id}/> }
            </TabPane>
          </Tabs>
        </div>
      )
    }
  }
}


export default withSubscription;
