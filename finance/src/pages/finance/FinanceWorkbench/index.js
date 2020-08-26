import {Statistic} from 'antd';
import ViewCardPane from '../../components/ViewCardPane';
import BlockChainNode from '../../components/BlockChainNode';
import LatestCashFlow from '../../components/LatestCashFlow';
import {YtStatistic, YtTable, YtCard} from 'common';
import TinyAearChart from './components/TinyAearChart';
import AssetDynamicChart from './components/AssetDynamicChart';
import columns, {management} from './columns';
import FundPoolChart from '../../components/FundPoolChart'
import {
    GetManagementListApi,
    GetStatisticsDataApi,
    GetDateApi,
    GetAssetPoolApi,
    GetWarningInfoApi,
} from 'api/finance/FinanceWorkbench';
import './index.less';
import stateIcon0 from './image/icon_state0.png';
import stateIcon1 from './image/icon_state1.png';
import lj_icon from './image/lj_icon.png';
import qy_icon from './image/qy_icon.png';
import xz_icon from './image/xz_icon.png';
import yz_icon from './image/yz_icon.png';
import zq_icon from './image/zq_icon.png';
import dingwei_icon from './image/dingwei_icon.png';

class OperateWorkbench extends React.Component {
    state = {
        managementList: [],
        statisticsData: {currentLoanData: {}, receivableData: {}, loanWithdrawalData: {}},
        dateInfo: [],
        cashflow: [],
        assetPool: [],
        warningInfo: [],
    }

    componentWillMount() {
        // 融资企业
        this.GetManagementList()
        //日期时间
        this.GetDate()
        //统计信息
        this.GetStatisticsData()
        //资产池
        this.GetAssetPool()
        //预警信息
        this.GetWarningInfo()
    }

    // 融资企业
    GetManagementList() {
        GetManagementListApi({pageSize: 3, pageNow: 1}).then(res => {
            res.data.forEach((item, index) => item.key = index + 1);//ant table rowkey
            let managementList = res.data;
            let p = {...this.state, managementList}
            this.setState(p)
        })
    }

    //统计信息
    GetStatisticsData() {
        GetStatisticsDataApi({pageSize: 3, pageNow: 1}).then(res => {
            let statisticsData = res.data;
            let p = {...this.state, statisticsData}
            this.setState(p)
        })
    }

    //日期时间
    GetDate() {
        GetDateApi({pageSize: 3, pageNow: 1}).then(res => {
            let dateInfo = res.data;
            let p = {...this.state, dateInfo}
            this.setState(p)
        })
    }

    //资产池
    GetAssetPool() {
        GetAssetPoolApi({pageSize: 3, pageNow: 1}).then(res => {
            let assetPool = res.data;
            let p = {...this.state, assetPool}
            this.setState(p)
        })
    }

    //预警信息
    GetWarningInfo() {
        GetWarningInfoApi({pageSize: 3, pageNow: 1}).then(res => {
            res.data.forEach((item, index) => item.key = index + 1);//ant table rowkey
            let warningInfo = res.data;
            let p = {...this.state, warningInfo}
            this.setState(p)
        })
    }

    render() {
        let {managementList, statisticsData, warningInfo, assetPool, dateInfo} = this.state
        let {currentLoanData, receivableData, loanWithdrawalData} = statisticsData
        return (
            <div className="financeWorkbench-pages-wrap">
                <div className="box-flex">
                    <ViewCardPane
                        label="当前放款总额(万元)">
                        <div className='box-flex'>
                            <span className="total">{currentLoanData.currentAmount}</span>
                            <span className="m0-2">/</span>
                            <span className="part">{currentLoanData.totalAmount}</span>
                        </div>
                        <div className="rate">融资比例
                            <span className='green'
                            >{currentLoanData.financingRatio}</span></div>
                    </ViewCardPane>
                    <ViewCardPane
                        label="应收已回款总额(万元)">
                        <div className='box-flex'>
                            <span className="total">{receivableData.currentAmount}</span>
                            <span className="m0-2">/</span>
                            <span className="part red">{receivableData.amountRatio}</span>
                        </div>
                        <div className="rate">回款正常/逾期比 <span
                            className='red'>{receivableData.repaymentRatio}</span></div>

                    </ViewCardPane>
                    <ViewCardPane
                        label="放款已出金总额(万元)">
                        <div className='box-flex'>
                            <span className="total">{loanWithdrawalData.currentAmount}</span>
                            <span className="m0-2">/</span>
                            <span className="part green">{loanWithdrawalData.amountRatio}</span>
                        </div>
                        <div className="rate box-flex">
                            <span className='part'>月同比</span>
                            <YtStatistic value={loanWithdrawalData.monthYoY} type="up"></YtStatistic>
                        </div>
                    </ViewCardPane>
                    <div className='flex-1 mt24'>
                        <YtCard title={dateInfo.currentDate}>
                            <p className="key">
                                <span>{dateInfo.chineseDate}</span>
                                <span className="part m0-20 fs-14">{dateInfo.currentDayOfWeek}</span>
                            </p>
                            <p className='flex-pb'>
                                <span className="rate tc-333">{dateInfo.currentHourMinute}</span>
                                <span className="rate tc-333"><img className='dingwei_icon' src={dingwei_icon}
                                                                   alt=""/>{dateInfo.currentCity}</span>
                            </p>
                        </YtCard>
                    </div>
                </div>
                <FundPoolChart/>
                <div className='mt24 common-column-module-wrap'>
                    <div className="module-equal-thr-wrap part-same-shadow bc-fff">
                        <YtCard title="融资企业">
                            <YtTable
                                columns={columns}
                                dataSource={managementList}
                                scroll={{y: 150}}/>
                        </YtCard>
                    </div>
                    <div className="module-equal-thr-wrap part-same-shadow bc-fff">
                        <YtCard title="行业资产池表现">
                            <div className="zichanchi">
                                <ul>
                                    <li>
                                        <img src={lj_icon} alt=""/>
                                        <div>
                                            <p className='key'>累计新增资产额</p>
                                            <p className='val'><span>{assetPool.cumulativelyAdded}</span>万元</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={xz_icon} alt=""/>
                                        <div>
                                            <p className='key'>新增资产平均价值</p>
                                            <p className='val'><span>{assetPool.averageValue}</span>万元</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={zq_icon} alt=""/>
                                        <div>
                                            <p className='key'>新增平均账期</p>
                                            <p className='val'><span>{assetPool.averageAccountPeriod}</span>天</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={qy_icon} alt=""/>
                                        <div>
                                            <p className='key'>可融资资产最多企业</p>
                                            <p className='val'>{assetPool.assetMaxCompany}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={qy_icon} alt=""/>
                                        <div>
                                            <p className='key'>应回收款最多企业</p>
                                            <p className='val'>{assetPool.paybackMaxCompany}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={yz_icon} alt=""/>
                                        <div>
                                            <p className='key'>资产验真通过率</p>
                                            <p className='val'>{assetPool.verificationRatio}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </YtCard>
                    </div>
                    <div className="module-equal-thr-wrap part-same-shadow bc-fff">
                        <YtCard title="预警信息">
                            <YtTable
                                columns={management}
                                dataSource={warningInfo}
                                scroll={{y: 150}}/>
                        </YtCard>
                    </div>
                </div>
            </div>
        )
    }
}

export default OperateWorkbench;
