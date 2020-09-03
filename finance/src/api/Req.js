import axios from 'axios';
const qs = require('qs');
import {YtMessage} from 'common';
import {message} from 'antd';
import {Sessions} from 'utils';

let defaultHeader = {
    'Content-Type': 'application/json',
};

function request({baseURL = '', timeout = 600000, headers = defaultHeader, isInterceptors = true}) {
    let Authorization = Sessions.get('token') ? `${Sessions.get('tokenType')} ${Sessions.get('token')}` : null;
    let count = 0;
    console.log('Authorization', Authorization)
    headers = {
        ...headers,
        Authorization
    }
    const instance = axios.create({
        baseURL,
        timeout, headers,
        withCredentials: true,
    });
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        count+=1;
        Sessions.set('count',count)
        // 在发送请求之前做些什么
        let { reqHeader, headers, data} =config;
        if(reqHeader == "form") {
          data = qs.stringify(data);
          headers = {
            ...headers,
            "Content-Type":"application/x-www-form-urlencoded"
          }
        }
        config.headers = headers;
        config.data = data;
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject({
            message: error.message || '请求参数异常',
        });
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        let {code, message, data} = response.data;
        data = data?data:{};
        // 用户登录超时统一处理
        if (code == 'E_300') {
            window.location.href = '/';
            return;
        }
        if (code != "0") {
            // 业务错误弹框
            YtMessage.error(response.data.message);
            return Promise.reject(data);
        }
        count-=1;
        Sessions.set('count',count)
        return {data, code, count };
    }, function (error) {
        YtMessage.error('服务异常');
        // 对响应错误做点什么
        return Promise.reject({message: '服务异常'});
    });
    return instance;
}

const Req = new request({baseURL: '/admin/ytFinance'});

const BlockReq = new request({baseURL: '/admin/blockFinance'});
const ChainReq = new request({baseURL: '/admin/ytChain'});
export { Req,BlockReq,ChainReq }
