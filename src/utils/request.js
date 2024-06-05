// baseUrl在正式项目中记得要配置在.env环境变量里
const baseUrl = 'http://localhost:3000'

// 发送请求方法封装
const request = (options) => {
  const { url, method, data } = options
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${baseUrl}/${url}`, //仅为示例，并非真实接口地址。
      method,
      data,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export default request
