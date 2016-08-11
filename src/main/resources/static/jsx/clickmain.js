'use strict';
import React from "react";
    class MainContent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {data: []};
          this.state = {loading: true};
       }  
       componentWillReceiveProps(nextProps) {
			 var address2 = this.props.address1;
                 this.setState({
                address2: nextProps.address2 > this.props.address2
                });
                 const self = this;
			fetch(address2).then(function(res) {
				
				if(res.ok) {
					
					res.json().then(function(obj) {
					console.log(obj);
						self.setState({
							loading: false,
							data: obj,
						});
					})
				}
			}.bind(self), function(ex) {
				console.log(ex)
			}.bind(self));
        }

		componentDidMount(){
					
		    var address2 = this.props.address1;
		 	
			 const self = this;
			fetch(address2).then(function(res) {
				
				if(res.ok) {
					
					res.json().then(function(obj) {
					console.log(obj);
						self.setState({
							loading: false,
							data: obj,
						});
					})
				}
			}.bind(self), function(ex) {
				console.log(ex)
			}.bind(self));
		}
        
        render() {
    	     //接收上级数据
          
        if(this.state.loading) {
        	
            return <p className="tc">loading...</p>;
          }

            var data = this.state.data || {},
          
            reposList = data.map(function(item, index, arr) {
           
                  	return (
                <tr key={index}>
                               <td>{item.title}</td>
                               <td>{item.item}</td>
                               <td>{item.number}</td>
                               <td><a href="pagechild.html">查看详情</a></td>
                </tr>
                )
              })
        return (
          <table id="main">
                	 <tbody>
                	 	<tr>
                	 		<th>数据</th>
                	 		<th>类型</th>
                	 		<th>编号</th>
                	 		<th>详情</th>
                	 	</tr>
                	 	{reposList}
                	 </tbody>
                </table>
           
        );
    }
	
}
export {MainContent as default};
