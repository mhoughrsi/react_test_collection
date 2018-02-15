import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBasic } from "../actions/index";
import '../style/redux_test_comp.css';

class ReduxTest extends Component {

    constructor(props) {
        super(props);
        this.mapdata = this.mapdata.bind(this);
    }

    componentWillMount() {
        this.props.fetchBasic();
    }

    mapdata(data) {
        console.log(data);
        return data.map(function(item) {
            return (<div id={item.id} key={item.id}>permit number : {item.permit_}</div>)
        }); 
    }

    render() {
        console.log(this.props);
        if(!this.props.basic) return(<div>Loading...</div>);
        return(
            <div className="test_container">{this.mapdata(this.props.basic)}</div>
        );
    }
}

function mapStateToProps(state) {
    return { basic: state.basicReducer[0] };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBasic: fetchBasic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);