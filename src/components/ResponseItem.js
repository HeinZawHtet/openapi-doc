import React, { Component } from 'react';

var ResponseItem = ( props ) => {
  return (
    <option value={props.response}>{props.response}</option>
  );
}

export default ResponseItem;