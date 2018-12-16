import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Hello from './Hello';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }
  componentDidMount() {
    axios.get('/data.json').then(res => {
      console.log(res);
      this.props.simpleAjax(JSON.stringify(res.data));
    });
  }

  render() {
    return (
      <div className="App">
        <Hello />
        <div>{this.props.data}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('props state', state);
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    simpleAjax: item => {
      dispatch({ type: 'AJAX', payload: item, x: 'here' });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
