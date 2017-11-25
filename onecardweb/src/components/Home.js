//该组件是首页
import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import axios from 'axios'


class HomeUI extends React.Component{
	componentDidMount(){
		this.props.getData()
	}
	render(){
		var props = this.props
		console.log(props)
		return(
		<div className="Home">
			<div className="Home_product">			
				{
					props.product.map((item,index)=>{
						return(
							<dl key={item._id}>
								<dt>
									<img src={item.img}/>
								</dt>
								<dd>
									<p>{item.name}</p>
								</dd>
							</dl>
						)
						
					})
				}
				
			</div>
		</div>	
	)
	}
}

const mapStateToProps = (state)=>{
	console.log(state)
	return{
		product:state.product
	}
}

const mapDispatchToProps = (dispatch)=>{
	//业务
	return{

		getData:function(){
			var that = this
			axios.get('/users/getdata')
			.then(function(res){
				console.log(res)
				dispatch({
					type:"PRODUCT",
					payload:res.data.goodlist
				})
			})
			console.log('getData::run')
		}
	}
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);


export default Home;
