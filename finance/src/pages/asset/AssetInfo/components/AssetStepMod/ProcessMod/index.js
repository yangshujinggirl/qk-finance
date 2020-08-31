import { Steps, Popover } from 'antd';
import StepMod from './StepMod';
import './index.less';

const { Step } = Steps;
const customDot = (dot, { status, index }) => (
  <span className="dot-diy">{dot}</span>
);

function ProcessMod({...props}){
  let { info } = props;
  let isOverdue = info.surplusPayMent<0?true:false;
  let current = info.surplusPayMent<0?8:7;
  return <>
          <div className="process-steps-wrap">
            <StepMod current={current} title="长期协议签订" index="1" />
            <StepMod current={current} title="一级销售订单" index="2"/>
            <StepMod current={current} title="二级确认订单" index="3"/>
            <StepMod current={current} title="进货采购" index="4"/>
            <StepMod current={current} title="物流发货" index="5"/>
            <StepMod current={current} title="二级确认收货" index="6"/>
            <StepMod current={current} title="待二级回款" index="7"/>
            {isOverdue&&<StepMod current={current} title="回款逾期" index="8"/>}
            <StepMod current={current} title="完成" index="9"/>
          </div>
        </>
}

export default ProcessMod;
