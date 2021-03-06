import { Steps, Popover } from 'antd';
import StepMod from './StepMod';
import './index0.less';

const { Step } = Steps;
const customDot = (dot, { status, index }) => (
  <span className="dot-diy">{dot}</span>
);

function ProcessMod({...props}){
  return <>
          <div current={6} className="process-steps-wrap">
            <StepMod current={5} title="长期协议签订" index="1" />
            <StepMod current={5} title="一级销售订单" index="2"/>
            <StepMod current={5} title="二级确认订单" index="3"/>
            <StepMod current={5} title="进货采购" index="4"/>
            <StepMod current={5} title="物流发货" index="5"/>
            <StepMod current={5} title="二级确认收货" index="6"/>
            <StepMod current={5} title="待二级回款" index="7"/>
            <StepMod current={5} title="完成" index="8"/>
          </div>
        </>
}

export default ProcessMod;
