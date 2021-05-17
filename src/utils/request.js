// 拦截器
import axios from 'axios';
import { Message } from 'element-ui';
//创建axios,赋给变量service
// 手把手撸码前端API，地址 http://www.web-jshtml.cn/productapi
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
const service = axios.create({
        baseURL: BASEURL,
        timeout: 1000,//超时
        // headers: {'X-Custom-Header': 'foobar'}
    });


// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });



// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    if(data.resCode !== 0){
      Message.error(data.message);
      return Promise.reject(data);
    }else{
      return response;
    }
    
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  // 上面的请求也可以这样做
// service.request(
//     {
//         method: 'post',
//         url: '/user/12345',
//         data: {
//           firstName: 'Fred',
//           lastName: 'Flintstone'
//         }
//       }
// )

export default service;


  /**
 * 使用export default时，但不能同时存在多个default。
 * 文件 import 不需要花括号，
 */
