import AddAdmin from './AddAdmin/AddAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageUserOrder from './ManageUserOrder/ManageUserOrder';
import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import ManageAllProduct from './ManageAllProduct/ManageAllProduct';

 const Topics=()=> {
    let { path, url } = useRouteMatch();

    return (
        <div className='row'>
            <div className='col-lg-2 col-md-3 col-sm-12 border-end border-secondary'>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${url}/ManageUserOrder`}>ManageUserOrder</Link>
                    </li>
                    <li>
                        <Link to={`${url}/AddProduct`}>AddProduct</Link>
                    </li>
                    <li>
                        <Link to={`${url}/AddAdmin`}>AddAdmin</Link>
                    </li>
                    <li>
                        <Link to={`${url}/ManageAllProduct`}>ManageAllProduct</Link>
                    </li>
                </ul>
            </div>
            <div className='col-lg-10 col-md-9 col-sm-12'>
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/ManageUserOrder`}>
                        <ManageUserOrder />
                    </Route>
                    <Route path={`${path}/AddProduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/AddAdmin`}>
                        <AddAdmin />
                    </Route>
                    <Route path={`${path}/ManageAllProduct`}>
                        <ManageAllProduct />
                    </Route>

                </Switch>
            </div>
        </div>
    );
}

export default Topics;
