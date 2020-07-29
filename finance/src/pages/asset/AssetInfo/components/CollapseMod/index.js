import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
import './index.less';

const { Panel } = Collapse;

function CollapseMod({...props}) {
  return <YtCollapse defaultActiveKey={['1']} expandIconPosition="right">
            <>
              <Panel header="区块信息" key="1">
                <YtBaseInfo colSpan={12} dataInfo={[
                  {key:'区块更新时间',value:'成都市众惠农资有限公司'},
                  {key:'区块更新组织名称',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
                  {key:'区块高度',value:'9151030259995829XY'},
                  {key:'区块ID',value:'良好'},
                ]}/>
              </Panel>
              <Panel header="企业基本信息" key="2">
                <SubTitleMod title="一级经销商">
                  <YtBaseInfo colSpan={12} dataInfo={[
                    {key:'所属企业名称',value:'成都市众惠农资有限公司'},
                    {key:'企业地址',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
                    {key:'统一企业信用代码',value:'9151030259995829XY'},
                    {key:'企业征信状态',value:'良好'},
                  ]}/>
                </SubTitleMod>
                <SubTitleMod title="二级经销商">
                  <YtBaseInfo colSpan={12} dataInfo={[
                    {key:'所属企业名称',value:'成都市众惠农资有限公司'},
                    {key:'经销商地址',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
                    {key:'经销商姓名',value:'9151030259995829XY'},
                    {key:'联系电话',value:'良好'},
                  ]}/>
                </SubTitleMod>
              </Panel>
              <Panel header="长期供销协议" key="3">
                <SubTitleMod title="甲方信息">
                  <YtBaseInfo colSpan={12} dataInfo={[
                    {key:'甲方名称',value:'成都市众惠农资有限公司'},
                    {key:'签订时间',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
                    {key:'操作人',value:'9151030259995829XY'},
                  ]}/>
                </SubTitleMod>
                <SubTitleMod title="乙方信息">
                  <YtBaseInfo colSpan={12} dataInfo={[
                    {key:'乙方名称',value:'成都市众惠农资有限公司'},
                    {key:'签订时间',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
                    {key:'操作人',value:'9151030259995829XY'},
                  ]}/>
                </SubTitleMod>
              </Panel>
            </>
          </YtCollapse>
}
export default CollapseMod;
