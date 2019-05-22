import Mock from 'mockjs';
export default Mock.mock({
    'list|10-20': [{
        'title': '@ctitle(2,6)',
        'content': '@ctitle(10,50)',
        'time': '@date("yyyy-mm-dd")',
        'type|1-4': 1,
        'id|+1': 0,
        'bool': '@boolean'
    }]
})