import {
  API_ROOT,
} from './config.js'

var apiHYZ = {
  Topics:'/topics',
  Topic:'/topic'
}

export const Topics = API_ROOT.concat(apiHYZ.Topics)  //主题首页
export const Topic = API_ROOT.concat(apiHYZ.Topic)  //主题详情




