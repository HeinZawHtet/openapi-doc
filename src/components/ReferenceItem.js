import React, { Component } from 'react';

import Response from './Response.js';
import CodeExample from './CodeExample.js';

class ReferenceItem extends Component {
  render() {
    var { reference, host, basePath, method, definitions } = this.props;
  // <div>{reference.responses[response]}</div>
    return (
      <div className="ReferenceItem">
        <h2 className="ref-summary">{reference.summary}</h2>
        {
          reference.description &&
          <p className="ref-description">{reference.description}</p>
        }
        <h6 className="ref-url"><span className="ref-method-badge badge badge-default">{method}</span> { 'http://' + host + basePath + '/' + method}</h6>
        <CodeExample params={reference.parameters} method={method} url={ 'http://' + host + basePath + '/' + method} />
        <div className="row">
          <div className="ref-params col-md-8">
            <h6>Params</h6>
            <div className="table-responsive">
              <table className="ref-params-table table table-striped">
                <tbody>
                  { reference.parameters.map(function(param, index) {
                    return (
                      <tr key={index}>
                        <td width="20%">{param.name}</td>
                        <td width="5%">{(param.required) ? <span className="badge badge-danger">Required</span> : <span className="badge badge-default">Optional</span> }</td>
                        <td width="75%">{param.description}</td>
                      </tr>
                    )
                  }) }
                </tbody>
              </table>
            </div>
          </div>
          <div className="ref-response col-md-4">
            <h6>Response</h6>
            <Response definitions={definitions} responses={reference.responses} />
          </div>
        </div>
      </div>
    )
  }
}

export default ReferenceItem;