import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  return <>
          <YtBaseInfo colSpan={12} dataInfo={[
            {key:'收货人姓名',value:'DD20200101001'},
            {key:'收货人地址',value:'DD20200101001'},
            {key:'收货人联系方式',value:'DD20200101001'},
            {key:'收货确认结果',value:'DD20200101001'},
            {key:'收货确认时间',value:'DD20200101001'},
            {key:'卸货照',value:'DD20200101001'},
            {key:'车牌照',value:'DD20200101001'},
            {key:'物流货物签收凭证',value:'DD20200101001'},
          ]}/>
        </>
}
export default DeliveryFactoryInfo;
