//该组件是发现页
import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'

const FindUI = (props)=>{
	return(
		<div className="Find">
			{'Find发现组件'}
	    
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

const Find = connect(mapStateToProps, mapDispatchToProps)(FindUI);


export default Find;
