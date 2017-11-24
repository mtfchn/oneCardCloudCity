//该组件是‘我的’页
import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'

const MyUI = (props)=>{
	return(
		<div className="My">
			{'my我的组件'}
	    
		</div>	
	)
		
}

const mapStateToProps = (state)=>{
	return{
		
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		
	}
}

const My = connect(mapStateToProps, mapDispatchToProps)(MyUI);


export default My;
