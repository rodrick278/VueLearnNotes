import axios from "axios";

// 这里没export defalut是因为可能会有多个方法
/**
 * 
 * @param {Object} config 
 * @param {Function} success 成功的回调函数
 * @param {Function} failure 失败的回调函数
 */
// export function request(config,success,failure) {
//   // 创建实例
//   const instance = axios.create({
//     baseURL: 'https://httpbin.org',
//     timeout: 5000
//   })

//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 创建实例
//     const instance = axios.create({
//       baseURL: 'https://httpbin.org',
//       timeout: 5000
//     })

//     // 发送请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

export function request(config) {
  // 由于axios.create返回的本身是AxiosInstance对象，而AxiosInstance(config)方法返回的就是 AxiosPromise对象，所以直接返回Promise对象就好
  const instance = axios.create({
    baseURL: 'https://httpbin.org',
    timeout: 3000
  })

  // axios 拦截器  
  // 注意 request拦截器是发送请求之前的拦截
  // 处理完之后需要把结果返回传出去，不然没有返回值请求不能正常发送去
  instance.interceptors.request.use(config => {
    // 可以做一些信息的补充，比如请求头不符合服务器要求，进行补充
    // 可以发网络请求时，界面中加一个请求中动画
    // 比如登陆，查看是否有token，没有可以返回回去要求用户登录
    console.log('request success:', config);
    return config
  }, err => {
    console.log('request error:', err);
  })

  instance.interceptors.response.use(result => {
    console.log('response success:', result);
    return result.data
  }, err => {
    console.log('response error:', err);
    return err
  })

  // 发送请求
  return instance(config)

}
