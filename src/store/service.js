import axios from 'axios'


/**
 * 执行脚本
 */

export const execScript = code => {
    console.log(code)
    return axios.get('/src/api/mock.json')
}

export const getMemus = () => {
    return axios.get('/src/api/menu.json')
}