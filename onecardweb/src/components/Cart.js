//该组件是购物车
import React, {Component} from 'react';
import '../css/cart.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {createBrowserHistory} from 'history'
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    NavLink,
    // Switch,
    // Redirect
} from 'react-router-dom'

class CartUI extends Component {

    constructor() {
        super()
        this.changeOne = this.changeOne.bind(this)
        this.changeAll = this.changeAll.bind(this)
        this.delete = this.delete.bind(this)
        this.edit = this.edit.bind(this)
        this.less = this.less.bind(this)
        this.add = this.add.bind(this)
        this.finish = this.finish.bind(this)
    }

    finish(id, index) {
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
        //点击完成，完成修改
        var num = document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .editNumber`).innerHTML
        axios.post('/users/updateNumber', {id: id, number: num})
            .then((res) => {
                history.push('/cart')
                alert('完成修改')
            })
    }

    less(index) {
        //点击“-”减少数量，当数量到达1时遮罩层出现，无法再继续点击
        var numbers = document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .editNumber`).innerHTML
        numbers--
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .editNumber`).innerHTML = numbers
        if (numbers > 1) {
            document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .lessSpan`).style.display = 'none'
        } else {
            document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .lessSpan`).style.display = 'block'
        }
    }

    add(index) {
        // console.log(document.querySelector(`.commodity:nth-of-type(${index + 2})`))
        var numbers = document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .editNumber`).innerHTML
        numbers++
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .editNumber`).innerHTML = numbers
        if (numbers > 1) {
            document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .lessSpan`).style.display = 'none'
        } else {
            document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .lessSpan`).style.display = 'block'
        }
    }

    edit(index) {
        // console.log(index)
        // console.log('pirce')
        // console.log(document.querySelector(`.commodity:nth-of-type(${index + 2})`))
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .bianji`).style.display = 'none'
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .pirce`).style.display = 'none'
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .nowC`).style.display = 'none'
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC`).style.display = 'block'
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .finish`).style.display = 'block'
        document.querySelector(`.commodity:nth-of-type(${index + 2}) .delete`).style.display = 'block'
        var number = document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .editNumber`)
        number.innerHTML = document.querySelector(`.commodity:nth-of-type(${index + 2}) .nowC span`).innerHTML
        if (number.innerHTML > 1) {
            document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .lessSpan`).style.display = 'none'
        } else {
            document.querySelector(`.commodity:nth-of-type(${index + 2}) .editC .lessSpan`).style.display = 'block'
        }
    }

    delete(id) {
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
        //删除====================================================
        axios.post('/users/delete', {id: id})
            .then((res) => {
                history.push('/cart')
                alert('成功删除商品')
            })
    }

    changeOne() {
        //单个选择时判定全选-----------------------------------------------------
        // console.log('changeOne')
        var checks = document.querySelectorAll('.checkOne')
        var checkeds = []
        var money = 0;
        var num = 0;//计算数量
        for (var i in checks) {
            if (checks[i].checked === true) {
                checkeds.push(checks[i])
                //计算总价
                var price = checks[i].parentNode.parentNode.querySelector('.edit .pirce span').innerHTML;
                var number = checks[i].parentNode.parentNode.querySelector('.nowC .capacity span').innerHTML;
                money += price * number
                num++
            }
        }
        document.querySelector('.pay .allmoney .allSpan').innerHTML = money;
        document.querySelector('.pay .payAll span').innerHTML = num;
        if (checks.length === checkeds.length) {
            document.querySelector('.checkAll').checked = true //小的input全部选中时全选框选中
        } else {
            document.querySelector('.checkAll').checked = false
        }
    }

    changeAll() {
        //全选判定单个选择-----------------------------------------------------
        var checkAll = document.querySelector('.checkAll')
        var checks = document.querySelectorAll('.checkOne')
        var money = 0;
        var num = 0;//计算数量
        if (checkAll.checked === true) {
            for (var i in checks) {
                if (checks[i].checked === false) {
                    checks[i].checked = true
                    //计算总价
                    var price = checks[i].parentNode.parentNode.querySelector('.edit .pirce span').innerHTML;
                    var number = checks[i].parentNode.parentNode.querySelector('.nowC .capacity span').innerHTML;
                    money += price * number
                    num++
                }
            }
        } else {
            for (i in checks) {
                if (checks[i].checked === true) {
                    checks[i].checked = false
                }
            }
        }
        document.querySelector('.pay .allmoney .allSpan').innerHTML = money;
        document.querySelector('.pay .payAll span').innerHTML = num;
    }

    componentDidMount() {
        this.props.getData();
        this.props.getCart();
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
                        商品数量有限，请尽快结算
                    </div>
                    {
                        this.props.commodities.map((item, index) => {
                            return (
                                <div key={item._id} className='commodity'>
                                    <div className="itemThings">
                                        <div className="leftInput l">
                                            <input type="checkbox" className="checkOne"
                                                   onClick={() => this.changeOne(index)}/>
                                        </div>
                                        <div className="contentImg l">
                                            <img src={item.img} alt='img'/>
                                        </div>
                                        <div className="rightText l">
                                            <div className="topText">{item.name}</div>
                                            <div className="capacityAndNumber nowC">
                                                <div className="capacity">数量：×<span>{item.number}</span></div>
                                            </div>

                                            <div className="capacityAndNumber editC" style={{display: 'none'}}>
                                                <button className="less" onClick={() => this.less(index)}> -</button>
                                                <span className="lessSpan"></span>
                                                <div className="editNumber"></div>
                                                <button className="add" onClick={() => this.add(index)}> +</button>
                                                <span className="disblockId" style={{display: 'none'}}>{item._id}</span>
                                            </div>
                                            <div className="edit">
                                                <span className="pirce">单价：￥<span>{item.price}</span></span>
                                                <span className='editclick editButton bianji'
                                                      onClick={() => this.edit(index)}>编辑</span>
                                                <span className='editclick editButton finish' style={{display: 'none'}}
                                                      onClick={() => this.finish(item._id, index)}>完成</span>
                                                <span className="editclick editButton delete" style={{display: 'none'}}
                                                      onClick={() => this.delete(item._id)}>删除</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="pay">
                        <div className="left">
                            <input type="checkbox" className="checkAll" onClick={() => this.changeAll()}/>
                            <span className="quanxuan">全选</span>
                            <div className="allmoney">合计:￥<span className="allSpan">0</span></div>
                        </div>
                        <div className="payAll" onClick={() => {
                            var history = createBrowserHistory({
                                basename: '', // 基链接
                                forceRefresh: true, // 是否强制刷新整个页面
                                keyLength: 6, // location.key的长度
                                getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
                            })
                            var checkpay = document.querySelectorAll('.checkOne')
                            for (var i in checkpay) {
                                var payThat = [];
                                if (checkpay[i].checked === true) {
                                    var List = [...this.props.commodities]//深拷贝数组
                                    payThat = List.splice(i, 1)
                                    axios.post('/users/pay', {id: payThat['0']._id, flag: 1})
                                        .then((res) => {
                                            console.log(res)
                                            if (res.data.code === 100) {
                                                alert('支付失败')//支付失败返回code为100
                                                return
                                            }

                                        })
                                }
                            }
                            history.push('/cart')
                            alert('支付成功')
                        }}>去结算(<span>0</span>)
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div id='cart'>
                <div className='header'>购物车</div>
                {cartDiv}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.cookie,
        commodities: state.commodity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //判定是否登录findcookie
        getData: function () {
            axios.get('/users/findCookie')
                .then((res) => {
                    dispatch({
                        type: 'FINDCOOKIE',
                        payload: res.data.code
                    })
                })
        },
        //寻找username
        getCart: function () {
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
            axios.post('/users/judgeCart', {username: getCookie('user')})
                .then((res) => {
                    dispatch({
                        type: 'FINDCOMMODITY',
                        payload: res.data.goodlist
                    })
                })
        }
    }
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartUI);


export default Cart;
