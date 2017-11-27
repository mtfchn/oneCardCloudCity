//该组件是购物车
import React from 'react';
import '../css/public.css'
import {connect} from 'react-redux'

const CartUI = (props)=>{
	return(
		<div className="Cart">
			{'cart购物车组件'}
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

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartUI);


export default Cart;
