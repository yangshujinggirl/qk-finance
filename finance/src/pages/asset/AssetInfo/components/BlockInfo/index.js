import { Collapse, Progress, Row, Col, Button } from 'antd';
import { YtCard, YtBaseInfo, YtCollapse } from 'common';
import SubTitleMod from '../SubTitleMod';
const { Panel } = Collapse;

function DeliveryFactoryInfo({...props}){
  return <>
          <SubTitleMod title="一级经销商">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'企业名称',value:'成都市众惠农资有限公司'},
              {key:'统一企业信用代码',value:'9151030259995829XY'},
              {key:'企业地址',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
              {key:'企业征信状态',value:'良好'},
              {key:'成立日期',value:'良好'},
              {key:'注册资本',value:'50万'},
              {key:'股权结构',value:'50万'},
              {key:'组织机构代码',value:'50万'},
              {key:'营业执照',value:'50万'},
              {key:'税务登记证',value:'50万'},
              {key:'银行开户许可证',value:'50万'},
              {key:'财务报表',value:'50万'},
              {key:'半年内对公账户流水',value:'50万'},
              {key:'近期客户合同照',value:'50万'},
              {key:'企业法人姓名',value:'50万'},
              {key:'企业法人身份证号',value:'50万'},
              {key:'企业法人身份证照',value:'50万'},
              {key:'企业法人征信状态',value:'50万'},
              {key:'主要人员姓名与职位',value:'执行董事兼总经理：曹金玉 ； 王海燕：监事'},
              {key:'农资经营许可证',value:'执行董事兼总经理：曹金玉 ； 王海燕：监事'},
              {key:'各品牌授权书',value:'执行董事兼总经理：曹金玉 ； 王海燕：监事'},
            ]}/>
          </SubTitleMod>
          <SubTitleMod title="二级经销商">
            <YtBaseInfo colSpan={12} dataInfo={[
              {key:'经销商名称',value:'成都市众惠农资有限公司'},
              {key:'经销商姓名',value:'9151030259995829XY'},
              {key:'经销商地址',value:'自贡市自流井区舒坪镇上阳村4组(原四川省自贡市五金交电化工公司1#仓库)'},
              {key:'联系电话',value:'良好'},
              {key:'身份证号',value:'良好'},
              {key:'身份证件照',value:'良好'},
            ]}/>
          </SubTitleMod>
        </>
}
export default DeliveryFactoryInfo;
