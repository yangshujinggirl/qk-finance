import { Steps, Popover } from 'antd';
import ProcessMod from './ProcessMod';
import Arrow from './Arrow';
import './index.less';

function AssetStatuStep({...props}){
  console.log(props)
  let finishedPro = props.index <= props.status ?'step-finished':'';
  let currentPro = props.index == props.status?'step-active':'';
  return <div className={`aspw-item ${finishedPro} ${currentPro}`}>
            { props.name }
            { props.index!="4" && <Arrow className={`${finishedPro} ${currentPro}`}/>}
        </div>
}

function AssetStepMod({...props}){
  let statusList=[
    {
      key:'0',
      name:'资产成型',
    },
    {
      key:'1',
      name:'待融资',
    },
    {
      key:'2',
      name:'已打包',
    },
    {
      key:'3',
      name:'已融资',
    },
    {
      key:'4',
      name:'融资完结',
    }]
  return <div className="asset-status-process-wrap">
          <div className="aspw-content box-flex">
            {
              statusList.map((el,index)=>(
                <AssetStatuStep  index={el.key} status="1" {...el}/>
              ))
            }
          </div>
          <ProcessMod />
      </div>
}

export default AssetStepMod;
