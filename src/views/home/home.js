import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import HomeNav from './homeNav';
import HomeList from './homeList';
export default class Home extends Component {

    render(){

        return(
            <div className='centerMain home'>
                <div className='homeMenu'>
                    <HomeNav></HomeNav>
                </div>
                <div className='homeList'>
                    <HomeList location={this.props.location}></HomeList>



                </div>

            </div>
        )
    }
}
