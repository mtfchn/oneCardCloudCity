import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'

const HomeUI = (props)=>{
	return(
		<div className="Home">
			<input type="text" id="fid"/>
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
	return{
		addToDo:function(data){
			console.log(mapDispatchToProps)
			dispatch({
				type:"ADD_TODO",
				payload: data
			})
			
		}
	}
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);


export default Home;
