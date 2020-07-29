
import React, {Component} from "react";
import {Col, Form, Row} from "antd";
import './index.less';


const  YtBaseInfo=({...props})=>{
  const { formItemConfig, dataInfo } = props;
  return (
          <Row gutter={24} className="detail-base-info-container">
          {
            dataInfo.map((el,index)=> (
              <Col key={index} span={props.colSpan?props.colSpan:8}>
                  <Form.Item
                   {...formItemConfig}
                   label={el.key}>{el.value}</Form.Item>
              </Col>
            ))
          }
          </Row>
  );
}
export default YtBaseInfo;
