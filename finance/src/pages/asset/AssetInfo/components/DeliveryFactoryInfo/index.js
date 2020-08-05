import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  return <>
          <SubTitleMod title="原始发货信息">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'运输方式',value:'DD20200101001'},
              {key:'发货时间',value:'2020/05/10 10:12:35'},
              {key:'发货工厂名',value:'旺农发给有限公司'},
              {key:'发货工厂编号',value:'厂方直发'},
              {key:'发货工厂地址',value:'9151030259995829XY'},
              {key:'发货人姓名',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'发货人联系方式',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'收货人姓名',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'收货人联系方式',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'收货人地址',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'运输方式',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'发货时间',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'运输车辆车牌号',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'物流司机姓名',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'物流司机身份证号',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'物流司机手机号',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'物流司机身份证照',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'物流司机驾驶证照',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'物流车辆行驶证照',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'交货通知单照',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'装货照',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'车牌照',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'物流单凭证',value:'贡井区源丰街241号(2号维修车间)'},
            ]}/>
          </SubTitleMod>
          <SubTitleMod title="物流转发信息">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'收货人名称',value:'成都市众惠农资有限公司'},
              {key:'收货人姓名',value:'成都市众惠农资有限公司'},
              {key:'收货人地址',value:'成都市众惠农资有限公司'},
              {key:'联系电话',value:'成都市众惠农资有限公司'},
            ]}/>
          </SubTitleMod>
        </>
}
export default DeliveryFactoryInfo;
