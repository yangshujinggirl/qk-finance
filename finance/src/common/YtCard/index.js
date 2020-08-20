import { Card } from 'antd';
import './index.less';

function YtCard({...props}){
  console.log(props)
  return <Card
          title={props.title}
          extra={props.extra}
          className={`yt-common-card ${props.bordered?'card-border-head':''} ${props.className}`}>
            {props.children}
          </Card>
}

export default YtCard;
