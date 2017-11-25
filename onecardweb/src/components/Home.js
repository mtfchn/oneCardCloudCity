//该组件是首页
import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import axios from 'axios'

const HomeUI = (props)=>{
	//页面内容
	return(
		<div className="Home">
			<input type="text" id="fid"/>
			{props.getData()}
		    <button onClick={()=>{props.addToDo(document.getElementById("fid").value)}}>add todo</button>
		    <ul>
		    	{
		    		props.list.map(function(item,index){
		    			return <li key={index}>{item}</li>
		    		})
		    	}
		    </ul>
		</div>	
	)
		
}

const mapStateToProps = (state)=>{
	return{
		list:state.list
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
//				var data = res.data.data.films;
//				console.log(data)
//				console.log(that.props)
//				console.log(that.props.store)
	//			that.addState(data)
//				that.props.store.dispatch({
//						type:"FILMS",
//						payload:data
//				})
			})
		}
	}
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);


export default Home;
