import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";

const Routes = () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/TV" component={TV} />
                <Route path="/TV/popular" render={() => <h1>Popular</h1>} />
                <Route path="/Search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);

export default Routes;