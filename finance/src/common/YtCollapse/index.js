import { Collapse } from 'antd';
import './index.less';

const { Panel } = Collapse;

function YtCollapse({...props}){
  return <Collapse
            defaultActiveKey={props.defaultActiveKey}
            accordion
            expandIconPosition="right"
            className={`yt-common-collapse-wrap ${props.className?props.className:''}`}>
            {props.children }
        </Collapse>
}

export default YtCollapse;
