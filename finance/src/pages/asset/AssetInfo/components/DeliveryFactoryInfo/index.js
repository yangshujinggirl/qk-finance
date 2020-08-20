import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtenlargeImg, YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

const testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";

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
              {key:'物流司机身份证照',value:<YtenlargeImg url={testImg}/>},
              {key:'物流司机驾驶证照',value:<YtenlargeImg url={testImg}/>},
              {key:'物流车辆行驶证照',value:<YtenlargeImg url={testImg}/>},
              {key:'交货通知单照',value:<YtenlargeImg url={testImg}/>},
              {key:'装货照',value:<YtenlargeImg url={testImg}/>},
              {key:'车牌照',value:<YtenlargeImg url={testImg}/>},
              {key:'物流单凭证',value:<YtenlargeImg url={testImg}/>},
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
