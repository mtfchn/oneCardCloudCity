//该组件是分类页
import React from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import axios from 'axios'

class ClassifyUI extends React.Component{
	componentDidMount(){
		this.props.getClassify()
	}
	render(){
		var props = this.props
		return(
			<div className="Classify">
				
			</div>
		)			
	}
}

const mapStateToProps = (state)=>{
	return{
		
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		getClassify() {
            axios.get('/yiwu/category/querydouble/v2?parentId=10000')
                .then(function (res) {
                   console.log(res)
	                dispatch({
	                    type: "GET_TIME",
	                    payload: res.result
	                })
                })

        },
	}
}

const Classify = connect(mapStateToProps, mapDispatchToProps)(ClassifyUI);


export default Classify;
