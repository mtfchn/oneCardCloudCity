//该组件是首页
import React, {
	Component
} from 'react';
import '../css/public.css'
import '../css/home.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { Carousel } from 'antd'; //引入antd

class HomeUI extends React.Component {
	
	componentDidMount() {
		this.props.getData();
		if(window.swiperFun){
			window.swiperFun(); 
		}
	}
	render() {
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
				<div className="swiper-container">
				    <div className="swiper-wrapper">
				      <div className="swiper-slide">Slide 1</div>
				      <div className="swiper-slide">Slide 2</div>
				      <div className="swiper-slide">Slide 3</div>
				      <div className="swiper-slide">Slide 4</div>
				    </div>				    
				    <div className="swiper-pagination"></div>				    
				  </div>
			</div>
			
			<div className="Home_list">
				list
			</div>
			
			<div className="Home_product">	
				<div className="product_title">
					<i className="iconfont">&#xe64d;</i>&nbsp;推荐商品
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

const mapStateToProps = (state) => {
	console.log(state)
	return {
		product: state.product
	}
}

const mapDispatchToProps = (dispatch) => {
	//业务
	return {

		getData: function() {
			var that = this
			axios.get('/users/getdata')
				.then(function(res) {
					console.log(res)
					dispatch({
						type: "PRODUCT",
						payload: res.data.goodlist
					})
				})
			console.log('getData::run')
		}
	}
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);

export default Home;