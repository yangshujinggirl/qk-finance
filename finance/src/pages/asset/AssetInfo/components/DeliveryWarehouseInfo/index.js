import {Collapse, Progress, Row, Col, Button} from 'antd';
import {YtenlargeImg, YtCard, YtBaseInfo, YtCollapse} from 'common';
import SubTitleMod from '../SubTitleMod';

const {Panel} = Collapse;

const testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";


function Index({...props}) {
    let {info} = props || {info: {}}
    return <>
        <YtBaseInfo colSpan={12} dataInfo={[
            {key: '发货方式', value: info.shippingMethod},
            {key: '发货时间', value: info.shippingDate},
            {key: '发货方名称', value: info.shippingCompanyName},
            {key: '发货仓库名称', value: info.shippingWarehouseName},
            {key: '发货仓库地址', value: info.shippingAddress},
            {key: '发货方联系方式', value: info.shippingTel},
            {key: '收货人名称', value: info.consigneeName},
            {key: '收货人姓名', value: info.consigneeNameA},
            {key: '收货人地址', value: info.consigneeAddress},
            {key: '收货人联系方式', value: info.consigneeTel},
            {key: '物流车辆车牌号', value: info.logisticsCarNo},
            {key: '物流司机姓名', value: info.driverName},
            {key: '物流司机身份证号', value: info.driverID},
            {key: '物流司机手机号', value: info.driverTel},
            {key: '物流司机身份证照', value: <YtenlargeImg url={info.driverIDPhotoUrl}/>},
            {key: '物流司机驾驶证照', value: <YtenlargeImg url={info.driverLicenseUrl}/>},
            {key: '物流车辆行驶证照', value: <YtenlargeImg url={info.drivingLicenseUrl}/>},
            {key: '发货单照', value: <YtenlargeImg url={info.invoiceUrl}/>},
            {key: '装货照', value: <YtenlargeImg url={info.shipmentsUrl}/>},
            {key: '车牌照', value: <YtenlargeImg url={info.numberPlateUrl}/>},
            {key: '物流单凭证', value: <YtenlargeImg url={info.logisticsVoucherUrl}/>},
        ]}/>
    </>
}

export default Index;
