import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {GetWhiteList} from '../../../api/finance/WhiteList';

class AccountStatement extends React.Component {
    state = {
        data: [],
        dataPag: {
            pageNow: 1,
            pageSize: 10,
            totalSize:0
        },
        inputValues:{}
    }
    componentWillMount() {
        this.fetchLoanList();
    }
    fetchLoanList = () => {
      const { dataPag,inputValues } =this.state;
      let params = {
        pageNow:dataPag.pageNow,
        pageSize:dataPag.pageSize,
        ...inputValues,
      }
        GetWhiteList(params)
            .then((res) => {
              let { pageNow, totalSize, list } =res.data;
                this.setState({ data:list, dataPag:{ pageSize:10,totalSize, pageNow:pageNow?pageNow:1 }})
            });
    }
    onPageChange = (pageNow) => {
        this.setState({ pageNow },()=>{
          this.fetchLoanList()
        })
    }
    //查询
    search = (param) => {
        this.setState({inputValues:param}, () => {
            this.fetchLoanList();
        });
    }

    render() {
        let { dataPag, data} = this.state
        return (
            <div className="yt-common-list-pages-wrap">
                <FilterForm onSubmit={this.search}/>
                <YtTable
                    scroll={{x: 1300}}
                    columns={columnsIndex}
                    dataSource={data}/>
                <YtPagination data={dataPag} onChange={this.onPageChange}/>
            </div>
        )
    }
}

export default AccountStatement;
