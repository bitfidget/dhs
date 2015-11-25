import React from 'react';
import FirstItem from './FirstItem.jsx';
import SubItemList from './SubItemList.jsx';
import OpenWindow from './OpenWindow.jsx';

export default React.createClass({
    getInitialState() {
        return {
            selection:[],
            selectedIndexPaths:[],
            color: "#FFFF00",
            item1Color: "#16A556",
            item2Color: "#D52548",
            item3Color: "#158ACD",
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
                                                    finalDestination:'http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_01&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true'
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
                                                    type:"Increased customer satisfaction from the improved accuracy of payments",
                                                    finalDestination:"http://www.google.com"
                                                    // finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_01&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                },
                                                {
                                                    type:"Decrease in customer aggression",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_02&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in ease of accessing services",
                                            subItems:[
                                                {
                                                    type:"Increase in customer satisfaction through incrreased ease of service access",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_03&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in overall satisfaction with service delivery",
                                            subItems:[
                                                {
                                                    type:"Overall Customer Satisfaction with DHS staff",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_04&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in timeliness of service delivery",
                                            subItems:[
                                                {
                                                    type:"Increase in customer satisfaction due to improved timeliness of customer transactions",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_05&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                },
                                                {
                                                    type:"Increase in customer satisfaction due to a reduction in the time taken to complete transactions for processes requiring third party documents",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_06&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Increase in transparency of services",
                                            subItems:[
                                                {
                                                    type:"Increase in customer satisfaction due to improved transparency in customer information via the digital interface, including summaries of general information, claims progress, notifications and automated messages",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_07&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                }
                                            ]
                                        },
                                        {
                                            type:"Improvements in staff productivity",
                                            subItems:[
                                                {
                                                    type:"Decrease in absenteeism, promoting improvements in worker productivity, by eliminating repetitive tasks and being able to have a greater, more positive, impact on customers",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_08&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
                                                },
                                                {
                                                    type:"Increase in presenteeism, promoting improvements in worker productivity, by eliminating repetitive tasks and being able to have a greater, more positive, impact on customers",
                                                    finalDestination:"http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=DHS_Draft_Dashboard_09&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true"
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
                        <FirstItem rotation="0" color={this.state.item1Color} level="1" data={this.state.data[0]} onLevelSelect={this.setLevelData}></FirstItem>
                        <FirstItem rotation="30" color={this.state.item2Color} level="1" data={this.state.data[1]} onLevelSelect={this.setLevelData}></FirstItem>
                        <FirstItem rotation="60" color={this.state.item3Color} level="1" data={this.state.data[2]} onLevelSelect={this.setLevelData}></FirstItem>
                    </div>
                    <div className="sub-item-list-container">
                        <SubItemList distance="750" level="5" color={this.state.color} data={this.state.selection} onLevelSelect={this.openWindow} indexPaths={this.state.selectedIndexPaths} selectIndexPath={this.selectedIndexPath}></SubItemList>
                        <SubItemList distance="600" level="4" color={this.state.color} data={this.state.selection} onLevelSelect={this.setLevelData} indexPaths={this.state.selectedIndexPaths} selectIndexPath={this.selectedIndexPath}></SubItemList>
                        <SubItemList distance="450" level="3" color={this.state.color} data={this.state.selection} onLevelSelect={this.setLevelData} indexPaths={this.state.selectedIndexPaths} selectIndexPath={this.selectedIndexPath}></SubItemList>
                        <SubItemList distance="300" level="2" color={this.state.color} data={this.state.selection} onLevelSelect={this.setLevelData} indexPaths={this.state.selectedIndexPaths} selectIndexPath={this.selectedIndexPath}></SubItemList>
                    </div>
                </div>
                <OpenWindow show={this.state.show} onClick={this.handleChildClick}></OpenWindow>
            </div>
        );
    },
    setLevelData:function(level, data, color){
        if(color){
            //sets the first level if it has got color param
            this.setState({
                selection:[data],
                color:color,
                selectedIndexPaths:[]
            });
        }else{
            //sets the selected data based on the level
            var _selection = this.state.selection;
            console.log(_selection);
            _selection[level] = data;
            //splice removes the data after the selected level [when user clicks on am item at parent level]
            _selection.splice(level+1);
            this.setState({selection:_selection});
        }
        //navigation test
        //window.location = 'http://sasvapl1.csda.gov.au:7980/SASVisualAnalyticsViewer/VisualAnalyticsViewer.jsp?reportName=Metric_Dashboard_151020&reportPath=/User+Folders/JIK868/My+Folder&reportViewOnly=true';
    },
    openWindow:function(level, data) {
        
        var _selection = this.state.selection;
        _selection[level] = data;
        var _url = _selection[level].finalDestination;
        //splice removes the data after the selected level [when user clicks on am item at parent level]
        _selection.splice(level+1);
        this.setState(
            {
                selection:_selection,
                url:_url,
                show:'block'
            }
        );
        debugger
    },
    handleChildClick: function(event) {
        debugger
        this.setState({show:'none'})
    },
    selectedIndexPath: function(level, index) {
        this.state.selectedIndexPaths[level] = index;
        this.state.selectedIndexPaths.splice(level+1);
        console.log(level, index, this.state.selectedIndexPaths);
    }
});
