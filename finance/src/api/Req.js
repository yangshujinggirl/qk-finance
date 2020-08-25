import axios from 'axios';
import { YtMessage } from 'common';
import { message } from 'antd';
import { Sessions } from 'utils';


let defaultHeader = {
  'Content-Type': 'application/json',
};

function request({baseURL = '', timeout = 600000, headers = defaultHeader, isInterceptors = true}){
  let Authorization = Sessions.get('token')?`${Sessions.get('tokenType')} ${Sessions.get('token')}`:null;
  console.log('Authorization',Authorization)
  headers = {
    ...headers,
    Authorization
  }
  const instance = axios.create({
    baseURL,
    timeout,headers,
    withCredentials: true,
  });
  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
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
    const { code, message, data } = response.data;
    // 用户登录超时统一处理
				if (code == 'E_300') {
					window.location.href = '/';
					return;
				}
				if (code != "0") {
					// 业务错误弹框
					// YtMessage.error(resultMessage);
					return Promise.reject(data);
				}
				return { data, code };
  }, function (error) {
    YtMessage.error('服务异常');
    // 对响应错误做点什么
		return Promise.reject({ message: '服务异常' });
  });
  return instance;
}
const Req =  new request({ baseURL: '/ytFinance' });
export default Req;
