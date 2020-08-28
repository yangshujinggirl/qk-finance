import moment from 'moment';

const columnsRecord = [
  {
    title: '序列号',
    dataIndex: 'id',
  },
  {
    title: '任务阶段',
    dataIndex: 'process',
  },
  {
    title: '动作',
    dataIndex: 'action',
  },
  {
    title: '意见内容',
    dataIndex: 'comments',
  },
  {
    title: '角色',
    dataIndex: 'roleName',
  },
  {
    title: '操作人',
    dataIndex: 'userFullName',
  },
  {
    title: '操作人账户',
    dataIndex: 'userName',
  },
  {
    title: '时间',
    dataIndex: 'dateOfUpdate',
    render: (text, record, index) => {
      return moment(text).format('YYYY-MM-DD')
    }
  },
]
export {
  columnsRecord
}
