import React, { Component } from 'react';

import { getParameterByName } from './../utils.js';

import Nav from './../components/Nav.js';
import References from './../components/References.js';

class Preview extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      jsonData : null
    };
  }

  componentDidMount () {
    this.fetchJson();
  }

  fetchJson () {
    var that = this;
    fetch(getParameterByName('url', this.props.location.search))
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
          return;  
        }

        // Examine the text in the response  
        response.json().then(function(data) {  
          that.setState({
            jsonData : data
          });
        });  
      }  
    )  
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    });
  }

  render() {
    if (!this.state.jsonData) {
      return (
        <div className="loading"></div>
      );
    }

    var rows = [];

    for (var path in this.state.jsonData.paths) {
      if (this.state.jsonData.paths.hasOwnProperty(path)) {
        rows.push(
          <li className="nav-item">
            <a className="nav-link" href={ '#' + path}>{path}</a>
          </li>
        );
      }
    }

    var references = [];
    for (var path in this.state.jsonData.paths) {
      if (this.state.jsonData.paths.hasOwnProperty(path)) {
        references.push(
          <References path={path} host={this.state.jsonData.host} basePath={this.state.jsonData.basePath} reference={this.state.jsonData.paths[path]} definitions={this.state.jsonData.definitions}/>
        );
      }
    }

    return (
      <div className="Preview">
        <Nav />
        <div className="alert alert-danger">
          This is just a demo like https://swagger.readme.io/. but it's build with ReactJs. 
          It may contain some bug. But I think this is enought as a demo for a job application.
          I hope you guys love it.
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="Sidebar col-md-2">
              <ul className="nav flex-column">
                {rows}
              </ul>
            </div>
            <div className="Content col-md-10">
              {references}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;