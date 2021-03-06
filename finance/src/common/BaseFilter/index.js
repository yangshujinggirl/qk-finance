import React, { Component } from "react";
import "./index.less";
import moment from "moment";

class BaseFilter extends Component {
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
        span: 6
      },
      wrapperCol: {
        span: 18
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
      xl: 8,
      xxl: 8
    };
  }
  //区间值
  validatorRangNum=(rule, value, name)=>{
    const stVal = this.formRef.current.getFieldValue(name);
    if (!value || stVal <= value) {
      return Promise.resolve();
    }
    return Promise.reject('请输入有效值');
  }
  handleSubmit = async () => {
    try {
      const values = await this.formRef.current.validateFields();
      for (let i in values) {
        // 替换搜索条件中字符串的前后空格
        if (typeof values[i] == "string") {
          values[i] = values[i].replace(/^\s+|\s+$/gm, "");
        }
      }
      this.props.onSubmit && this.props.onSubmit(values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
}
export default BaseFilter;
