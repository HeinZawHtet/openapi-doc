import React, { Component } from 'react';
import ResponseItem from './ResponseItem.js';

export class Response extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      responseStatus: 200
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderResponseResult = this.renderResponseResult.bind(this);
  }
  handleChange(event) {
    this.setState({
      responseStatus: event.target.value
    });
  }
  renderResponseResult (key) {
    var properties = this.props.definitions[key].properties;
    var result = [];
    for (var name in properties) {
      if (properties.hasOwnProperty(name)) {
        result.push(
          <tr>
            <td scope="row"><strong>{name}</strong></td>
            <td>{(properties[name].hasOwnProperty('$ref')) ? 'object' : properties[name].type }</td>
          </tr>
        );
      }
    }
    return (
      <div className="table-responsive">
        <table className="table">
          <tbody>
            {result}
          </tbody>
        </table>
      </div>
    )
  }
  render() {
    var { responses, definitions } = this.props;
    var responseResult = ( this.props.responses[this.state.responseStatus] && 
      this.props.responses[this.state.responseStatus].schema && 
      this.props.responses[this.state.responseStatus].schema.$ref ) ? this.renderResponseResult(this.props.responses[this.state.responseStatus].schema.$ref.split('/')[2]) : null;

    var responsesRow = [];
    for (var response in responses) {
      if (responses.hasOwnProperty(response)) {
        responsesRow.push(
          <ResponseItem response={response} />
        );
      }
    }

    return (
      <div className="Response">
        <select className="form-control" onChange={this.handleChange}>
          {responsesRow}
        </select>
        <div className="response-result">
          <p>{this.props.responses[this.state.responseStatus] && this.props.responses[this.state.responseStatus].description}</p>
          {responseResult}
        </div>
      </div>
    );
  }
}

export default Response