import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { REPO_NAME } from './constants/reponame'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <BrowserRouter basename={`/${REPO_NAME}/`}>
        <App />
      </BrowserRouter>
    </Provider>
)
