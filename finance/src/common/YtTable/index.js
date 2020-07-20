import React ,{ Component } from 'react';
import { Table } from 'antd';
import './index.less';

class YtTable extends Component {
  static defaultProps = {
    bordered:false
  }
  constructor(props) {
    super(props);
  }
  //绑定方法
  processData(data) {
    if(!this.props.onOperateClick) {
      return data;
    }
    data && data.map((item, i) => {
        item.onOperateClick = (type) => { this.props.onOperateClick(item, type) };
    })
    return data;
  }
  render() {
    const dataSource = this.processData(this.props.dataSource);
    const { bordered, select, title, columns,scroll,locale } = this.props;
    return(
      <Table
        className="yt-common-table"
        title={title?title:null}
        loading={this.props.loading}
        pagination={false}
        bordered={bordered}
        dataSource={dataSource}
        columns = {this.props.columns}
        scroll={this.props.scroll}
        locale={locale}
        rowKey={this.props.rowKey?this.props.rowKey:(record)=>record.key}
        rowSelection={select?this.props.rowSelection:null}
        scroll={scroll&&this.props.scroll}/>
    )
  }
}
export default YtTable;
