
import { Pagination } from 'antd';
import './index.less';

class YtPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeOptions:this.props.sizeOptions||'1',
    }
  }
  onShowSizeChange(currentPage,limit) {
    currentPage=1;
    this.props.onChange && this.props.onChange(currentPage,limit)
  }
  initPageSize() {
    const { sizeOptions } = this.state;
    if(sizeOptions == '1') {
      return ['15','30','50','100','200','500']
    } else {
      return ['16','50','100','200']
    };
  }

  render() {
    let { total, limit, currentPage } = this.props.data;
    return(
      <div className="common-pagination-components">
        <Pagination
          showTotal={total => `共${total}条`}
          total={total}
          pageSize={limit}
          current={currentPage}
          // pageSizeOptions={this.initPageSize()}
          onChange={this.props.onChange}
          onShowSizeChange={this.onShowSizeChange.bind(this)}/>
      </div>
    )
  }
}

export default YtPagination;
