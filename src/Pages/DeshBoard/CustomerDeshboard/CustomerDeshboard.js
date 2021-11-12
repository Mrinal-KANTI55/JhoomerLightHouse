import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import Payment from './Payment/Payment';
import Review from './Review/Review';
import ManageOrder from './ManageOrder/ManageOrder';

 const CustomerTopics=()=> {
    let { path, url } = useRouteMatch();

    return (
        <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-12 border-end border-secondary'>
                <h2 className='my-5'>Customer Menu</h2>
                <ul className='list-group text-start'>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`${url}/Payment`}>Payment</Link>
                    </li>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`${url}/Review`}>Review</Link>
                    </li>
                    <li className='ms-2 my-2 '>
                        <Link className='text-decoration-none font-monospace' to={`${url}/ManageOrder`}>ManageOrder</Link>
                    </li>
                </ul>
            </div>
            <div className='col-lg-10 col-md-9 col-sm-12'>
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/Payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/Review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/ManageOrder`}>
                        <ManageOrder />
                    </Route>

                </Switch>
            </div>
        </div>
    );
}

export default CustomerTopics;
