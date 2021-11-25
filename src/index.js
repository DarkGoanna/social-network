import store from './store/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'


function rerenderUI(state) {
    ReactDOM.render(
        <React.StrictMode >
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderUI(store.getState()); // first load

store.subscribe(() => {
    rerenderUI(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()