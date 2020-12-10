import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from "../pages/Main";
import ModernTimes from "../pages/ModernTimes";
import Story from "../pages/Story";
import NotFound from "../pages/NotFound";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route exact path="/story">
                <Story />
            </Route>
            <Route exact path="/modern">
                <ModernTimes />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;
