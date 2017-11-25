//该组件是首页
import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import axios from 'axios'

//const HomeUI = (props)=>{
//	//页面内容
//	return(
//		<div className="Home">
//			{props.getData()}
//			<div className="Home_product">
//			
//				
//			</div>
//		</div>	
//	)
//		
//}

class HomeUI extends React.Component{
	componentDidMount(){
		this.props.getData()
	}
	componentWillUnmount(){
		this.props.getData()
	}
	render(){
		var props = this.props
		return(
		<div className="Home">
			{props.getData()}
			<div className="Home_product">
			
				
			</div>
		</div>	
	)
	}
}

const mapStateToProps = (state)=>{
	console.log()
	return{
		list:state.list,

	}
}

const mapDispatchToProps = (dispatch)=>{
	//业务
	return{
		addToDo:function(data){
			console.log(mapDispatchToProps)
			dispatch({
				type:"ADD_TODO",
				payload: data
			})			
		},
		getData:function(){
			var that = this
			axios.get('/users/getdata')
			.then(function(res){
				console.log(res)
//				dispatch({
//					type:"PRODUCT",
//					payload:res.data.goodlist
//				})
			})
		}
	}
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);


export default Home;
