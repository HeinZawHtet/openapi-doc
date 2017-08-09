import React, { Component } from 'react';

import ReferenceItem from './ReferenceItem.js'; 

var References = ( props ) => {
  var { reference, host, basePath, definitions, path } = props; 
  var referenceRow = [];
  for (var ref in reference) {
    if (reference.hasOwnProperty(ref)) {
      referenceRow.push(
        <ReferenceItem path={path} definitions={definitions} method={ref} host={host} basePath={basePath} reference={reference[ref]} />
      );
    }
  }

  return (
    <div>{referenceRow}</div>
  );
}

export default References;