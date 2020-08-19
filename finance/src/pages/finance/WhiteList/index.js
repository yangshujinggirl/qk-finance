import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'

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
        <div className="yt-common-list-pages-wrap">
            <FilterForm />
            <YtTable
            scroll={{x:1300}}
             columns={columnsIndex}
             dataSource={data}/>
            <YtPagination data={{total:500,currentPage:0,limit:15}}/>
        </div>
      )
    }
}

export default AccountStatement;
