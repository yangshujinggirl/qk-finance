// import { Steps, Popover } from 'antd';
import Step from './Step';
import './index.less';

function ProcessMod({...props}){
  return <div current={6} className="process-steps-wrap">
            <Step title="长期协议签订" index="0"/>
            <Step title="一级销售订单" />
            <Step title="二级确认订单" />
            {/*<Step title="进货采购" />
            <Step title="物流发货" />
            <Step title="待二级回款" />
            <Step title="完成" />*/}
          </div>
}

export default ProcessMod;
