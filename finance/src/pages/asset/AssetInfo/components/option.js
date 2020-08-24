//融资状态
const financeStatusMap = {
  1:"未占用",
  2:"预占用",
  3:"已占用",
  4:"已请款"
}
// CANCEL(-1,"已取消"),DRAFT(0,"待2级确认订单"),CONFIRM_1(1,"待1级发货"),SHIPPED_1(1,"待2级确认收货"),
// CONFIRM_0(2,"待生产厂商发货"),SHIPPED_0(3,"待1级确认收货"),RECEIVED_1(4,"1级已确认收货"),
// SHIPPED_2(5,"待2级确认收货"),RECEIVED_2(6,"完成");
// const orderStatusMap = {
//   '-1':"已取消",
//   '0':"待2级确认订单",
//   '1':"待1级发货",
//   '2':"待2级确认收货",
//   '3':"待生产厂商发货",
//   ''
// }

export {
  financeStatusMap
}
