import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import RestoServiceContext from './components/resto-service-context';
import RestoService from './services/resto-service';
import {BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router >
                    <ScrollToTop/>
                    <App/>

                    {/* </ScrollToTop> */}
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

