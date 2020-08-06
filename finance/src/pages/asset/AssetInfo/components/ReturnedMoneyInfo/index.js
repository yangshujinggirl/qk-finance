import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtenlargeImg, YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

const testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";


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
              {key:'回款凭证',value:<YtenlargeImg url={testImg}/>},
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
              {key:'回款凭证',value:<YtenlargeImg url={testImg}/>},
            ]}/>
          </SubTitleMod>
        </>
}
export default DeliveryFactoryInfo;
