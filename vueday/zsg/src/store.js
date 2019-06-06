import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //共享数据
        ind: 0, //第几题
        cur: null, //第几个答案
        answerList: [{
            title: "以下不属于我国年画重要产地的是?",
            id: 1,
            type: "福",
            flag: null,
            answer: [{
                answer_name: "苏州桃花坞",
                ans_id: 1,
                is_stand_answer: 0
            }, {
                answer_name: "天津杨柳青",
                ans_id: 1,
                is_stand_answer: 0
            }, {
                answer_name: "四川攀枝花",
                ans_id: 1,
                is_stand_answer: 1
            }, {
                answer_name: "山东潍坊",
                ans_id: 1,
                is_stand_answer: 0
            }]
        }, {
            title: "春节帖‘福’字有什么习俗?",
            id: 2,
            type: "禄",
            flag: null,
            answer: [{
                answer_name: "斜着贴",
                ans_id: 2,
                is_stand_answer: 0
            }, {
                answer_name: "倒着贴",
                ans_id: 2,
                is_stand_answer: 1
            }, {
                answer_name: "竖着贴",
                ans_id: 2,
                is_stand_answer: 0
            }, {
                answer_name: "反着贴",
                ans_id: 2,
                is_stand_answer: 0
            }]
        }, {
            title: "以下哪个是春节正月初二的习俗?",
            id: 3,
            type: "寿",
            flag: null,
            answer: [{
                answer_name: "逛庙会",
                ans_id: 3,
                is_stand_answer: 0
            }, {
                answer_name: "回娘家",
                ans_id: 3,
                is_stand_answer: 1
            }, {
                answer_name: "大扫除",
                ans_id: 3,
                is_stand_answer: 0
            }, {
                answer_name: "讨钱款",
                ans_id: 3,
                is_stand_answer: 0
            }]
        }, {
            title: "'小年'这一天,用来祭祀灶王爷的食物是?",
            id: 4,
            type: "喜",
            flag: null,
            answer: [{
                answer_name: "元宵",
                ans_id: 4,
                is_stand_answer: 0
            }, {
                answer_name: "麦芽糖",
                ans_id: 4,
                is_stand_answer: 1
            }, {
                answer_name: "腊八粥",
                ans_id: 4,
                is_stand_answer: 0
            }, {
                answer_name: "饺子",
                ans_id: 4,
                is_stand_answer: 0
            }]
        }],
        list: []
    },
    getters: { //修改公共数据的方法
        getLength(state, getters) {
            return state.list.length
        }
    },
    mutations: { //同步方法
        changeInd(state, obj) {
            if (state.ind < state.answerList.length - 1) {
                state.ind++
            }
            let index = state.answerList.findIndex(item => item.id == obj.ans_id);
            if (obj.is_stand_answer == 1) {
                state.answerList[index].flag = true
                state.list.push(state.answerList[index])
            } else {
                state.answerList[index].flag = false
            }
            state.cur = null
        },
        changecur(state, ind) {
            state.cur = ind
        }
    },
    actions: { //异步方法
        changeIndActions({ commit }, obj) {
            setTimeout(() => {
                commit('changeInd', obj)
            }, 1000)
        }
    }
})