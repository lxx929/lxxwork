import Vue from 'vue';
import VueX from 'vuex';
import axios from 'axios';
Vue.use(VueX);
export default new VueX.Store({
    state: {
        menuList: [], //保存菜单
        rightList: [], //保存右侧数据
        menuId: 0,
        shopcar: [], //存放购物车的数据
        // totalCount: 0,
        // totalPrice: 0,
        // carShopList:[]
    },
    getters: { //返回变量
        rightObj(state) {
            if (state.rightList[state.menuId]) {
                return state.rightList[state.menuId].content
            }
        },
        /**
         * 添加到购物车的数据
         * 遍历rightList，取出count>0
         */
        carShopList(state) {
            state.shopcar = []
            state.rightList.forEach((item, index) => {
                let arr = item.content.filter(val => val.count > 0)

                if (arr.length) {
                    state.shopcar.push(...arr)
                }
            })
            return state.shopcar
        },
        totalPrice(state, { carShopList }) {
            return carShopList.reduce((total, current) => {
                return total + current.price * current.count
            }, 0)
        },
        totalCount(state, { carShopList }) {
            return carShopList.reduce((total, current) => {
                return total + current.count
            }, 0)
        }

    },
    mutations: {
        changeMenuId(state, id) {
            state.menuId = id
        },
        /**
         * @param {*} state 
         * 清空购物车
         * 便利数组将count设为0
         */
        emptyCar(state) {
            state.rightList.forEach((item, index) => {
                item.content.forEach((item) => {
                    item.count = 0
                })
            })
        }
    },
    actions: {
        //获取左侧菜单数据
        getMenuList({ state }) {
            axios.get('/menu').then(({ data }) => {
                state.menuList = data
            })
        },
        //获取左侧菜单数据
        getRightList({ state }) {
            axios.get('/rightList').then(({ data }) => {
                state.rightList = data
            })
        }
    }
})