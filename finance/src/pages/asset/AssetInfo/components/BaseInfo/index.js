import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  return <>
          <YtBaseInfo colSpan={12} dataInfo={[
            {key:'区块更新时间',value:'成都市众惠农资有限公司'},
            {key:'区块更新组织名称',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
            {key:'区块高度',value:'9151030259995829XY'},
            {key:'区块ID',value:'良好'},
          ]}/>
        </>
}
export default DeliveryFactoryInfo;
