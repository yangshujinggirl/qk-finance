import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import ApproveRecord from '../../../components/ApproveRecord';
import AppLyOne from '../AppLyOne';

const { TabPane } = Tabs;

function withSubscription(handleType){
  return class FinanceApplyEdit extends React.Component {
    state = {
      isEdit:this.props.match.params.id?true:false,
    }
    callback=(key)=> {
      // console.log(key);
    }
    render() {
      return(
        <div className="yt-common-bg-pages-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="白名单企业" key="1">
              <AppLyOne />
            </TabPane>
            <TabPane tab="审批记录" key="2">
              <ApproveRecord handleType={handleType}/>
            </TabPane>
          </Tabs>
        </div>
      )
    }
  }
}


export default withSubscription;
