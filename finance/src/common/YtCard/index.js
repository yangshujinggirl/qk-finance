import { Card } from 'antd';
import './index.less';

function YtCard({...props}){
  return <Card
          title={props.title}
          extra={props.extra}
          className={`yt-common-card ${props.className} ${props.bordered?'card-border-head':''}`}>
            {props.children}
          </Card>
}

export default YtCard;
