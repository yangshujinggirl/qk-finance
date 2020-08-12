import Req from '../Req';

export function GetListApi(values){
    return Req.post('/assetblockchain2',{...values})
}
