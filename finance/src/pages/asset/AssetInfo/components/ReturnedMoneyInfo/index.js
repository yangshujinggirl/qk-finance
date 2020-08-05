import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  return <>
          <SubTitleMod title="付款方式1">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'付款方式',value:'银行转账'},
              {key:'付款账户名',value:'DD20200101001'},
              {key:'付款金额（元）',value:'DD20200101001'},
              {key:'付款时间',value:'DD20200101001'},
              {key:'付款账号',value:'DD20200101001'},
              {key:'付款开户行',value:'DD20200101001'},
              {key:'收款账户名',value:'DD20200101001'},
              {key:'收款开户行',value:'DD20200101001'},
              {key:'流水号',value:'DD20200101001'},
              {key:'回款凭证',value:'DD20200101001'},
            ]}/>
          </SubTitleMod>
          <SubTitleMod title="付款方式2">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'付款方式',value:'支付宝'},
              {key:'付款账户名',value:'DD20200101001'},
              {key:'付款金额（元）',value:'DD20200101001'},
              {key:'付款时间',value:'DD20200101001'},
              {key:'付款账号',value:'DD20200101001'},
              {key:'付款开户行',value:'DD20200101001'},
              {key:'收款账户名',value:'DD20200101001'},
              {key:'收款开户行',value:'DD20200101001'},
              {key:'流水号',value:'DD20200101001'},
              {key:'回款凭证',value:'DD20200101001'},
            ]}/>
          </SubTitleMod>
        </>
}
export default DeliveryFactoryInfo;
