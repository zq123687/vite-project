import { resolve } from 'path'

function pathResolve (dir: string) {
  return resolve(__dirname, '.', dir)
}

module.exports = {
  port: 3000,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {
    include: []
  },
  // 必须以斜线开始和结束
  alias: {
    '/@/': pathResolve('src'),
  },
  // 代理
  proxy: {

  }  
}