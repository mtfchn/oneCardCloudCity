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
		return(
		<div className="Home">

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
