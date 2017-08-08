import React, { Component } from 'react';

var Nav = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Your Logo</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://swagger.readme.io/docs" target="_blank">Documentation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://swagger.readme.io/discuss" target="_blank">Support</a>
          </li>
        </ul>
      </div>
    </nav> 
  )
}

export default Nav;