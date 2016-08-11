'use strict';
import React from "react";
import ReactDOM from 'react-dom';
import LeftMenu from './navclicknum2';
import MainContent from './clickmain';

class TopMenu extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				data: []
			};
			this.state = {
				num: 0

			};
			this.state = {
				source: "${request.contextPath}/static/mock/tree.json"

			};

		}
		handleClick(i) {
			
			this.setState({source:map.get(i)});
		    }			

		render() {

			var source = this.state.source;
		    var newArry = [];
			  for(var i = 0; i < 5; i++) {
                newArry.push(<button onClick = {this.handleClick.bind(this,i)}key = {i}>{i}</button>)
				}		
					
		return(<div className="repos-list">
		             {newArry}
		             <LeftMenu source1={this.state.source}/>
               </div>)
					
				}		
					
				}	
						
	    export {TopMenu as default};
			
			
			
					

					
					

				
			

		
		