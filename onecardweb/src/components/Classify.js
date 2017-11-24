//该组件是分类页
import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'

const ClassifyUI = (props)=>{
	return(
		<div className="Classify">
			{'Classify分类组件'}
	    
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

const Classify = connect(mapStateToProps, mapDispatchToProps)(ClassifyUI);


export default Classify;
