//该组件是‘注册’页
import React, { Component } from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'
const RegistUI = (props)=>{
    return(
        <div className="My">
            {'my我的组件'}
            注册也
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

const Regist = connect(mapStateToProps, mapDispatchToProps)(RegistUI);


export default Regist;
