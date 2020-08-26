import {Req} from '../Req';

export function GetInfoApi({industryTypeCode,assetNo}){
    return Req.post(`/industry/details/${industryTypeCode}/${assetNo}`)
}
