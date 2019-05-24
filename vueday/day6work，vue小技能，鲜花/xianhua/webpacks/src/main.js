import { reduceArr } from './js/reduce.js';

let arr = [1, 4, 6, 7, 2, 3, 8];
console.log(reduceArr(arr));

import './font/iconfont.css';
import './scss/index.scss';
import './css/style.css';
import './font/demo.css';

import axios from 'axios';

axios.get('/getData').then((data) => {
    console.log(data);
});

import Vue from 'vue';

let vm = new Vue({
    el: "#app",
    data: {

    }
})