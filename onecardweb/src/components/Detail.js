//该组件是购物车
import React, {Component} from 'react';
import '../css/public.css'
import '../css/detail.css'
import {connect} from 'react-redux'
import axios from 'axios'
import {
    // BrowserRouter as Router,
    // Route,
    Link,
    // NavLink,
    // Switch,
    // Redirect
} from 'react-router-dom'

class DetailUI extends Component {
    constructor() {
        super();
        this.addCart = this.addCart.bind(this)
        this.buyNow = this.buyNow.bind(this)
    }
    addCart(name, img, price, oldPrice, username) {
        if(username.length === 0){
            alert('您还没有登录')
            return
        }
        axios.post('/users/addCart', {
            name: name,
            img: img,
            price: price,
            oldPrice: oldPrice,
            number: 1,
            flag: 0,
            username: username
        })
            .then((res) => {
                // console.log(res)
                if(res.data.code !== 1){
                    alert(res.data.message);
                    return;
                }
                alert('成功将商品加入到购物车')
            })
    }
    buyNow(name, img, price, oldPrice, username){
        if(username.length === 0){
            alert('您还没有登录')
            return
        }
        axios.post('/users/addCart', {
            name: name,
            img: img,
            price: price,
            oldPrice: oldPrice,
            number: 1,
            flag: 1,
            username: username
        })
            .then((res) => {
                // console.log(res)
                if(res.data.code !== 1){
                    alert(res.data.message);
                    return;
                }
                alert('成功将商品加入到订单')
            })
    }
    componentDidMount() {
        // console.log(this.props.match.params.productid)
        this.props.getDetail(this.props.match.params.productid)//调用getDetail函数
        this.props.getName()
    }

    render() {
        var props = this.props
        // console.log(props)
        return (
            <div className="Cart">
                {
                    props.productdetail.map((item, index) => {//循环返回的数据
                        return (
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
                                    <img src={item.img} alt='img'/>
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
                                <div className='bottom'>
                                    <div className='addCart'
                                         onClick={() => this.addCart(item.name, item.img, item.price, item.oldPrice, props.username)}>
                                        加入购物车
                                    </div>
                                    <div className='buyNow'onClick={() => this.buyNow(item.name, item.img, item.price, item.oldPrice, props.username)}>立即购买</div>
                                </div>
                            </div>

                        )

                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        productdetail: state.product,
        username: state.cookiename
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        getDetail(productid) {
            axios.get(`/users/getdetail?id=${productid}`)
                .then(function (res) {
                    // console.log(res)
                    dispatch({
                        type: "GET_DETAIL",
                        payload: res.data.goodlist
                    })
                })

        },
        getName: function () {
            function getCookie(name) {
                // var cookie = document.cookie;
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
            dispatch({
                type: 'COOKIENAME',
                payload: getCookie('user')
            })
        }

    }
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailUI);


export default Detail;
