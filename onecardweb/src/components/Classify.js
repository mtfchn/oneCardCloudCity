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
		console.log(props.classify['0'])
		return(
			<div className="Classify">
				{					
					props.classify.map((item,index)=>{
						console.log(item)
						return(
							item.map((items,indexs)=>{
								return(
									<div key={items.categoryId}>
										{items.categoryName}
									</div>
								)							
							})
						)
					})					
				}
				
			</div>
		)			
	}
}

const mapStateToProps = (state)=>{
	console.log(state)
	return{
		classify:state.classify
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		getClassify() {
            axios.get('/yiwu/category/querydouble/v2?parentId=10000')
                .then(function (res) {
                   console.log(res.data.result['0'].categoryInfos)
	                dispatch({
	                    type: "GET_TIME",
	                    payload: res.data.result['0'].categoryInfos
	                })
                })

        },
	}
}

const Classify = connect(mapStateToProps, mapDispatchToProps)(ClassifyUI);


export default Classify;
