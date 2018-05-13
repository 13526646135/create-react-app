import {UPSTATE} from './action-types';
import axios from 'axios';

//同步接收数据
const updata=(data)=>({
    type:UPSTATE,
    data:data
})

//异步从后台获取数据
export const upData=(id)=>{
    return dispatch=>{
        //异步ajax
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${id}`)
            .then((res)=>{

                dispatch(updata(res.data.data));
            })
            .catch((error)=>{

            })
        //分发一份同步的action


    }

}