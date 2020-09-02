import {Collapse, Progress, Row, Col, Button} from 'antd';
import moment from 'moment';
import {YtenlargeFile, YtenlargeImg, YtCard, YtBaseInfo, YtCollapse} from 'common';
import SubTitleMod from '../SubTitleMod';
import GoodsTable from './GoodsTable';
import { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import {shipperTypeMap} from '../option'

const {Panel} = Collapse;

let testImg = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596691069156&di=9f518086f99c00b3ecb136475ac58aba&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180223%2Fdde293d351844dbab0d6e7c0ce3c467d.jpeg";
let formItemLayout = {
    labelCol: {
        span: 3
    },
    wrapperCol: {
        span: 21
    }
};

function SalesInfo({...props}) {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);
    let {info} = props;
    let productDetailJsonArr = info.productDetailJsonArr ? info.productDetailJsonArr : [];
    productDetailJsonArr.map((el,index)=>el.key=index)
    const { pdfDocument, pdfPage } = usePdf({ file: info.contractPDFUrl, page, canvasRef });

    const PdfMod=(
      <div>
          <canvas ref={canvasRef} />
          {Boolean(pdfDocument && pdfDocument.numPages) && (
          <nav>
            <ul className="pager">
              <li className="previous">
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  Previous
                </Button>
              </li>
              <li className="next">
                <Button
                  disabled={page === pdfDocument.numPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    )
    return <>
        <SubTitleMod title="订单创建信息">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '订单编号', value: info.orderNo},
                {key: '发起时间', value: moment(info.dateOfCreate).format('YYYY-MM-DD')},
                {key: '二级经销商名称', value: info.salesSourceCompanyName},
                {key: '交货方式', value: shipperTypeMap[info.shipperType]},
                {key: '产品信息', value: <GoodsTable dataSource={productDetailJsonArr}/>, colSpan: 24, formItemLayout},
                {key: '收货地址', value: info.salesShippingAddress},
                {key: '操作人', value: info.salesOperatorSourceCompanyName},
                {key: '欠款账期（天）', value: info.expectedDate},
                // {key: '欠条凭证', value: <YtenlargeImg url={testImg}/>},
                {key: '预收款（元）', value: info.earnestMoney},
                // {key: '预收款凭证', value: <YtenlargeImg url={testImg}/>},
            ]}/>
        </SubTitleMod>
        <SubTitleMod title="订单确认信息">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '确认时间', value: info.deliveryTime},
            ]}/>
        </SubTitleMod>
        <SubTitleMod title="采购合同信息">
            <YtBaseInfo colSpan={12} dataInfo={[
                {key: '合同编号', value: info.contractNumber},
                {key: '合同签订时间', value: moment(info.signDate).format('YYYY-MM-DD')},
                // {key:'付款方式',value:'成都市众惠农资有限公司'},
                // {key:'预计还款时间',value:'成都市众惠农资有限公司'},
                {key: '合同照', value: <YtenlargeFile file={info.contractPDFUrl}/>},
            ]}/>
        </SubTitleMod>
    </>
}

export default SalesInfo;
