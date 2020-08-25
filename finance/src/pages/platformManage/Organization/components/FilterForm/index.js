import {Col, Row, Form, Input} from 'antd';
import {BaseFilter, YtBtn} from 'common';
import moment from 'moment';
import {FormInstance} from 'antd/lib/form';
import './index.less';

class FilterForm extends BaseFilter {
    formRef = React.createRef();

    render() {
        return (
            <Form
                {...this.formItemLayout}
                ref={this.formRef}
                className="yt-condition-form">
                <Row gutter={24}>
                    <Col {...this.colspans}>
                        <Form.Item label="组织名称" name="orgName">
                            <Input placeholder="请输入" autoComplete="off"/>
                        </Form.Item>
                    </Col>
                </Row>
                <div className="submit-btn-wrap">
                    <YtBtn htmlType="submit" onClick={this.handleSubmit}>
                        查询
                    </YtBtn>
                </div>
            </Form>
        );
    }
};

export default FilterForm;
