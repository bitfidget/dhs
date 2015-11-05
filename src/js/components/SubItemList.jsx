import React from 'react/addons';
import _ from 'lodash';
export default React.createClass({
    getInitialState() {
        return {};
    },
    render() {

        var subItemNodes = [];
        if(this.props.data[this.props.level-2]){
            var subItemNodes = this.props.data[this.props.level-2].subItems.map(function(item, index){
                return (<div className="sub-item-group"  key={index + this.props.data[this.props.level-2].type} style={this.getSubItemStyle()}>
                            <div className="sub-item-rotation" onClick={this.selectNextLevel.bind(this,index)} style={{transform:"rotate("+ (index+1)*12 +"deg)"}}>
                                <div className="sub-item-planet" style={{backgroundColor:this.props.color}}></div>
                                <div className="sub-item-text" style={{transform:"rotate("+ (index+1)*-12 +"deg)"}}>
                                    <p className="item-text" >{item.type}</p>
                                </div>
                            </div>
                        </div>);
        }.bind(this));

    }


    return (
        <div className={this.getClassName()} style={this.getRootStyle()}>
            <React.addons.CSSTransitionGroup transitionName="sub-item-trans" transitionEnterTimeout={1200} transitionLeaveTimeout={800} component="div">
                {subItemNodes}
            </React.addons.CSSTransitionGroup>
        </div>
    );
},
getClassName: function(){
    if(this.props.data[this.props.level-2]){
        return 'sub-item-list show-item';
    }else{
        return 'sub-item-list ';
    }
},
selectNextLevel: function(index){
    this.props.onLevelSelect(this.props.level-1,this.props.data[this.props.level-2].subItems[index]);
},
getRootStyle: function(){
    return {
        width: this.props.distance*2 +'px',
        height: this.props.distance*2 +'px',
        left: this.props.distance*-1 +'px',
        top: this.props.distance*-1 +'px'
    };
},
getSubItemStyle: function(){
    return {
        width: this.props.distance +'px',
        left: this.props.distance +'px',
        top: this.props.distance +'px'
    };
}
});
