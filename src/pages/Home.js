import React, { Component } from 'react';


import {
  Redirect
} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewValue: '',
      redirectToPreview: false
    };

    this.handlePreviewChange = this.handlePreviewChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      redirectToPreview: true
    });
  }

  handlePreviewChange(event) {
    this.setState({
      previewValue: event.target.value
    });
  }

  render() {
    return (
      <div className="Home container">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="input" className="preview-input form-control" placeholder="OpenAPI File" onChange={this.handlePreviewChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Preview</button>
        </form>
        { 
          this.state.redirectToPreview && 
          <Redirect to={"/preview?url=" + this.state.previewValue} />
        }
      </div>
    );
  }
}

export default Home;