import React from 'react';
import FirstItem from './FirstItem.jsx';
import SubItemList from './SubItemList.jsx';
import OpenWindow from './OpenWindow.jsx';

export default React.createClass({
    getInitialState() {
        return {
            selection:[],
            color: "#FFFF00",
            data: [
                {
                    type: "Macro-Economic Impact",
                    subItems:[
                        {
                            type: "Government",
                            subItems:[
                                {
                                    type:"Accuracy",
                                    subItems:[
                                        {
                                            type:"AAAAAA",
                                            subItems:[
                                                {
                                                    type:"AAAAAA",
                                                    finalDestination:'URLGoodness'
                                                },
                                                {
                                                    type:"BBBBBBBBB",
                                                    finalDestination:'URLGoodness'
                                                },
                                                {
                                                    type:"CCCCCC",
                                                    finalDestination:'URLGoodness'
                                                }
                                            ]
                                        },
                                        {
                                            type:"BBBBBBBBB",
                                            subItems:[]
                                        },
                                        {
                                            type:"CCCCCC",
                                            subItems:[]
                                        }
                                    ]
                                },
                                {
                                    type:"Capacity",
                                    subItems:[]
                                },
                                {
                                    type:"Experience",
                                    subItems:[]
                                }
                            ]
                        },
                        {
                            type: "Department",
                            subItems:[
                                {
                                    type:"Capacity",
                                    subItems:[]
                                },
                                {
                                    type:"Experience",
                                    subItems:[]
                                }

                            ]
                        },
                        {
                            type: "Customer",
                            subItems:[
                                {
                                    type:"Accuracy",
                                    subItems:[]
                                },
                                {
                                    type:"Efficiency",
                                    subItems:[]
                                },
                                {
                                    type:"Capacity",
                                    subItems:[]
                                }

                            ]
                        },
                        {
                            type: "Customer 2 delete",
                            subItems:[

                                {
                                    type:"Experience",
                                    subItems:[]
                                }

                            ]
                        }
                    ]
                },



                {
                    type: "Financial",
                    subItems:[
                        {
                            type: "Government",
                            subItems:[
                                {
                                    type:"Accuracy",
                                    subItems:[]
                                },
                                {
                                    type:"Experience",
                                    subItems:[]
                                }

                            ]
                        },
                        {
                            type: "Department",
                            subItems:[
                                {
                                    type:"Accuracy",
                                    subItems:[]
                                },
                                {
                                    type:"Efficiency",
                                    subItems:[]
                                }

                            ]
                        },
                        {
                            type: "Customer",
                            subItems:[
                                {
                                    type:"Accuracy",
                                    subItems:[]
                                },
                                {
                                    type:"Efficiency",
                                    subItems:[]
                                },
                                {
                                    type:"Capacity",
                                    subItems:[]
                                },
                                {
                                    type:"Experience",
                                    subItems:[]
                                }

                            ]
                        }
                    ]
                },



                {
                    type: "Non-financial",
                    subItems:[
                        {
                            type: "Customer",
                            subItems:[
                                {
                                    type:"Experience",
                                    subItems:[
                                        {
                                            type:"Increase in accuracy of customer data",
                                            subItems:[
                                                {
                                                    type:"Increased customer satisfaction from the improved accuracy of payments"
                                                },
                                                {
                                                    type:"Decrease in customer aggression"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in ease of accessing services",
                                            subItems:[
                                                {
                                                    type:"Increase in customer satisfaction through incrreased ease of service access"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in overall satisfaction with service delivery",
                                            subItems:[
                                                {
                                                    type:"Overall Customer Satisfaction with DHS staff"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in timeliness of service delivery",
                                            subItems:[
                                                {
                                                    type:"Increase in customer satisfaction due to improved timeliness of customer transactions",
                                                    finalDestination:'URLGoodness'
                                                },
                                                {
                                                    type:"Increase in customer satisfaction due to a reduction in the time taken to complete transactions for processes requiring third party documents",
                                                    finalDestination:'URLGoodness'
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in transparency of services",
                                            subItems:[
                                                {
                                                    type:"Increase in customer satisfaction due to improved transparency in customer information via the digital interface, including summaries of general information, claims progress, notifications and automated messages"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Improvements in staff productivity",
                                            subItems:[
                                                {
                                                    type:"Decrease in absenteeism, promoting improvements in worker productivity, by eliminating repetitive tasks and being able to have a greater, more positive, impact on customers"
                                                },
                                                {
                                                    type:"Increase in presenteeism, promoting improvements in worker productivity, by eliminating repetitive tasks and being able to have a greater, more positive, impact on customers"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type:"Dis-benefits",
                                    subItems:[]
                                },
                                {
                                    type:"Capacity",
                                    subItems:[]
                                },
                                {
                                    type:"Accuracy",
                                    subItems:[]
                                },
                                {
                                    type:"Efficiency",
                                    subItems:[]
                                }
                            ]
                        },
                        {
                            type: "Department",
                            subItems:[
                                {
                                    type:"Accuracy",
                                    subItems:[]
                                },
                                {
                                    type:"Efficiency",
                                    subItems:[]
                                },
                                {
                                    type:"Capacity",
                                    subItems:[]
                                },
                                {
                                    type:"Experience",
                                    subItems:[]
                                }

                            ]
                        },
                        {
                            type: "Government",
                            subItems:[
                                {
                                    type:"Accuracy",
                                    subItems:[]
                                },
                                {
                                    type:"Efficiency",
                                    subItems:[]
                                },
                                {
                                    type:"Capacity",
                                    subItems:[]
                                },
                                {
                                    type:"Experience",
                                    subItems:[]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    componentDidMount() {
    },
    render() {
        return (
            <div>
                <div className="horizon-container">
                    <div className="first-level">
                        <FirstItem rotation="0" color="#16A556" level="1" data={this.state.data[0]} onLevelSelect={this.setLevelData}></FirstItem>
                        <FirstItem rotation="30" color="#D52548" level="1" data={this.state.data[1]} onLevelSelect={this.setLevelData}></FirstItem>
                        <FirstItem rotation="60" color="#158ACD" level="1" data={this.state.data[2]} onLevelSelect={this.setLevelData}></FirstItem>
                    </div>
                    <div className="sub-item-list-container">
                        <SubItemList distance="750" level="5" color={this.state.color} data={this.state.selection} onLevelSelect={this.openWindow}></SubItemList>
                        <SubItemList distance="600" level="4" color={this.state.color} data={this.state.selection} onLevelSelect={this.setLevelData}></SubItemList>
                        <SubItemList distance="450" level="3" color={this.state.color} data={this.state.selection} onLevelSelect={this.setLevelData}></SubItemList>
                        <SubItemList distance="300" level="2" color={this.state.color} data={this.state.selection} onLevelSelect={this.setLevelData}></SubItemList>
                    </div>
                </div>
                <OpenWindow show={this.state.show} onClick={this.handleChildClick}></OpenWindow>
            </div>
        );
    },
    setLevelData:function(level, data, color){
        if(color){
            //sets the first level if it has got color param
            this.setState({selection:[data],color:color});
        }else{
            //sets the selected data based on the level
            var _selection = this.state.selection;
            _selection[level] = data;
            //splice removes the data after the selected level [when user clicks on am item at parent level]
            _selection.splice(level+1);
            this.setState({selection:_selection});
        }
        //navigation test
        //window.location = 'http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=Metric_Dashboard_151020&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true';
    },
    openWindow:function() {
        this.setState({show:'block'})     
    },
    handleChildClick: function(event) {
        this.setState({show:'none'})
    }
});
