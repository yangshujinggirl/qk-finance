import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import AppLyOne from './AppLyOne.js';
import AppLyTwo from './AppLyTwo.js';
import AppLyThr from './AppLyThr.js';

const { TabPane } = Tabs;

function withSubscription(handleType, Mod){
  return class FinanceApplyEdit extends React.Component {
    state = {
      isEdit:this.props.match.params.id?true:false,
    }
    callback=(key)=> {
      // console.log(key);
    }
    render() {
      return(
        <div className="finance-apply-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="合同要素" key="1">
              <AppLyOne />
            </TabPane>
            <TabPane tab="还款预算" key="2">
              <AppLyTwo />
            </TabPane>
            <TabPane tab="合同预览" key="3">
              <AppLyThr />
            </TabPane>
            {Mod&&Mod()}
          </Tabs>
        </div>
      )
    }
  }
}


export default withSubscription;
