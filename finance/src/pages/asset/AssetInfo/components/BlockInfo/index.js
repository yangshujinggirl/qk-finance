import { Collapse, Progress, Row, Col, Button } from 'antd';
import moment from 'moment';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  const { info } =props;
  return <>
          <YtBaseInfo colSpan={12} dataInfo={[
            {key:'区块更新时间',value:moment(info.dateOfUpdate).format('YYYY-MM-DD')},
            {key:'区块更新组织名称',value:info.blockCreateOrganizationName},
            {key:'区块高度',value:info.blockHeight},
            {key:'区块ID',value:info.blockHash},
          ]}/>
        </>
}
export default DeliveryFactoryInfo;
