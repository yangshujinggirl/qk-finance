import React, { Component } from "react";
import "./index.less";
import moment from "moment";

class BaseEditForm extends Component {
  constructor(props) {
    super(props);
    this.placeholder = ["开始日期", "结束日期"];
    this.formatType = "YYYY-MM-DD HH:mm:ss";
    //搜索条件默认结束时间
    this.searchCriteriaDefaultEndTime =  moment(moment().format("YYYY-MM-DD 23:59:59"));
    //搜索条件默认起始时间,要算上当天
    this.searchCriteriaDefaultStartTime =  moment(moment().subtract(29, 'days').format("YYYY-MM-DD 00:00:00"));
    // 表单的FormItem的布局比例
    this.formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 16
      }
    };
    // 表单的FormItem的布局比例
    this.formItemLayout2 = {
      labelCol: {
        span: 10
      },
      wrapperCol: {
        span: 14
      }
    };
    // 表单的列布局
    this.colspans = {
      xs: 24,
      md: 24,
      lg: 12,
      xl: 12,
      xxl: 12
    };
  }
  handleSubmit = async () => {
    try {
      const values = await this.formRef.current.validateFields();
      this.onSubmit && this.onSubmit(values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
}
export default BaseEditForm;
