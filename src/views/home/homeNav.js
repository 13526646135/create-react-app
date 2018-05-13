import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class HomeNav extends Component {

    render(){
        return(
            <div className=''>
                <ul>
                    <li><Link to='/home/all'>全部</Link></li>
                    <li><Link to='/home/good'>精华</Link></li>
                    <li><Link to='/home/ask'>问答</Link></li>
                    <li><Link to='/home/share'>分享</Link></li>
                    <li><Link to='/home/job'>招聘</Link></li>
                    <li><Link to='/home/dev'>测试</Link></li>
                </ul>

            </div>
        )
    }
}