import React from 'react';
import _ from 'lodash';

export default React.createClass({
	getInitialState() {
    return {};
  },
  render() {
    return (
      <div className="open-window" style={{display: this.props.show}}>
      	<p className="close-window" onClick={this.props.onClick}>CLOSE [X] {this.state.url} it should be here</p>
      	<iframe frameBorder="0" scrolling="no" width="1014" height="728" src={this.state.url} name="imgbox" id="imgbox">
				   <p>iframes are not supported by your browser.</p>
				</iframe>
      </div>
    );
  },
});