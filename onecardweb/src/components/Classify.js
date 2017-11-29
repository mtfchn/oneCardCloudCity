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
	componentDidMount(){
		this.props.getList()
		this.props.getListData(10000)//对列表第一项进行初始化，目的是为点击列表就可看到详细信息
	}
	render(){
		var props = this.props
//		console.log(props)
		var item1 = props.classify[0]?props.classify[0]:[];//对分类左侧的列表进行非空判断
//		console.log(item1.splice(0,5))
		var item2 = [...item1].splice(0,9)//将20条列表消息截取10条
//		console.log(item2)
		var item3 = (props.list)?(props.list):[]//对列表对应当详细信息进行非空判断
//		console.log(item3)
		
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
                		{
                			item2.map((item,index)=>{
                				return(
                					<li key={item.categoryId} onClick={()=>{props.getListData(item.categoryId)}}>{item.categoryName}</li>
                				)
                			})
                		}
                	</ul>
                </div>
                <div className="Classify_list">	                
					<div>
						{
							item3.map((item,index)=>{
								return(
									<dl key={item.categoryId}>
										<dt><img src={item.picture} alt='img'/></dt>
										<dd>{item.categoryName}</dd>
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
//	console.log(state)
	return{
		classify:state.classify,
		list:state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		//得到分类页左侧列表信息的ajax
        getList() {
            axios.get('/yiwu/category/query/v2')
        	.then(function (res) {
//             console.log(res)
                dispatch({
                    type: "GET_List",
                    payload: res.data.result
                })
        	})

        },
        //根据点击列表得到该列表对应当详细信息ajax
        getListData(id){
        	axios.get(`/yiwu/category/querydouble/v2?parentId=${id}`)
        	.then(function (res) {
//             console.log(res)
                dispatch({
                    type: "GET_List_DATA",
                    payload: res.data.result[0].categoryInfos
                })
        	})
        }
	}
}

const Classify = connect(mapStateToProps, mapDispatchToProps)(ClassifyUI);


export default Classify;
