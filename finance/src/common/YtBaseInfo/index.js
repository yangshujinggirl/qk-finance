
import React, {Component} from "react";
import {Col, Form, Row} from "antd";
import './index.less';


const  YtBaseInfo=({...props})=>{
  const { formItemConfig, colSpan, dataInfo } = props;
  let fixedFormItemLayout = formItemConfig?formItemConfig:{
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
  }
  let fixedColSpan = colSpan?colSpan:8;
  return (
      <Row gutter={24} className="detail-base-info-container">
        {
          dataInfo.map((el,index)=> {
            let formItemLayout = el.formItemLayout?el.formItemLayout:fixedFormItemLayout;
            let span = el.colSpan?el.colSpan:fixedColSpan;
            console.log(el.key,span)
            return <Col key={index} span={span}>
                      <Form.Item  {...formItemLayout} label={el.key}>{el.value}</Form.Item>
                  </Col>
          })
        }
      </Row>
  );
}
export default YtBaseInfo;
