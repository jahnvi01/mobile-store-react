import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './context';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
    <ProductProvider>
<Router>
<App />
</Router>
</ProductProvider>
, document.getElementById('root'));

serviceWorker.unregister();
