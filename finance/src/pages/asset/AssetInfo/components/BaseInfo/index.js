import {Collapse, Progress, Row, Col, Button} from 'antd';
import {YtenlargeImg, YtCard, YtBaseInfo, YtCollapse} from 'common';
import SubTitleMod from '../SubTitleMod';

const {Panel} = Collapse;

let testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";

function DeliveryFactoryInfo({...props}) {
    let {firstCompanyInfo, secondCompanyInfo} = props.info || {firstCompanyInfo: {}, secondCompanyInfo: {}};
    let cardImgList = () => {
        let arr = [1, 2, 3, 4]
        return <>
            {
                arr.map((el, index) => (
                    <YtenlargeImg url={testImg} key={index} placement="inline"/>
                ))
            }
        </>
    }
    console.log(props)
    return <>
        <SubTitleMod title="一级经销商">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '企业名称', value: firstCompanyInfo.companyName},
                {key: '统一企业信用代码', value: firstCompanyInfo.creditCode},
                {key: '企业地址', value: firstCompanyInfo.companyAddress},
                {key: '企业征信状态', value: firstCompanyInfo.againstDeception},
                {key: '成立日期', value: firstCompanyInfo.setUpDate},
                {key: '注册资本', value: firstCompanyInfo.registeredCapital},
                {key: '股权结构', value: firstCompanyInfo.ownerShip},
                {key: '组织机构代码', value: firstCompanyInfo.companyOrgCode},
                {
                    key: '营业执照',
                    value: firstCompanyInfo.businessLicensePhotoAttachment &&
                        <YtenlargeImg url={firstCompanyInfo.businessLicensePhotoAttachment}/>
                },
                {key: '税务登记证', value: firstCompanyInfo.taxNo},
                {key: '银行开户许可证', value: firstCompanyInfo.bankAccountOpenLicense},
                // {key: '财务报表', value: '50万'},
                // {key: '半年内对公账户流水', value: cardImgList()},
                // {key: '近期客户合同照', value: <YtenlargeImg url={testImg}/>},
                {key: '企业法人姓名', value: firstCompanyInfo.legalPersonName},
                {key: '企业法人身份证号', value: firstCompanyInfo.legalPersonIdno},
                {
                    key: '企业法人身份证照',
                    value: firstCompanyInfo.legalPersonIdnoAttachment &&
                        <YtenlargeImg url={firstCompanyInfo.legalPersonIdnoAttachment}/>
                },
                // {key: '企业法人征信状态', value: '50万'},
                // {key: '主要人员姓名与职位', value: '执行董事兼总经理：曹金玉 ； 王海燕：监事'},
                // {key: '农资经营许可证', value: '执行董事兼总经理：曹金玉 ； 王海燕：监事'},
                // {key: '各品牌授权书', value: '执行董事兼总经理：曹金玉 ； 王海燕：监事'},
            ]}/>
        </SubTitleMod>
        <SubTitleMod title="二级经销商">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '经销商名称', value: secondCompanyInfo.companyName},
                {key: '经销商姓名', value: secondCompanyInfo.legalPersonName},
                {key: '经销商地址', value: secondCompanyInfo.companyAddress},
                {key: '联系电话', value: secondCompanyInfo.telephone},
                {key: '身份证号', value: secondCompanyInfo.legalPersonIdno},
                {
                    key: '身份证件照',
                    value: secondCompanyInfo.legalPersonIdnoAttachment &&
                        <YtenlargeImg url={secondCompanyInfo.legalPersonIdnoAttachment}/>
                },
            ]}/>
        </SubTitleMod>
    </>
}

export default DeliveryFactoryInfo;
