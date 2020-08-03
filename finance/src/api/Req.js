import axios from 'axios';
import { message } from 'antd';

const defaultHeader = {
  'Content-Type': 'application/json',
};

function request({baseURL = '', timeout = 600000, headers = defaultHeader, isInterceptors = tru}){
  const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
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
    const { httpCode, message, data } = response;
    // 用户登录超时统一处理
				if (httpCode == 'E_300') {
					window.location.href = '/';
					// sessionStorage.clear();
					return;
				}
				if (httpCode != 200) {
					// 业务错误弹框
					// Qmessage.error(resultMessage);
					return Promise.reject(result);
				}
				return { result, httpCode, fileDomain };
  }, function (error) {
    // 对响应错误做点什么

		return Promise.reject({ message: '服务异常' });
  });
  return instance;
}
const Req =  new request({ baseURL: '/ytApi' });
export default Req;
