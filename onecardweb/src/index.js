import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux&&react-redux
import {createStore} from 'redux'
import reducers from './reducers/index'//拆分reducers后引用
import {Provider} from 'react-redux'

const store = createStore(reducers,{})

function renderPage(){
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage()

store.subscribe(renderPage)

registerServiceWorker();
