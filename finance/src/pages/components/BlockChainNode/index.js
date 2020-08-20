import { YtCard } from 'common';
import mapImg from './image/map.png';
import zzImg from './image/icon_zz.png';
import jdImg from './image/icon_jd.png';
import './index.less';

function BlockChainNode({...props}){
  return (
    <YtCard title="区块链组织节点" className="part-same-shadow block-chain-wrap">
      <div className="block-chain-node">
       <img src={mapImg} className='map-block'/>
       <div className="bcd-list">
         <div className="bcd-item">
            <img src={zzImg} className='icon-bd'/>
            <div className="bcd-info">
              <p className="num">8</p>
              <p>组织个数</p>
            </div>
         </div>
         <div className="bcd-item">
            <img src={jdImg} className='icon-bd'/>
            <div className="bcd-info">
              <p className="num">8</p>
              <p>节点个数</p>
            </div>
         </div>
       </div>
      </div>
    </YtCard>
  )
}

export default BlockChainNode;
