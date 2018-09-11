import request from '../utils/request';
import delay from '../utils/request';


export function query() {
  return request('/api/users');
}
export function login(payload){
  delay(payload)
}