import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  return <>
            <SubTitleMod title="甲方信息">
              <YtBaseInfo colSpan={12} dataInfo={[
                {key:'甲方名称',value:'成都市众惠农资有限公司'},
                {key:'甲方地址',value:'自贡市自流井区舒坪镇上阳村4组'},
                {key:'法定代表人',value:'(原四川省自贡市五金交电化工公司1#仓库)'},
                {key:'联系电话',value:'9151030259995829XY'},
                {key:'签订时间',value:'9151030259995829XY'},
                {key:'操作人',value:'9151030259995829XY'},
              ]}/>
            </SubTitleMod>
            <SubTitleMod title="乙方信息">
              <YtBaseInfo colSpan={12} dataInfo={[
                {key:'乙方名称',value:'成都市众惠农资有限公司'},
                {key:'乙方地址',value:'自贡市自流井区舒坪镇上阳村4组'},
                {key:'法定代表人',value:'(原四川省自贡市五金交电化工公司1#仓库)'},
                {key:'联系电话',value:'9151030259995829XY'},
                {key:'签订时间',value:'9151030259995829XY'},
                {key:'操作人',value:'9151030259995829XY'},
              ]}/>
            </SubTitleMod>
            <SubTitleMod title="协议信息">
              <YtBaseInfo colSpan={12} dataInfo={[
                {key:'长期合作协议',value:'成都市众惠农资有限公司'},
              ]}/>
            </SubTitleMod>
        </>
}
export default DeliveryFactoryInfo;
