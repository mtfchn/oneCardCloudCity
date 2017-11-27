//该组件是购物车
import React, { Component } from 'react';
import '../css/public.css'
import '../css/detail.css'
import {connect} from 'react-redux'
import axios from 'axios'

class DetailUI extends React.Component{
	componentDidMount(){
		console.log(this.props.match.params.productid)
		this.props.getDetail(this.props.match.params.productid)
	}
	render(){
		var props=this.props
		console.log(props)
		return(
			<div className="Cart">
				{
					props.productdetail.map((item,index)=>{
						return(
							<div key={item._id}>
								<div className="Cart_header">
									<div className="Cart_header_l"><i className="iconfont">&#xe50d;</i></div>
									<div className="Cart_header_c">{item.name}</div>
									<div className="Cart_header_r"><i className="iconfont">&#xe996;</i></div>
								</div>
							</div>
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
		productdetail: state.product
	}
}

const mapDispatchToProps = (dispatch)=>{
	
	return{
		getDetail(productid){
			axios.get(`/users/getdetail?id=${productid}`)
				.then(function(res) {
					console.log(res)
					dispatch({
						type: "GET_DETAIL",
						payload: res.data.goodlist
					})
				})
			
		}

	}
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailUI);


export default Detail;
