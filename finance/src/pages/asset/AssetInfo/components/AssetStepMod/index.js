import { Steps, Popover } from 'antd';
import ProcessMod from './ProcessMod';
import './index.less';

function AssetStepMod({...props}){
  // let status=props.status;
  // let finishedPro = status <= props.current?'step-finished':'';
  // let currentPro = status == props.current?'step-active':'';
  return <div className="asset-status-process-wrap">
      <div className="aspw-content box-flex">
        <div className="aspw-item step-finished">
          资产成型
          <div className="arrow-wrap">
            <span className="arrow-out"></span>
            <span className="arrow-inner"></span>
          </div>
        </div>
        <div className="aspw-item step-finished step-active">待融资</div>
        <div className="aspw-item">
          已打包
          <div className="arrow-square-wrap">
            <span className="arrow-out"></span>
            <span className="arrow-inner"></span>
          </div>
        </div>
        <div className="aspw-item">已融资</div>
        <div className="aspw-item">融资完结</div>
      </div>
      <ProcessMod />
  </div>
}

export default AssetStepMod;
