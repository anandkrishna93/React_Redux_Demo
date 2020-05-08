import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import config from "config";
import { store } from './_helpers';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

import 'react-mdl/extra/material.js';

// =======================CSS Start========================================//
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import './_assets/fonts/iconfont/material-icons.css';
import './_assets/fonts/fonts.css';
import './style.css';
// =======================CSS End========================================//

import { configureFakeBackend } from './_helpers';
configureFakeBackend();

ReactDOM.render(
    <BrowserRouter basename={config.basePath}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);

// Only use register in production!
serviceWorker.unregister();
