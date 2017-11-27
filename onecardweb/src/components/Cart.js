//该组件是购物车
import React, {Component} from 'react';
import '../css/public.css'
import {connect} from 'react-redux'

class CartUI extends Component {
	render(){
		return (
			<div id='cart'>
				购物车！！！
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
		
	}
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartUI);


export default Cart;
