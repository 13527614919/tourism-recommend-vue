import axios from 'axios'
import qs from 'qs'
// import ObjectTools from './objectTools' // 文件上传
import baseConfig from './baseConfig'
export default {
  /**
   * 网络请求
   * @param {any} vm this
   * @param {any} method 请求方式 get,post,delete,put,patch
   * @param {any} url 接口地址
   * @param {{}} [params={}] 接口参数
   * @param {any} config 其他配置
   * @param {any} target 目标前置，请不要更改此地方，需要开发更改代理目标时，请更改上面baseConfig
   * @param {any} bizConfig 业务配置 DoNotHandleErr【业务抛错，会回调】  DoNotHandleTimeOut【网络请求超时，会回调】
   * @returns Promise
   */
  request (vm, method, url, params = {}, target = baseConfig.BASE_PROJECT.PRO_PROJECT /** 请不要更改此处，要更改内容，更改baseConfig即可 */, name = 'nu') { // 默认为服务器的代理接口 target = '/tourism-recommend-vue'
    let data
    let requestDemo = true // 设置请求本地报文
    if (name === 'nu') {
      const newParams = {}
      for (let key in params) {
        newParams[key] = params[key]
      }
      data = qs.stringify(newParams)
    } else {
      data = params
    }
    // const date = new Date()
    // const channelDate = date.getFullYear() + (date.getMonth() + 1) + date.getDate()
    // const channelTime = date.getHours() + date.getMinutes() + date.getSeconds()
    // const transId = `AT${Date.now()}`
    const type = 'K'
    let headers = {
      // Authorization: storageTools.get('Authorization'),
      type: type,
      encry: '0',
      channel: 'AT',
      // transId: transId,
      // channelFlow: transId,
      transCode: url.replace(/(.*\/)*([^.]+).*/ig, '$2'),
      'Accept': 'application/json',
      'Content-Type': name === 'nu' ? 'application/x-www-form-urlencoded;charset=utf-8' : 'mutipart/form-data;charset=utf-8'
    }
    let axiosConfig = {
      method: method,
      // 开发环境
      url: target + url,
      // 生产环境
      // url: '/open-inmanage' + url,
      data: data,
      headers
    }
    return new Promise(function (resolve, reject) {
      if (requestDemo) {
        // let demoUrl = '/mock' + url + '.json' // .json指的是虚拟报文的后缀  例如：BAS02005.do.json;
        // alert(demoUrl)
        if (url.indexOf('?') === -1) {
          url += '?versionNo=0.1'
        } else {
          url += '&versionNo=0.1'
        }
        let demoUrl = '/api' + url
        axiosConfig.url = demoUrl
        // 如果虚拟报文的后缀为.text则将.json改成.text   let demoUrl = "/mock/" + url + ".text";
        axios.get(demoUrl).then(function (response) {
            resolve(response)
        }).catch(function (error) {
          reject(error)
        })
      } else {
        axios.request(axiosConfig).then(function (response) {
            resolve(response)
        }).catch(function (error) {
          reject(error)
        })
      }
    })
  }

  // /**
  //  * 文件上传
  //  * @param {any} vm this
  //  * @param {any} url 接口地址
  //  * @param {any} params formData
  //  * @param {any} config 其他配置
  //  * @param {boolean} bizConfig 业务配置 DoNotHandleErr【业务抛错，会回调】  DoNotHandleTimeOut【网络请求超时，会回调】
  //  * @returns Promise
  //  */
  // upload (vm, url, params, config, bizConfig = {
  //   DoNotHandleErr: false,
  //   DoNotHandleTimeOut: false
  // }) {
  //   let axiosConfig = ObjectTools.copy(config)
  //   if (axiosConfig.headers === null || axiosConfig.headers === undefined) {
  //     axiosConfig.headers = {}
  //   }
  //   let date = new Date()
  //   axiosConfig.headers.channelDate = date.getFullYear() + (date.getMonth() + 1) + date.getDate()
  //   axiosConfig.headers.channelTime = date.getHours() + date.getMinutes() + date.getSeconds()
  //   axiosConfig.headers.encry = '0'
  //   axiosConfig.headers.channel = 'AT'
  //   axiosConfig.headers.transId = `AT${Date.now()}`
  //   axiosConfig.headers.channelFlow = `AT${Date.now()}`
  //   axiosConfig.headers.type = 'K'
  //   axiosConfig.headers.transCode = url.replace(/(.*\/)*([^.]+).*/ig, '$2')
  //   axiosConfig.headers.iCIFID = Cookies.get('iCIFID') || ''
  //   axiosConfig.headers.eCIFID = Cookies.get('eCIFID') || '',
  //     axiosConfig.headers['Content-Type'] = 'application/json;charset=utf-8'
  //
  //   return new Promise(function (resolve, reject) {
  //     axios.post('/open-inmanage' + url, params, axiosConfig).then(function (response) {
  //       resolve(response)
  //     }).catch(function (error) {
  //       reject(error)
  //     })
  //   })
  // },
  // /**
  //  *
  //  * @param {String} filePath 服务器上文件路径
  //  */
  // downImage (filePath) {
  //   return `${baseConfig.BASE_PROJECT.PRO_PROJECT}/downloadImage.do?type=K&iCIFID=${Cookies.get('iCIFID') || ''}&imagePath=${window.btoa(filePath)}`
  // }
}
