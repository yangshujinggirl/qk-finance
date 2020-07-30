import { Link } from 'react-router-dom';

const columnsList =[
        {
        title: '序号',
        dataIndex: 'code',
        width:100,
        fixed:'left',
        },
        {
        title: '企业名称',
        dataIndex: 'name',
        },
        {
        title: '累计资产笔数',
        dataIndex: 'amount',
        },
        {
        title: '累计资产规模（万元）',
        dataIndex: 'amounted',
        },
        {
        title: '待融资产规模',
        dataIndex: 'zwf',
        },
        {
        title: '融资占比',
        dataIndex: 'zwf',
        },
        {
          title: '操作',
          dataIndex: '操作',
          fixed: 'right',
          width: 200,
          render:(text,record,index)=>{
            return <>
              <Link to="/account/asset/view/12" className="operate-link-btn">概览</Link>
              <Link to="/account/assetList/12" className="operate-link-btn">资产</Link>
              <Link to="/account/financeApprove/info/12" className="operate-link-btn">现金流</Link>
            </>
          }
        },
]

export { columnsList };
