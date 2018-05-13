import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd-mobile';

import Header from './public/header';
import Router from '../router/router';
export default class App extends Component {

    render(){
        return(
            <div className='main'>
                <Button>ANTD-MOBILE</Button>
                <Header></Header>
                <Router></Router>
            </div>
        )
    }
}