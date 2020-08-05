import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  return <>
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'发货方式',value:'DD20200101001'},
              {key:'发货时间',value:'DD20200101001'},
              {key:'发货方名称',value:'DD20200101001'},
              {key:'发货仓库名称',value:'DD20200101001'},
              {key:'发货仓库地址',value:'DD20200101001'},
              {key:'发货方联系方式',value:'DD20200101001'},
              {key:'收货人名称',value:'DD20200101001'},
              {key:'收货人姓名',value:'DD20200101001'},
              {key:'收货人地址',value:'DD20200101001'},
              {key:'收货人联系方式',value:'DD20200101001'},
              {key:'物流车辆车牌号',value:'DD20200101001'},
              {key:'物流司机姓名',value:'DD20200101001'},
              {key:'物流司机身份证号',value:'DD20200101001'},
              {key:'物流司机手机号',value:'DD20200101001'},
              {key:'物流司机身份证照',value:'DD20200101001'},
              {key:'物流司机驾驶证照',value:'DD20200101001'},
              {key:'物流车辆行驶证照',value:'DD20200101001'},
              {key:'发货单照',value:'DD20200101001'},
              {key:'装货照',value:'DD20200101001'},
              {key:'车牌照',value:'DD20200101001'},
              {key:'物流单凭证',value:'DD20200101001'},
            ]}/>
        </>
}
export default DeliveryFactoryInfo;
