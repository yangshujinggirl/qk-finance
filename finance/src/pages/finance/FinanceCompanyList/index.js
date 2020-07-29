import { Progress } from 'antd';
import { Link } from 'react-router-dom';
import { YtPagination, YtTable, YtBtn } from 'common';
import ViewCardPane from '../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import { columnsList } from './columns';
import './index.less'

class FinanceShow extends React.Component {
  state={
    visible:false
  }
  goCreat=()=> {
    this.setState({ visible:true });
  }
  onCancel=()=> {
    this.setState({ visible:false });
  }
  render() {
    const { visible } =this.state;
    const data=[
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:1
      },
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:2
      },
      {
        code:'code',
        name:'name',
        amount:'amount',
        key:3
      }
    ]
    return(
      <div className="finance-company-list-wrap yt-common-pages-wrap">
        <div className="main-content">
          <FilterForm />
          <div className="handle-common-action">
            <YtBtn onClick={this.goCreat}>+资产包创建</YtBtn>
          </div>
          <YtTable columns={columnsList} dataSource={data} scroll={{ x: 1300 }}/>
          <YtPagination data={{total:500,currentPage:0,limit:15}}/>
          <CreatModal visible={visible} onCancel={this.onCancel}/>
        </div>
      </div>
    )
  }
}

export default FinanceShow;
