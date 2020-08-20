import { YtCard } from 'common';
import './index.less';
import iconImg0 from './image/icon0.png';
import iconImg1 from './image/icon1.png';
import iconImg2 from './image/icon2.png';

function LatestCashFlow({...props}){
  return (
    <YtCard title="近3个月现金流">
       <div className="latest-cashFlow-wrap">
        <div className="step-one step-same">
          189家企业<br/>2065笔应收账款
        </div>
        <div className="bg-one step-same"></div>
        <div className="step-two step-same">
          现金流入<br/>760万元
        </div>
        <div className="bg-two step-same"></div>
        <div className="step-one step-same step-diy0">
          现金池/监管<br/>760万元
        </div>
        <div className="bg-thr step-same"></div>
        <div className="step-two step-same step-diy1">现金流出<br/>760万元</div>
        <div className="bg-four step-same"></div>
        <div className="step-thr step-same box-flex">
          <p className="stb-item">
            <img src={iconImg0} className="icon-stb"/>
              利润提取<br/>100万元
          </p>
          <p className="stb-item">
            <img src={iconImg1} className="icon-stb"/>
              偿还贷款本息<br/>100万元
          </p>
          <p className="stb-item">
            <img src={iconImg2} className="icon-stb"/>
              再经营<br/>100万元
          </p>
        </div>
       </div>
    </YtCard>
  )
}

export default LatestCashFlow;
