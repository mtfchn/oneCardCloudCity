//该组件是首页
import React, {
	Component
} from 'react';
import '../css/public.css'
import '../css/home.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { Carousel } from 'antd'; //引入antd
import {
    // BrowserRouter as Router,
    // Route,
    Link,
    // NavLink,
    // Switch,
    // Redirect
} from 'react-router-dom'

class HomeUI extends Component {
	
	componentDidMount() {
		this.props.getData();
		
	}
	render() {
		var props = this.props
		// console.log(props)
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
				<Carousel autoplay>
				    <div><img src="http://ywproducts.oss-cn-shanghai.aliyuncs.com/ywproducts/00013802/17/11/16/4f9fe07a-7129-4760-b265-d52340b429d420171116175021.jpg"/></div>
				    <div><img src="http://ywproducts.oss-cn-shanghai.aliyuncs.com/ywproducts/17/11/28/8168d316-1bf1-460d-98af-81ef44e0ebc020171128094607.jpg"/></div>
				    <div><img src="http://ywproducts.oss-cn-shanghai.aliyuncs.com/ywproducts/51206,51207/17/11/28/e0ee4d1a-8b26-4573-9619-c0c77c660b8520171128101516.jpg"/></div>
				    <div><img src="http://ywproducts.oss-cn-shanghai.aliyuncs.com/ywproducts/00011510/17/11/27/9e0bd5f4-8d62-44ae-a130-6fd838d93e4420171127095458.jpg"/></div>
				</Carousel>
			</div>
			
			<div className="Home_list">
				<ul>
					<li>
						<h3><i className="iconfont">&#xe690;</i></h3>
						<p>本地服务</p>
					</li>
					<li>
						<h3><i className="iconfont">&#xe61f;</i></h3>
						<p>积分商城</p>
					</li>
					<li>
						<h3><i className="iconfont">&#xe612;</i></h3>
						<p>附近商家</p>
					</li>
					<li>
						<h3><i className="iconfont">&#xe6de;</i></h3>
						<p>手机数码</p>
					</li>
					<li>
						<h3><i className="iconfont">&#xe712;</i></h3>
						<p>惠加油</p>
					</li>
					<li>
						<h3><i className="iconfont">&#xe601;</i></h3>
						<p>花费充值</p>
					</li>
					<li>
						<h3><i className="iconfont">&#xe671;</i></h3>
						<p>票务中心</p>
					</li>
					<li>
						<h3><i className="iconfont">&#xe639;</i></h3>
						<p>便民服务</p>
					</li>
				</ul>
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
									<Link to={"/detail/" + item._id}>
										<dt>
											<img src={item.img} alt='img+++++++++++++'/>
										</dt>
										<dd>
											<h3>{item.name}</h3>
											<p>
												<i className="iconfont">&#xe68a;</i>{item.price}
												<span><i className="iconfont">&#xe68a;</i>{item.oldPrice}</span>
											</p>
										</dd>
									</Link>
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
	// console.log(state)
	return {
		product: state.product
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		getData: function() {

			axios.get('/users/getdata')
				.then(function(res) {
					// console.log(res)
					dispatch({
						type: "PRODUCT",
						payload: res.data.goodlist
					})
				})
			// console.log('getData::run')
		}
	}
}

//const mapDispatchToProps = {
//	getData:()=>{
//				return 	axios.get('/users/getdata')
//				.then(function(res) {
//					console.log(res)
////					dispatch({
////						type: "PRODUCT",
////						payload: res.data.goodlist
////					})
//				})
//	}
//}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);

export default Home;