import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtenlargeImg, YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
import GoodsTable from './GoodsTable';
const { Panel } = Collapse;

let testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";
let formItemLayout = {
  labelCol: {
    span: 3
  },
  wrapperCol: {
    span: 21
  }
};
function SalesInfo({...props}){
  return <>
            <SubTitleMod title="订单创建信息">
              <YtBaseInfo colSpan={12} dataInfo={[
                {key:'订单编号',value:'DD20200101001'},
                {key:'发起时间',value:'2020/05/10 10:12:35'},
                {key:'二级经销商名称',value:'旺农发给有限公司'},
                {key:'交货方式',value:'厂方直发'},
                {key:'产品信息',value:<GoodsTable />,colSpan:24,formItemLayout},
                {key:'收货地址',value:'贡井区源丰街241号(2号维修车间)'},
                {key:'操作人',value:'王海燕'},
                {key:'欠款账期（天）',value:'180'},
                {key:'欠条凭证',value:<YtenlargeImg url={testImg}/>},
                {key:'预收款（元）',value:'5,500.00'},
                {key:'预收款凭证',value:<YtenlargeImg url={testImg}/>},
              ]}/>
            </SubTitleMod>
            <SubTitleMod title="订单确认信息">
              <YtBaseInfo colSpan={12} dataInfo={[
                {key:'确认时间',value:'成都市众惠农资有限公司'},
              ]}/>
            </SubTitleMod>
            <SubTitleMod title="采购合同信息">
              <YtBaseInfo colSpan={12} dataInfo={[
                {key:'合同编号',value:'成都市众惠农资有限公司'},
                {key:'合同签订时间',value:'成都市众惠农资有限公司'},
                {key:'付款方式',value:'成都市众惠农资有限公司'},
                {key:'预计还款时间',value:'成都市众惠农资有限公司'},
                {key:'合同照',value:<YtenlargeImg url={testImg}/>},
              ]}/>
            </SubTitleMod>
          </>
}
export default SalesInfo;
