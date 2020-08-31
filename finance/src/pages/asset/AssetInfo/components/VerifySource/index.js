import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtBreadcrumbName, YtCard, YtBaseInfo, YtCollapse } from 'common';
import './index.less';

import iconImg0 from '../../image/icon0.png';
import iconImg1 from '../../image/icon1.png';
import iconImg2 from '../../image/icon2.png';
import iconImg3 from '../../image/icon3.png';
import iconImg4 from '../../image/icon4.png';
import iconImg5 from '../../image/icon5.png';
import iconImg6 from '../../image/icon6.png';
import iconImg7 from '../../image/icon7.png';

function VerifySource({...props}) {
  return <div className="common-column-module-wrap aio-verify-wrap">
             <div className="module-equal-two-wrap">
               <YtCard bordered title="当前验真源" className="aiov-lf part-same-shadow">
                 <div className="box-flex">
                    <div className="source-item">
                      <img src={iconImg0} className="icon-itm"/>
                      <p>云图控股</p>
                    </div>
                    <div className="source-item">
                      <img src={iconImg1} className="icon-itm"/>
                      <p>一级经销商</p>
                    </div>
                    <div className="source-item">
                      <img src={iconImg2} className="icon-itm"/>
                      <p>二级经销商</p>
                    </div>
                    <div className="source-item">
                      <img src={iconImg3} className="icon-itm"/>
                      <p>农资用户</p>
                    </div>
                    <div className="source-item">
                      <img src={iconImg4} className="icon-itm"/>
                      <p>物流</p>
                    </div>
                    <div className="source-item">
                      <img src={iconImg5} className="icon-itm"/>
                      <p>银行</p>
                    </div>
                    <div className="source-item">
                      <img src={iconImg6} className="icon-itm"/>
                      <p>企查查</p>
                    </div>
                 </div>
               </YtCard>
             </div>
             <div className="module-equal-two-wrap">
               <YtCard bordered title="当前验真采集数据" className="aiov-rf part-same-shadow">
                 <div className="ver-data">
                  <div className="verd-row box-flex">
                    <div className="verdr-lf"><img src={iconImg7}/></div>
                    <div className="verdr-rf">
                      <Button type="primary" ghost  className="status-default-btn">二级回款数据</Button>
                    </div>
                  </div>
                  <div className="verd-row box-flex">
                    <div className="verdr-lf"><img src={iconImg0}/></div>
                    <div className="verdr-rf">
                      <Button type="primary" ghost className="status-default-btn">银行流水数据</Button>
                    </div>
                  </div>
                 </div>
               </YtCard>
             </div>
        </div>
}

export default VerifySource;
