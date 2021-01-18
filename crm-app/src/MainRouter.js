import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './_components';

import CustomerDetails from './_Pages/customerDetails/customerDetails';
import ProductDetails from './_Pages/productDetails/productDetails';

const MainRouter = () => (
    <Switch>
        <PrivateRoute exact path="/" component={CustomerDetails} />
        <PrivateRoute path="/customer-details" component={CustomerDetails} />
        <PrivateRoute path="/product-details" component={ProductDetails} />
    </Switch>
)

export default MainRouter;
