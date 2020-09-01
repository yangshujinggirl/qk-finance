import {Statistic, Progress} from 'antd';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import ViewCardPane from '../../../components/ViewCardPane';
import FilterForm from './components/FilterForm';
import {columnsApply, columnsApprove} from './columns';
import {GetLoanOutStatisticalData, GetLoanList} from 'api/finance/FinanceManagement';
import './index.less'
import moment from 'moment';


function withSubscription(handleType, Mod) {
    return class FinanceShow extends React.Component {
        state = {
            visible: false,
            loanList: [],
            searchParam: {
                pageNow: 1,
                pageSize: 10,
                typeCode: "",
                enterpriseId: "",
                loanStatus: ''
            },
            pagination: {totalSize: 10, pageNow: 1, pageSize: 10},
            summary: {
                cumulativeLoan: {},
                accumulatedFinancing: {},
                cumulativeLoanApplication: {},
                reviewLoan: {},
            },

        }

        componentWillMount() {
            // 顶部统计值
            GetLoanOutStatisticalData({})
                .then((res) => {
                    let summary = res.data;
                    this.setState({...this.state, summary})
                })

            // 放款列表
            this.fetchLoanList();
        }

        goCreat = () => {
            this.setState({visible: true});
        }
        onCancel = () => {
            this.setState({visible: false});
        }
        fetchLoanList = () => {
            let param = {...this.state.searchParam, pageNow: this.state.pagination.pageNow}
            GetLoanList(param)
                .then((res) => {
                    let loanList = res.data.result;
                    let {totalSize} = res.data.pagination;
                    this.setState({
                        ...this.state,
                        loanList,
                        pagination: {...this.state.pagination, totalSize}
                    });
                });
        }
        onSearch = (values) => {
            let {time, ...searchParam} = values;
            if (time) {
                searchParam.startDate = moment(time[0]).format('YYYY-MM-DD');
                searchParam.endDate = moment(time[1]).format('YYYY-MM-DD');
            }
            let pagination = {...this.state.pagination, pageNow: 1}
            this.setState({searchParam, pagination}, () => {
                this.fetchLoanList();
            });
        }
        onPageChange = (pageNow) => {
            let pagination = {...this.state.pagination, pageNow}
            this.setState({...this.state, pagination}, () => {
                this.fetchLoanList();
            })
        }

        render() {
            // const { visible } =this.state;
            const summary = this.state.summary;
            const loanList = this.state.loanList;
            console.log('loanList==>', loanList);
            let columns = handleType == "1" ? columnsApply : columnsApprove;
            return (
                <div className="finance-company-list-wrap">
                    <div className="box-flex">
                        <ViewCardPane
                            label="累计申请融资笔数"
                            num={summary.cumulativeLoan.totalData}>
                            <div className="box-flex">
                                <YtStatistic value={summary.cumulativeLoan.weekYoY} type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.cumulativeLoan.dayChainRation} type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.cumulativeLoan.dayAddition}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
                        <ViewCardPane
                            label="累计申请放款金额(万元)"
                            num={summary.accumulatedFinancing.totalData}>
                            <div className="box-flex">
                                <YtStatistic value={summary.accumulatedFinancing.weekYoY} type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.accumulatedFinancing.dayChainRation}
                                             type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.accumulatedFinancing.dayAddition}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
                        <ViewCardPane
                            label="已审核放款笔数"
                            num={summary.cumulativeLoanApplication.totalData}>
                            <div className="box-flex">
                                <YtStatistic value={summary.cumulativeLoanApplication.weekYoY}
                                             type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.cumulativeLoanApplication.dayChainRation}
                                             type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.cumulativeLoanApplication.dayAddition}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
                        <ViewCardPane
                            label="累计放款金额(万元)"
                            num={summary.reviewLoan.totalData}>
                            <div className="box-flex">
                                <YtStatistic value={summary.reviewLoan.weekYoY} type="up">周同比</YtStatistic>
                                <YtStatistic value={summary.reviewLoan.dayChainRation} type="down">日环比</YtStatistic>
                                <YtStatistic value={summary.reviewLoan.dayAddition}>本日新增</YtStatistic>
                            </div>
                        </ViewCardPane>
                    </div>
                    <div className="main-content yt-common-list-pages-wrap">
                        <FilterForm onSearch={this.onSearch}/>
                        <YtTable
                            scroll={{x: 1300}}
                            columns={columns}
                            dataSource={loanList}/>
                        <YtPagination data={this.state.pagination} onChange={this.onPageChange}/>
                    </div>
                </div>
            )
        }
    }
}

export default withSubscription;
