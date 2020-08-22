import { Link } from 'react-router-dom';
import NP from 'number-precision';

const columnsList =[
        {
          title: '序号',
          dataIndex: 'key',
          width:100,
          fixed:'left',
        },
        {
          title: '企业名称',
          dataIndex: 'enterpriseName',
        },
        {
          title: '累计资产笔数',
          dataIndex: 'assetsNum',
        },
        {
          title: '累计资产规模（万元）',
          dataIndex: 'assetSize',
        },
        {
          title: '待融资产规模',
          dataIndex: 'zwf',
          render:(text,record,index)=>{
            record.assetSize = record.assetSize?record.assetSize:0;
            record.totalLoanHistory = record.totalLoanHistory?record.totalLoanHistory:0;
            return <>{NP.round(NP.minus(record.assetSize,record.totalLoanHistory),2)}</>
          }
        },
        {
          title: '融资占比',
          dataIndex: 'zb',
          render:(text,record,index)=>{
            record.totalLoanHistory = record.totalLoanHistory?record.totalLoanHistory:0;
            record.assetSize = record.assetSize?record.assetSize:1;
            return <>{NP.round(NP.divide(record.totalLoanHistory,record.assetSize),2)}</>
          }
        },
        {
          title: '操作',
          dataIndex: '操作',
          fixed: 'right',
          width: 200,
          render:(text,record,index)=>{
            return <>
              <Link to={`/account/asset/financeCompany/view/${record.enterpriseId}`} className="operate-link-btn">概览</Link>
              <Link to={`/account/asset/financeCompany/list/${record.enterpriseId}`} className="operate-link-btn">资产</Link>
              <Link to={`/account/asset/financeCompany/cash/${record.enterpriseId}`} className="operate-link-btn">现金流</Link>
            </>
          }
        },
]

export { columnsList };
