import Mock from 'mockjs';
import data from './data.json';
let datas=Mock.mock('/api/getDatas',{
    'list':data
});

export default datas;