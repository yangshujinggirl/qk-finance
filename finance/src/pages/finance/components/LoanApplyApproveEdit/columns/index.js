const columnsPlan = [
  {
    title: '计划还款日',
    dataIndex: 'name',
    key: 'name',
    render: (text, record, index) => {
      return moment(text).format('YYYY-MM-DD')
    }
  },
  {
    title: '期次',
    dataIndex: 'payPeriodNo',
  },
  {
    title: '还款本金',
    dataIndex: 'payPrincipalAmount',
  },
  {
    title: '还款利息',
    dataIndex: 'payInterest',
  },
  {
    title: '还款总金',
    dataIndex: 'payTotalAmount',
  },
]
export {
  columnsPlan
}
