import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <div className='navLink'>
                <div className="centerMain">
                    <Link to='/home'>首页</Link>
                    <Link to='/book'>教程</Link>
                    <Link to='/about'>关于</Link>
                </div>
            </div>
        )
    }
}