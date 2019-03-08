import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from '../App';
import Container from '../Component/Container';


const Routes = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Container}/>
            </div>
        </Router>
    )
};
export default Routes;