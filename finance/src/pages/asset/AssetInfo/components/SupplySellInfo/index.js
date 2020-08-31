import {Collapse, Progress, Row, Col, Button} from 'antd';
import {YtCard, YtBaseInfo, YtCollapse} from 'common';
import SubTitleMod from '../SubTitleMod';
import moment from 'moment';

const {Panel} = Collapse;

function DeliveryFactoryInfo({...props}) {
    let {info} = props
    let {firstCompanyInfo, secondCompanyInfo} = info || {firstCompanyInfo: {}, secondCompanyInfo: {}};

    return <>
        <SubTitleMod title="甲方信息">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '甲方名称', value: firstCompanyInfo.companyName},
                {key: '甲方地址', value: firstCompanyInfo.companyAddress},
                {key: '法定代表人', value: firstCompanyInfo.legalPersonName},
                {key: '联系电话', value: firstCompanyInfo.telephone},
                {key: '签订时间', value: moment(info.contractSignDate).format('YYYY-MM-DD')},
                {key: '操作人', value: firstCompanyInfo.legalPersonName},
            ]}/>
        </SubTitleMod>
        <SubTitleMod title="乙方信息">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '乙方名称', value: secondCompanyInfo.companyName},
                {key: '乙方地址', value: secondCompanyInfo.companyAddress},
                {key: '法定代表人', value: secondCompanyInfo.legalPersonName},
                {key: '联系电话', value: secondCompanyInfo.telephone},
                {key: '签订时间', value: moment(info.contractSignDate).format('YYYY-MM-DD')},
                {key: '操作人', value: secondCompanyInfo.legalPersonName},
            ]}/>
        </SubTitleMod>
        <SubTitleMod title="协议信息">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '长期合作协议', value: '成都市众惠农资有限公司'},
            ]}/>
        </SubTitleMod>
    </>
}

export default DeliveryFactoryInfo;
