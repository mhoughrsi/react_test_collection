import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBasic } from "./actions/index";

class ReduxTest extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchBasic();
    }

    render() {
        console.log(this.props);
        return(
            <div>Test redux component.</div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchBasic }, dispatch);
  }

export default connect(null, mapDispatchToProps)(ReduxTest);