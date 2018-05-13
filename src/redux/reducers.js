import {combineReducers} from 'redux';

import {UPSTATE} from './action-types';


const initState=[]

function getData(state=initState,aciton) {
    switch (aciton.type){
        case UPSTATE:
            return aciton.data;
        default:
            return state;
    }
}


export default combineReducers({
    getData
})