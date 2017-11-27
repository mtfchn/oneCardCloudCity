//该组件是购物车
import React, { Component } from 'react';
import '../css/public.css'
import '../css/detail.css'
import {connect} from 'react-redux'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

class DetailUI extends React.Component{
	componentDidMount(){
		console.log(this.props.match.params.productid)
		this.props.getDetail(this.props.match.params.productid)//调用getDetail函数
	}
	render(){
		var props=this.props
		console.log(props)
		return(
			<div className="Cart">
				{
					props.productdetail.map((item,index)=>{//循环返回的数据
						return(
							<div key={item._id}>
								<div className="Cart_header">
									<div className="Cart_header_l">
										<Link to="/home">
											<i className="iconfont">&#xe50d;</i>
										</Link>
									</div>
									<div className="Cart_header_c">{item.name}</div>
									<div className="Cart_header_r"><i className="iconfont">&#xe996;</i></div>
								</div>
								<div className="Cart_img">
									<img src={item.img}/>
								</div>
								<div className="Cart_info">
									<h2>
										<i className="iconfont">&#xe68a;</i>{item.price}
										<span><i className="iconfont">&#xe68a;</i>{item.oldPrice}</span>
									</h2>
									<p className="Cart_brand">品牌:&nbsp;&nbsp;{item.brand}</p>
									<p className="Cart_brand">产地:&nbsp;&nbsp;{item.origin}</p>
									<p className="Cart_contest">详情:&nbsp;&nbsp;{item.contest}</p>
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
