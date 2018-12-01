import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';


//import components 

import Routes from './routes';

const App = () =>{ 
    return(
        <Provider>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

