import {Statistic, Progress} from 'antd';
import moment from 'moment';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import ViewCardPane from '../../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import CreatModal from './components/CreatModal';
import {columnsList} from './columns';
import { CommonUtils } from 'utils';
import './index.less'
import {GetProFileList, GetStatisticalData, GetFinanceList} from 'api/finance/FinanceManagement';
import {useState, useEffect} from 'react';
import {Spin} from 'antd';

function withSubscription(handleType, Mod) {

    return class FinanceShow extends React.Component {
        state = {
            visible: false,
            inputValues: {},
            currentItem: {},
            fileList: [],
            data: [],
            pagination: {
                totalSize: 0,
                pageSize: 10,
                pageNow: 1,
            },
            summary: {},
            loading: false
        }

        componentDidMount() {
            this.fetchFinanceList();
            this.fetchTotal();
        }

        fetchFinanceList = (values) => {
            this.setState({...this.state, loading: true});
            let {pageSize, pageNow} = this.state.pagination
            let param = {...this.state.inputValues, pageSize, pageNow}
            const {pagination, inputValues} = this.state;
            GetFinanceList(param)
                .then((res) => {
                    const {result, pagination} = res.data;
                    result.map((el, index) => el.key = index + 1);
                    let p = {...this.state.pagination, totalSize: pagination.totalSize}
                    this.setState({...this.state, data: result, pagination: p, loading: false})
                })
        }
        fetchTotal = () => {
            GetStatisticalData()
                .then((res) => {
                    const {data} = res;
                    let values = {
                        total1: data[0].total,
                        total2: data[0].countNum,
                        total3: data[1].total,
                        total4: data[1].countNum,
                        w1: data[0].numWeekRatio,
                        w2: data[0].amountWeekRatio,
                        w3: data[1].numWeekRatio,
                        w4: data[1].amountWeekRatio,
                        d1: data[0].numDayRatio,
                        d2: data[0].amountDayRatio,
                        d3: data[1].numDayRatio,
                        d4: data[1].amountDayRatio,
                        a1: data[0].numTodayRatio,
                        a2: data[0].amountTodayRatio,
                        a3: data[1].numTodayRatio,
                        a4: data[1].amountTodayRatio
                    }
                    this.setState({summary: values})
                })
        }
        onOk = () => {
            this.setState({visible: false});
        }
        onCancel = () => {
            this.setState({visible: false});
        }
        onChange = (pageNow, pageSize) => {
            let pagination = {...this.state.pagination, pageNow}
            this.setState({...this.state, pagination}, () => {
                this.fetchFinanceList();
            })
        }
        onOperateClick = ({item, type}) => {
            GetProFileList({loanNo: item.loanNo})
                .then((res) => {
                    this.setState({fileList: res.data, currentItem: item, visible: true});
                })
        }
        onSubmit = values => {
            let {applyTime, ...inputValues} = values;
            if (applyTime) {
                inputValues.startDate = moment(applyTime[0]).format('YYYY-MM-DD');
                inputValues.endDate = moment(applyTime[1]).format('YYYY-MM-DD');
            }
            let pagination = {...this.state.pagination, pageNow: 1}
            this.setState({...this.state, inputValues, pagination}, () => {
                this.fetchFinanceList();
            });
        };

        render() {
            const {currentItem, fileList, data, visible, pagination, summary, loading} = this.state;
            let columns = columnsList(handleType, this.state.pagination);
            return (
<<<<<<< HEAD
                <Spin spinning={loading}>
                    <div className="finance-company-list-wrap">
                        <div className="box-flex">
                            <ViewCardPane
                                label="累计申请融资笔数"
                                num={summary.total1}>
                                <div className="box-flex">
                                    <YtStatistic value={summary.w1} type="up">周同比</YtStatistic>
                                    <YtStatistic value={summary.d1} type="down">日环比</YtStatistic>
                                    <YtStatistic value={summary.a1}>本日新增</YtStatistic>
                                </div>
                            </ViewCardPane>
                            <ViewCardPane
                                label="累计申请融资金额(万元)"
                                num={summary.total2}>
                                <div className="box-flex">
                                    <YtStatistic value={summary.w2} type="up">周同比</YtStatistic>
                                    <YtStatistic value={summary.d2} type="down">日环比</YtStatistic>
                                    <YtStatistic value={summary.a2}>本日新增</YtStatistic>
                                </div>
                            </ViewCardPane>
                            <ViewCardPane
                                label="已审核融资笔数"
                                num={summary.total3}>
                                <div className="box-flex">
                                    <YtStatistic value={summary.w3} type="up">周同比</YtStatistic>
                                    <YtStatistic value={summary.d3} type="down">日环比</YtStatistic>
                                    <YtStatistic value={summary.a3}>本日新增</YtStatistic>
                                </div>
                            </ViewCardPane>
                            <ViewCardPane
                                label="已审核融资金额(万元)"
                                num={summary.total4}>
                                <div className="box-flex">
                                    <YtStatistic value={summary.w4} type="up">周同比</YtStatistic>
                                    <YtStatistic value={summary.d4} type="down">日环比</YtStatistic>
                                    <YtStatistic value={summary.a4}>本日新增</YtStatistic>
                                </div>
                            </ViewCardPane>
                        </div>
                        <div className="main-content yt-common-list-pages-wrap">
                            <FilterForm onSubmit={this.onSubmit}/>
                            {Mod && <Mod/>}
                            <YtTable
                                onOperateClick={this.onOperateClick}
                                scroll={{x: 1300}}
                                columns={columns}
                                dataSource={data}/>
                            <YtPagination data={pagination} onChange={this.onChange}/>
                            <CreatModal
                                paramsVal={currentItem}
                                visible={visible}
                                onOk={this.onOk}
                                onCancel={this.onCancel}
                                data={fileList}/>
                        </div>
=======
                <div className="finance-company-list-wrap">
                    <div className="box-flex">
                        <ViewCardPane
                            label="累计申请融资笔数"
                            num={summary.total1}>
                            <div className="box-flex">
                                <YtStatistic value={summary.w1} type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.d1} type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.a1}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
                        <ViewCardPane
                            label="累计申请融资金额(万元)"
                            num={CommonUtils.formatAmount(summary.total2)}>
                            <div className="box-flex">
                                <YtStatistic value={summary.w2} type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.d2} type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.a2}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
                        <ViewCardPane
                            label="已审核融资笔数"
                            num={summary.total3}>
                            <div className="box-flex">
                                <YtStatistic value={summary.w3} type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.d3} type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.a3}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
                        <ViewCardPane
                            label="已审核融资金额(万元)"
                            num={CommonUtils.formatAmount(summary.total4)}>
                            <div className="box-flex">
                                <YtStatistic value={summary.w4} type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.d4} type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.a4}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
>>>>>>> 395ea71f69785d1d43da98b8cf4ceae6e14f3e52
                    </div>
                </Spin>
            )
        }
    }
}


export default withSubscription;
