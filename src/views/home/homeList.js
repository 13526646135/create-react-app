import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {upData} from "../../redux/actions";
class HomeList extends Component {
    componentDidMount(){
        let id=this.props.location.pathname.split('/')[2];
        this.props.upData(id);

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
        console.log('render()-----homelist')
        console.log(this.props.data);
        return(
            <ul>
                {

                        this.props.data.map((item,index)=>(
                        <li key={index}><Link to='/detail/001'>{item.title}</Link></li>
                    ))

                }
            </ul>
        )
    }
}
export default connect(
    state=>({data:state.getData}),
    {upData}
)(HomeList)