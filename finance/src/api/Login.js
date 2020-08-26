import {Req} from './Req';

export function GoLogin(values){
    return Req.post('/api/signin',{...values})
}
