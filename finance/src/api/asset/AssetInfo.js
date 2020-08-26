import {Req} from '../Req';

export function GetInfoApi({industry,assetNo}){
    return Req.post(`/industry/details/${industry}/${assetNo}`)
}
