//该组件是分类页
import React from 'react';
import '../css/public.css'
import '../css/classify.css'
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

class ClassifyUI extends React.Component{
	constructor(){
		super()
		this.state={
			autoitem:[]		
		}
	}
	componentDidMount(){
		if(this.props.classify==''){
			this.props.getTime()
			this.props.getShechi()
		}
		

	}
	render(){
		var props = this.props
		console.log(props.classify)
		var timeitem = (props.classify['0'])?props.classify['0']:[];
		var shechiitem = (props.classify['1'])?props.classify['1']:[];
		return(
			<div className="Classify">
				<div className="Classify_header">
                    <div className="Classify_header_l">
                        <Link to="/home">
                            <i className="iconfont">&#xe50d;</i>
                        </Link>
                    </div>
                    <div className="Classify_header_c">分类</div>
                    <div className="Classify_header_r"><i className="iconfont">&#xe60b;</i></div>
                </div>	
                <div className="Classify_nav">
                	<ul className="navList">
                		<li onClick={()=>{this.setState({autoitem:timeitem})}}>钟表</li>
                		<li onClick={()=>{this.setState({autoitem:shechiitem})}}>轻奢大牌</li>
                		<li>钟表</li>
                		<li>钟表</li>
                		<li>钟表</li>
                		<li>钟表</li>
                		<li>钟表</li>
                		<li>钟表</li>
                		<li>钟表</li>
                	</ul>
                </div>
                <div className="Classify_list">	                
					<div>
						{
							this.state.autoitem.map((items,indexs)=>{
								return(
									<dl key={items.categoryId}>
										<dt><img src={items.picture}/></dt>
										<dd>{items.categoryName}</dd>
									</dl>
								)							
							})						
						}
					</div>
					
	                
                </div>
			</div>
		)			
	}
}

const mapStateToProps = (state)=>{
	console.log(state)
	return{
		classify:state.classify
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		getTime() {
            axios.get('/yiwu/category/querydouble/v2?parentId=10000')
                .then(function (res) {
//                 console.log(res.data.result['0'].categoryInfos)
	                dispatch({
	                    type: "GET_TIME",
	                    payload: res.data.result['0'].categoryInfos
	                })
                })

        },
        getShechi() {
            axios.get('/yiwu/category/querydouble/v2?parentId=70000')
                .then(function (res) {
//                 console.log(res.data.result['0'].categoryInfos)
	                dispatch({
	                    type: "GET_QINGSHE",
	                    payload: res.data.result['0'].categoryInfos
	                })
                })

        }
	}
}

const Classify = connect(mapStateToProps, mapDispatchToProps)(ClassifyUI);


export default Classify;
