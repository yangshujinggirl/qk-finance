import { YtStatistic, YtPagination, YtTable, YtBtn } from 'common';
import moment from 'moment';
import { useState, useEffect } from 'react';
import FilterForm from './components/FilterForm';
import {columnsIndex} from './columns';
import './index.less'
import { GetLoanManagementList } from 'api/finance/WithdrawManage';


const AccountStatement=({...props})=> {
		const [visible, setVisible] = useState(false);
		const [list,setList] = useState([])
		const [dataPag,setDataPag] = useState({ pageSize:10, pageNow:1, totalSize:0 });
		const [inputValues,setInputValues] = useState({});

		const fetchList=(values)=> {
			GetLoanManagementList({
				pageNow: dataPag.pageNow,
				pageSize: dataPag.pageSize,
				...inputValues,
	      ...values,
			})
			.then((res)=> {
				const { result, pagination } =res.data;
				setDataPag(pagination)
				setList(result)
			});
		}

		const changePage = (pageNow, pageSize) => {
			fetchList({pageNow, pageSize})
		};
		const onSubmit = params => {
			let { time, ...values } =params;
			if(time) {
				values.applyTime_Start = moment(time[0]).format('YYYY-MM-DD');
				values.applyTime_End = moment(time[1]).format('YYYY-MM-DD');
			}
			setInputValues(params);
			fetchList(values)
		};
		useEffect(() => { fetchList() },[]);
    return(
      <div className="yt-common-list-pages-wrap">
          <FilterForm  onSubmit={onSubmit}/>
          <YtTable
            scroll={{x:1300}}
           columns={columnsIndex}
           dataSource={list}/>
					<YtPagination data={dataPag} onChange={changePage}/>
      </div>
    )
}

export default AccountStatement;
