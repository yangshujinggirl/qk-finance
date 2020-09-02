import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {GetWhiteList} from '../../../api/finance/WhiteList';
import {Spin} from 'antd';

class AccountStatement extends React.Component {
    state = {
        data: [],
        dataPag: {
            pageNow: 1,
            pageSize: 10,
            totalSize: 0
        },
        inputValues: {},
        loading: false
    }

    componentWillMount() {
        this.fetchLoanList();
    }

    fetchLoanList = () => {
        this.setState({...this.state, loading: true});
        const {dataPag, inputValues} = this.state;
        let params = {
            pageNow: dataPag.pageNow,
            pageSize: dataPag.pageSize,
            ...inputValues,
        }
        GetWhiteList(params)
            .then((res) => {
                let {totalSize, list} = res.data;
                this.setState({data: list, dataPag: {...this.state.dataPag, totalSize}, loading: false})
            });
    }
    onPageChange = (pageNow) => {
        let dataPag = {...this.state.dataPag, pageNow}
        this.setState({...this.state, dataPag}, () => {
            this.fetchLoanList()
        })
    }
    //查询
    search = (param) => {
        let dataPag = {...this.state.dataPag, pageNow: 1}
        this.setState({inputValues: param, dataPag}, () => {
            this.fetchLoanList();
        });
    }

    render() {
        let {dataPag, data, loading} = this.state
        return (
            <Spin spinning={loading}>
                <div className="yt-common-list-pages-wrap">
                    <FilterForm onSubmit={this.search}/>
                    <YtTable
                        scroll={{x: 1300}}
                        columns={columnsIndex}
                        dataSource={data}/>
                    <YtPagination data={dataPag} onChange={this.onPageChange}/>
                </div>
            </Spin>
        )
    }
}

export default AccountStatement;
