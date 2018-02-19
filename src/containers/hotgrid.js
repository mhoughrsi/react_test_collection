import React, { Component } from 'react';
import HotTable from 'react-handsontable';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUsers } from "../actions/index";

import './hotgrid.css';

class HotGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.getUsers();
    }

    render() {
        console.log(this.state, this.props);
        
        return(
            <div className="container-center">
                <HotTable root="hot" 
                        data={[
                                {test:'test', something:'something'}, 
                                {test:'test2',something:'something'}, 
                                {test:'test3',something:'something'}, 
                                {test:'test4',something:'something'}
                        ]} 
                        colHeaders={true} 
                        rowHeaders={true} 
                        width={600} 
                        height={300} 
                        stretchH="all" />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { users: state.userReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers: getUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotGrid);