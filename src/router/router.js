import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import Home from "../views/home/home";
import Book from "../views/book/book";
import About from "../views/about/about";
import Detail from '../views/book/detail';
export default class Router extends Component {

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/home/:id' component={Home}></Route>
                    <Route path='/book' component={Book}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                    <Redirect to='/home/all'/>
                </Switch>
            </div>
        )
    }
}