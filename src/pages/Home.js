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
            <input type="input" className="preview-input form-control" placeholder="Paste OpenAPI File URL" onChange={this.handlePreviewChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Preview</button>
        </form>
        <div style={{textAlign: "center", marginTop: '30px'}}>
          <img src={require('../logo.svg')} width="80px" /> <br /> This is just a demo like https://swagger.readme.io/. but it's build with ReactJs. 
          It may contain some bug. But I think this is enought as a demo for a job application.
          I hope you guys love it.
        </div>
        { 
          this.state.redirectToPreview && 
          <Redirect to={"/preview?url=" + this.state.previewValue} />
        }
      </div>
    );
  }
}

export default Home;