import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtenlargeImg, YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
import GoodsTable from './GoodsTable';

const { Panel } = Collapse;

const testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";
const formItemLayout = {
  labelCol: {
    span: 3
  },
  wrapperCol: {
    span: 21
  }
};

const dataSource = [
  {
    code: '1',
    name: '34%嘉施利',
    price: "1,900.00",
    amount: "9,500.00",
    num: '5',
  }];


function SalesInfo({...props}){
  return <>
          <SubTitleMod title="销售订单信息">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'客户编号',value:'DD20200101001'},
              {key:'一级经销商名称',value:'2020/05/10 10:12:35'},
              {key:'交货单号1',value:'旺农发给有限公司'},
              {key:'交货日期1',value:'厂方直发'},
              {key:'产品信息1',value:<GoodsTable dataSource={dataSource}/>,colSpan:24,formItemLayout},
              {key:'交货单号2',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'交货日期2',value:'贡井区源丰街241号(2号维修车间)'},
              {key:'产品信息2',value:<GoodsTable dataSource={dataSource}/>,colSpan:24,formItemLayout},
            ]}/>
          </SubTitleMod>
          <SubTitleMod title="收款信息">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'收款账户名称',value:'成都市众惠农资有限公司'},
              {key:'收款时间',value:'成都市众惠农资有限公司'},
              {key:'收款账号',value:'成都市众惠农资有限公司'},
              {key:'开户行',value:'成都市众惠农资有限公司'},
              {key:'流水号',value:'成都市众惠农资有限公司'},
              {key:'收款凭证',value:<YtenlargeImg url={testImg}/>},
              {key:'发票信息',value:<YtenlargeImg url={testImg}/>},
            ]}/>
          </SubTitleMod>
          <SubTitleMod title="发货物流信息">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'发货工厂名',value:'成都市众惠农资有限公司'},
              {key:'发货工厂编号',value:'成都市众惠农资有限公司'},
              {key:'发货工厂地址',value:'成都市众惠农资有限公司'},
              {key:'发货人姓名',value:'成都市众惠农资有限公司'},
              {key:'发货人联系方式',value:'成都市众惠农资有限公司'},
              {key:'收货人姓名',value:'成都市众惠农资有限公司'},
              {key:'收货人联系方式',value:'成都市众惠农资有限公司'},
              {key:'收货人地址',value:'成都市众惠农资有限公司'},
              {key:'运输方式',value:'成都市众惠农资有限公司'},
              {key:'发货时间',value:'成都市众惠农资有限公司'},
              {key:'运输车辆车牌号',value:'成都市众惠农资有限公司'},
              {key:'物流司机姓名',value:'成都市众惠农资有限公司'},
              {key:'物流司机身份证号',value:'成都市众惠农资有限公司'},
              {key:'物流司机手机号',value:'成都市众惠农资有限公司'},
              {key:'物流司机身份证照',value:<YtenlargeImg url={testImg}/>},
              {key:'物流司机驾驶证照',value:<YtenlargeImg url={testImg}/>},
              {key:'物流车辆行驶证照',value:<YtenlargeImg url={testImg}/>},
              {key:'交货通知单照',value:<YtenlargeImg url={testImg}/>},
              {key:'装货照',value:<YtenlargeImg url={testImg}/>},
              {key:'车牌照',value:<YtenlargeImg url={testImg}/>},
              {key:'物流单凭证',value:<YtenlargeImg url={testImg}/>},
            ]}/>
          </SubTitleMod>
          </>
}
export default SalesInfo;
