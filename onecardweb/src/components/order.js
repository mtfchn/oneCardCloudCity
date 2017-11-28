//该组件是‘订单’页
import React from 'react';
import '../css/cart.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    NavLink,
    // Switch,
    // Redirect
} from 'react-router-dom'

class MyhomeUI extends React.Component {
    componentDidMount() {
        this.props.getData();
        this.props.getOrder();
    }

    render() {
        var cartDiv = ''
        if (this.props.product === 100) {
            cartDiv = (
                <div className='cannotLogin'>
                    <h1>您还没有登录</h1>
                    <div className='user'>
                        <NavLink to={`/my/login`} className='thisLogin'>点击登录</NavLink>
                    </div>
                </div>
            )
        } else {
            cartDiv = (
                <div className='alreadyLogin'>
                    <div className="storeMessage">
                        您已经购买的商品
                    </div>
                    {
                        this.props.orderList.map((item, index) => {
                            return (
                                <div key={item._id} className='commodity'>
                                    <div className="itemThings">
                                        <div className="contentImg l">
                                            <img src={item.img} alt='img'/>
                                        </div>
                                        <div className="rightText l">
                                            <div className="topText">{item.name}</div>
                                            <div className="capacityAndNumber nowC">
                                                <div className="capacity">数量：×<span>{item.number}</span></div>
                                            </div>
                                            <span className="disblockId" style={{display: 'none'}}>{item._id}</span>
                                            <div className="edit">
                                                <span className="pirce">单价：￥<span>{item.price}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        return (
            <div id='cart'>
                <div className='header'>
                    <NavLink to={`/my`} className='goback iconfont'>&#xe600;</NavLink>
                    <span className='myorder'>我的订单</span>
                    <span className='find'></span>
                </div>
                {cartDiv}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        orderList: state.order
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: function () {
            axios.get('/users/findCookie')
                .then((res) => {
                    dispatch({
                        type: 'FINDCOOKIE',
                        payload: res.data.code
                    })
                })
        },
        getOrder: function () {
            function getCookie(name) {
                var arr = document.cookie.split('; ');
                var name_value;
                for (var i = 0; i < arr.length; i++) {
                    name_value = arr[i].split('=');
                    if (name_value[0] === name) {
                        return name_value[1];
                    }
                }
                return null;
            }

            if (getCookie('user') === null) {
                return
            }
            axios.post('/users/judgePay', {username: getCookie('user')})
                .then((res) => {
                    dispatch({
                        type: 'FINDORDER',
                        payload: res.data.goodlist
                    })
                })
        }
    }
}

const
    Myhome = connect(mapStateToProps, mapDispatchToProps)(MyhomeUI);


export default Myhome;
