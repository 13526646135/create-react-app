import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import HomeNav from './homeNav';
import {upData} from '../../redux/actions';
class Home extends Component {
    componentDidMount(){
        let id=this.props.location.pathname.split('/')[2];
        this.props.upData(id);
        console.log("-----------------------");
    }
    shouldComponentUpdate(nextProps){
        let oldId=this.props.location.pathname.split('/')[2];
        let id=nextProps.location.pathname.split('/')[2];
        if (oldId!==id){
            this.props.upData(id);
            return false;
        }
        return true;
    }
    render(){
        console.log(this.props.data);
        return(
            <div className='centerMain home'>
                <div className='homeMenu'>
                    <HomeNav></HomeNav>
                </div>
                <div className='homeList'>
                    <ul>
                        {
                            this.props.data.map((item,index)=>(
                                <li key={index}><Link to='/detail/001'>{item.title}</Link></li>
                            ))
                        }
                    </ul>


                </div>

            </div>
        )
    }
}
export default connect(
    state=>({data:state.getData}),
    {upData}
)(Home)