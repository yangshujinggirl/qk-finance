import { Steps, Popover } from 'antd';
import StepMod from './StepMod';
import './index.less';

const { Step } = Steps;
const customDot = (dot, { status, index }) => (
  <span className="dot-diy">{dot}</span>
);

function ProcessMod({...props}){
  return <Steps current={6} progressDot={customDot}>
            <Step title="长期协议签订" index="1"/>
            <Step title="一级销售订单" index="2"/>
            <Step title="二级确认订单" index="3"/>
            <Step title="进货采购" index="4"/>
            <Step title="物流发货" index="5"/>
            <Step title="二级确认收货" index="6"/>
            <Step title="待二级回款" index="7"/>
            <Step title="完成" index="8"/>
          </Steps>
}

export default ProcessMod;
