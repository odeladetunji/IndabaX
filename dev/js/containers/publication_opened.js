import React {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { browserHistory } from 'react-router';

class OpenedPublication extends Component {
    constructor(props){
       super(props);
    }

    render(){
      return(
        <div>
           
        </div>
      )
    }
}

function mapStateToProps(state){
    return {

    }
}

function matchDispatchToState(dispatch){
    bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(OpenedPublication)
