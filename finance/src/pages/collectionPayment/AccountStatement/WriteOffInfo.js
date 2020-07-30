import { Collapse } from 'antd';
import { YtCard, YtBaseInfo, YtTable, YtBtn } from 'common';
import {columnsInfo} from './columns';
import './WriteOffInfo.less';

const { Panel } = Collapse;
const data = [
  {
    code: '1',
    key: '1',
    name: 'John Brown',
    amount: '300',
    amounted: '+10,000.00',
    amountPocess: '+10,000.00',
    address: 'New York No. 1 Lake Park',
    time0:'2020-08-01',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782'
  },
  {
    code: '2',
    key: '2',
    name: 'Jim Green',
    amount: '300',
    amounted: '10,000.00',
    amountPocess: '10,000.00',
    address: 'London No. 1 Lake Park',
    time0:'2020-08-01',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782',
    test2:'网银导入'
  },
  {
    code: '3',
    key: '3',
    name: 'Joe Black',
    amount: '300',
    amounted: '10,000.00',
    amountPocess: '10,000.00',
    address: 'Sidney No. 1 Lake Park',
    time0:'2020-04-06  11:00:00',
    time1:'2020-08-01',
    zwf:'民生银行',
    pay:'自贡市金玉农资有限公司',
    paycode:'6226 0101 1010 0456 782'
  },
];
class AccountStatement extends React.Component {
    render() {
      return(
        <div className="account-statement-info-wrap">
          <YtCard title="基础信息" bordered={true}>
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'流水编号',value:'成都市众惠农资有限公司'},
              {key:'回款客户',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
              {key:'回款银行',value:'9151030259995829XY'},
              {key:'回款银行账号',value:'6223 1789 7899 1234 0001'},
              {key:'核销金额',value:'10000'},
              {key:'剩余待核销金额',value:'0'},
              {key:'核销状态',value:'全部核销'},
            ]}/>
          </YtCard>
          <YtCard title="核销详情" bordered={true}>
            <YtTable
             columns={columnsInfo}
             dataSource={data}/>
          </YtCard>
        </div>
      )
    }
}

export default AccountStatement;
