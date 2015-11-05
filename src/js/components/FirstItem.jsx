import React from 'react';
import _ from 'lodash';

export default React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        return (
            <div className="first-sub-item" style={this.groupStyle()}>
                <div className="first-level-planet-group">
                    <div className="first-planet" style={{'backgroundColor':this.props.color }} onClick={this.handleClick}></div>
                    <div className="first-text" style={this.textStyle()}>{this.props.data.type}</div>
                </div>
            </div>
        );
    },
    groupStyle:function(rotate){
        return {
            transform: 'rotate('+ this.props.rotation +'deg)'
        };
    },
    textStyle: function(){
        return {transform: 'rotate(-'+ (this.props.rotation) +'deg)'};
    },
    changeState: function() {

    },
    handleClick: function(event){
        
        // onLevelSelect(level, data, color)
        this.props.onLevelSelect(this.props.level,this.props.data,this.props.color);
        console.log(this.props.level,this.props.data,this.props.color);
        this.state.selected = true;
        // $('.current').className.replace(/\bcurrent\b/,'');
        // event.target.classList.add('firstl-current');
        // event.target.parentElement.children[1].classList.add('firstl-current')
    }
});
