import axios from 'axios'


/**
 * 执行脚本
 */

export const execScript = code => axios.get('/src/api/mock.json');
