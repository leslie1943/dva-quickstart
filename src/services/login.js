// import request from '../utils/request';

export function query(payload){
    console.info('[......In service......]');
    console.info(payload);
    // return request('/api/todos')
    return {
        result:{
            user: 'suzhen',
            pwd: 'suzhen',
        }
    }
}