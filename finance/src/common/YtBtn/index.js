import { Button } from 'antd';
import './index.less';

class YtBtn extends React.Component {
  static defaultProps={
    type:'primary',
    size:'fixed',//fixed固定宽度，free内容撑开
    loading:false,
    htmlType:'button'
  }
  render() {
    let btnClass = `${this.props.size}-width-btn ${this.props.className}`;
    const { type, htmlType, disabled, onClick, loading } =this.props;
    return (
      <Button
        htmlType={htmlType}
        type={type}
        className={btnClass}
        disabled={disabled}
        loading={loading}
        onClick={onClick}>
          {this.props.children}
      </Button>
    )
  }
}

export default YtBtn;
