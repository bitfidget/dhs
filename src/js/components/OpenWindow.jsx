import React from 'react';
import _ from 'lodash';

export default React.createClass({
	getInitialState() {
    return {};
  },
  render() {
    return (
      <div className="open-window" style={{display: this.props.show}}>
      	<p className="close-window" onClick={this.props.onClick}>CLOSE [X] </p>
      	<iframe frameborder="0" scrolling="no" width="1014" height="728" src="https://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=Metric_Dashboard_151105&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true" name="imgbox" id="imgbox">
				   <p>iframes are not supported by your browser.</p>
				</iframe>
      </div>
    );
  },
});