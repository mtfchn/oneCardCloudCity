//该组件是首页
import React, { Component } from 'react';
import '../css/public.css'
import '../css/home.css'
import {connect} from 'react-redux'
import axios from 'axios'


class HomeUI extends React.Component{
	componentDidMount(){
		this.props.getData()
	}
	render(){
		var props = this.props
		console.log(props)
		return(
		<div className="Home">
			<div className="Home_header">
				<div className='header_l'>大连<i className="iconfont">&#xe61b;</i></div>
				<div className='header_c'>
					<div className="header_c_box">
						<i className="iconfont">&#xe60b;</i>
						<input type="text" placeholder="请输入要搜索的商品"/>
					</div>				
				</div>
				<div className='header_r'><i className="iconfont">&#xe642;</i><i className="iconfont">&#xe645;</i></div>
			</div>

			<div className="Home_swiper">
				轮播图
			</div>
			
			<div className="Home_list">
				list
			</div>
			
			<div className="Home_product">	
				<div className="product_title">
					<i className="iconfont">&#xe61c;</i>&nbsp;推荐商品
					<span>更多<i className="iconfont">&#xe686;</i></span>
				</div>
				{
					props.product.map((item,index)=>{
						return(
							<dl key={item._id}>
								<dt>
									<img src={item.img}/>
								</dt>
								<dd>
									<h3>{item.name}</h3>
									<p>
										<i className="iconfont">&#xe68a;</i>{item.price}
										<span><i className="iconfont">&#xe68a;</i>{item.oldPrice}</span>
									</p>
								</dd>
							</dl>
						)
						
					})
				}
				
			</div>
		</div>	
	)
	}
}

const mapStateToProps = (state)=>{
	console.log(state)
	return{
		product:state.product
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
