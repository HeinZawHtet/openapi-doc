import React, { Component } from 'react';

var CodeExample = (props) => {
  return (
    <pre className="ref-code"><code>curl --request {props.method.toUpperCase()} \
--url {props.url}{ props.method === 'post' && 
      '?' + props.params.map(function(param, value) {
        return param.name + '=' + param.name
      })
    }
</code></pre>
  );
}
export default CodeExample;