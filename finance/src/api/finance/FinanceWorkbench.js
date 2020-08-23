import Req from '../Req';

export function GetListApi(values){
    return Req.post('/assetblockchain2',{...values})
}
// 融资企业
export function GetManagementListApi(values) {
    return Req.post(`/assets/management/searchList`, values)
}