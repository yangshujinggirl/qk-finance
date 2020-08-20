import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtenlargeImg, YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

const testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";

function Index({...props}){
  return <>
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'收货人姓名',value:'DD20200101001'},
              {key:'收货人地址',value:'DD20200101001'},
              {key:'收货人联系方式',value:'DD20200101001'},
              {key:'收货确认结果',value:'DD20200101001'},
              {key:'收货确认时间',value:'DD20200101001'},
              {key:'卸货照',value:<YtenlargeImg url={testImg}/>},
              {key:'车牌照',value:<YtenlargeImg url={testImg}/>},
              {key:'物流货物签收凭证',value:<YtenlargeImg url={testImg}/>},
            ]}/>
        </>
}
export default Index;
