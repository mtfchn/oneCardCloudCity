//该组件是购物车
import React, {Component} from 'react';
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

class CartUI extends Component {

    constructor() {
        super()
        this.changeOne = this.changeOne.bind()
        this.changeAll = this.changeAll.bind()
    }
    changeOne(){//单个选择时判定全选
        // console.log('changeOne')
        var checks = document.querySelectorAll('.checkOne')
        var checkeds = []
        for(var i in checks){
            if(checks[i].checked === true){
                checkeds.push(checks[i])
            }
        }
        if(checks.length === checkeds.length){
            document.querySelector('.checkAll').checked = true
        } else {
            document.querySelector('.checkAll').checked = false
        }
        // console.log(checks.length)
        // console.log(checkeds.length)
    }
    changeAll(){//全选判定单个选择
        // console.log('changeAll')
        var checkAll = document.querySelector('.checkAll')
        var checks = document.querySelectorAll('.checkOne')
        if(checkAll.checked === true){
            for(var i in checks){
                if(checks[i].checked === false){
                    checks[i].checked = true
                }
            }
        } else {
            for(var i in checks){
                if(checks[i].checked === true){
                    checks[i].checked = false
                }
            }
        }

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
                    {
                        this.props.commodities.map((item, index) => {
                            return (
                                <div key={item._id} className='commodity'>
                                    <div className="itemThings">
                                        <div className="leftInput l">
                                            <input type="checkbox" className="checkOne" onClick={() => this.changeOne()}/>
                                        </div>
                                        <div className="contentImg l">
                                            <img src={item.img} alt='img'/>
                                        </div>
                                        <div className="rightText l">
                                            <div className="topText">{item.name}</div>
                                            <div className="capacityAndNumber nowC">
                                                <div className="capacity">×<span>{item.number}</span></div>
                                            </div>
                                            {/*<div className="capacityAndNumber editC" >*/}
                                            {/*<button className="less"> -</button>*/}
                                            {/*<span className="lessSpan"></span>*/}
                                            {/*<div className="editNumber"></div>*/}
                                            {/*<button className="add"> +</button>*/}
                                            {/*/!*<span className="disblockId" >22</span>*!/*/}
                                            {/*/!*<span className="pirceThisAll" ></span>*!/*/}
                                            {/*</div>*/}
                                            <div className="edit">
                                                <span className="pirce">￥<span>{item.price}</span></span>
                                                <span className="editclick nowButton">编辑</span>
                                                {/*<span className="editclick editButton finished" >完成</span>*/}
                                                {/*<span className="editclick editButton delete" >删除</span>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="pay">
                        <div className="left">
                            <input type="checkbox" className="checkAll" onClick={()=>this.changeAll()}/>
                            <span className="quanxuan">全选</span>
                            <div className="allmoney">合计:<span className="allSpan">￥0</span></div>
                        </div>
                        <div className="payAll">去结算(<span>0</span>)</div>
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
    console.log(state.commodity)
    return {
        product: state.cookie,
        commodities: state.commodity
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
                    // console.log('start')
                    // console.log(res)
                    // console.log('end')
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
