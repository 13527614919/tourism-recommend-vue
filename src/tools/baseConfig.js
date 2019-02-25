// dev 项目配置
const DEV_PROJECT = {
    PRO_PROJECT: '/tourism-recommend-vue'
}
// 生产环境配置
const PRO_PROJECT = {
    PRO_PROJECT: '/tourism-recommend-vue'
}
export default{
    BASE_PROJECT: process.env.NODE_ENV === 'development' ? DEV_PROJECT : PRO_PROJECT
}
