import request from '@/utils/request'

export const getList = () => {
  return request({ url: 'list', method: 'get' })
}

export const updateData = (data) => {
  return request({ url: 'update', method: 'post', data })
}
