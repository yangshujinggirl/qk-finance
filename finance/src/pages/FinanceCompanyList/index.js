import { Tabs } from 'antd';
import FinanceShow from './FinanceShow';
import './index.less';

const { TabPane } = Tabs;

class FinanceCompanyList extends React.Component {
  callback(key) {
    console.log(key);
  }
  render(){
    return(
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="融资企业展示" key="1">
            <FinanceShow />
          </TabPane>
          <TabPane tab="融资企业分析" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default FinanceCompanyList;
