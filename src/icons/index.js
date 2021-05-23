import Vue from "vue";
import SvgIcon from './SvgIcon.vue'
// 第二个参数可以抽离出来,一步一步按需求抽离出我们需要的东西
Vue.component('svg-icon',SvgIcon)


// require.context(‘./svg’, false, /\.svg$/) 参数说明：
// 第一个：目录
// 第二个：是否遍历子级目录
// 第三个：定义遍历文件规则
const req = require.context('./svg', false, /\.svg$/); // 获取当前svg目录所有为.svg结尾的文件
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext);  // 解析获取的.svg文件的文件名称，并返回
};
requireAll(req);

