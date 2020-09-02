import {YtStatistic, YtPagination, YtTable, YtBtn} from 'common';
import moment from 'moment';
import {useState, useEffect} from 'react';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import {GetLoanManagementList} from 'api/finance/WithdrawManage';
import {Spin} from 'antd';


const AccountStatement = ({...props}) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([])
    const [dataPag, setDataPag] = useState({pageSize: 10, pageNow: 1, totalSize: 0});
    const [inputValues, setInputValues] = useState({});

    const fetchList = (values = {}) => {
        setLoading(true)
        console.log(values);
        GetLoanManagementList({
            pageNow: dataPag.pageNow,
            pageSize: dataPag.pageSize,
            ...inputValues,
            ...values,
        })
            .then((res) => {
                const {result, pagination} = res.data;
                let {totalSize} = pagination
                let {pageNow} = values
                let p = {...dataPag, totalSize, pageNow}
                console.log(p);
                setDataPag(p)
                setList(result)
                setLoading(false)
            });
    }

    const changePage = (pageNow) => {
        let p = {...dataPag, pageNow}
        fetchList(p)
    };
    const onSubmit = params => {
        let {time, ...values} = params;
        console.log(values);
        let applyTime_Start;
        let applyTime_End;
        if (time) {
            applyTime_Start = moment(time[0]).format('YYYY-MM-DD');
            applyTime_End = moment(time[1]).format('YYYY-MM-DD');
        }
        setInputValues({...values, pageNow: 1, applyTime_Start, applyTime_End});
        fetchList({...values, pageNow: 1, applyTime_Start, applyTime_End})
    };
    useEffect(() => {
        fetchList()
    }, []);
    return (
        <Spin spinning={loading}>
            <div className="yt-common-list-pages-wrap">
                <FilterForm onSubmit={onSubmit}/>
                <YtTable
                    scroll={{x: 1300}}
                    columns={columnsIndex}
                    dataSource={list}/>
                <YtPagination data={dataPag} onChange={changePage}/>
            </div>
        </Spin>
    )
}

export default AccountStatement;
