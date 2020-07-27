import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Statistic, Progress } from 'antd';
import './index.less';

function YtStatistic({...props}){
  let suffix = props.suffix?props.suffix:'';
  let color = props.type=="up"?"#81C926":"#F56C6C";
  return <div className="yt-statistic-label-itm">
            {props.children}
            {
              props.type?
              <Statistic
                title={null}
                value={props.value}
                valueStyle={{ color: color }}
                prefix={<ArrowUpOutlined />}
                suffix={suffix}/>:
              <div className="amount-num">{props.value}</div>
            }

          </div>
}

export default YtStatistic;
