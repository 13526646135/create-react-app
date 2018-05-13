import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './views/app';
import './views/app.css'
import registerServiceWorker from './registerServiceWorker';
import store from "./redux/store";

ReactDOM.render(
    (
        <BrowserRouter>
            <Provider store={store}>
                <App></App>
            </Provider>
        </BrowserRouter>
    ),
    document.getElementById('root'));
registerServiceWorker();
