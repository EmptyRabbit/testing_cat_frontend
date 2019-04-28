import React from 'react';
import { Route } from 'react-router-dom';
import Contents from '../component/Container/Contents';
import Test from '../containers/Detail';


const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Contents} />
            <Route path="/create" component={Contents} />
            <Route path="/report" component={Contents} />
            <Route path="/scene" component={Contents} />
            <Route path="/detail" component={Test} />
        </div>
    )
};
export default Routes;